"use server";

/* eslint @typescript-eslint/no-explicit-any:0, @typescript-eslint/prefer-optional-chain:0 */

import { z } from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { generateId, Scrypt } from "lucia";
import { isWithinExpirationDate, TimeSpan, createDate } from "oslo";
import { generateRandomString, alphabet } from "oslo/crypto";
import { eq } from "drizzle-orm";
import { lucia } from "~/lib/auth";
import { db } from "../db";
import {
  signinSchema,
  signupSchema,
  type SigninInput,
  type SignupInput,
  resetPasswordSchema,
} from "~/lib/validators/auth";
import {
  emailVerificationCodes,
  passwordResetTokens,
  users,
} from "../db/schema";
import { sendMail, EmailTemplate } from "~/lib/email";
import { validateRequest } from "~/lib/auth/validate-request";
import { Paths } from "~/constants";
import { env } from "~/env";

export interface ActionResponse<T> {
  fieldError?: Partial<Record<keyof T, string | undefined>>;
  formError?: string;
}

// Sign in function to authenticate a user
export async function signin(
  _: any,
  formData: FormData,
): Promise<ActionResponse<SigninInput>> {
  const obj = Object.fromEntries(formData.entries());

  const parsed = signinSchema.safeParse(obj);
  if (!parsed.success) {
    const err = parsed.error.flatten();
    return {
      fieldError: {
        email: err.fieldErrors.email?.[0],
        password: err.fieldErrors.password?.[0],
      },
    };
  }

  const { email, password } = parsed.data;

  const existingUser = await db.query.users.findFirst({
    where: (table, { eq }) => eq(table.email, email),
  });

  if (!existingUser?.hashedPassword) {
    return {
      formError: "Incorrect email or password",
    };
  }

  const validPassword = await new Scrypt().verify(
    existingUser.hashedPassword,
    password,
  );
  if (!validPassword) {
    return {
      formError: "Incorrect email or password",
    };
  }

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect(Paths.Chat);
}

// Sign up function to register a new user
export async function signup(
  _: any,
  formData: FormData,
): Promise<ActionResponse<SignupInput>> {
  const obj = Object.fromEntries(formData.entries());

  const parsed = signupSchema.safeParse(obj);
  if (!parsed.success) {
    const err = parsed.error.flatten();
    return {
      fieldError: {
        email: err.fieldErrors.email?.[0],
        password: err.fieldErrors.password?.[0],
      },
    };
  }

  const { email, password } = parsed.data;

  const existingUser = await db.query.users.findFirst({
    where: (table, { eq }) => eq(table.email, email),
    columns: { email: true },
  });

  if (existingUser) {
    return {
      formError: "Cannot create account with that email",
    };
  }

  const userId = generateId(21);
  const hashedPassword = await new Scrypt().hash(password);
  await db.insert(users).values({
    id: userId,
    email,
    hashedPassword,
  });

  const verificationCode = await generateEmailVerificationCode(userId, email);
  await sendMail(email, EmailTemplate.EmailVerification, {
    code: verificationCode,
  });

  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect(Paths.VerifyEmail);
}

// Sign out function to end the user's session
export async function signout(): Promise<{ error: string } | void> {
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "No session found",
    };
  }
  await lucia.invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect("/");
}

// Function to resend the verification email to the user
export async function resendVerificationEmail(): Promise<{
  error?: string;
  success?: boolean;
}> {
  const { user } = await validateRequest();
  if (!user) {
    return redirect(Paths.SignIn);
  }
  const lastSent = await db.query.emailVerificationCodes.findFirst({
    where: (table, { eq }) => eq(table.userId, user.id),
    columns: { expiresAt: true },
  });

  if (lastSent && isWithinExpirationDate(lastSent.expiresAt)) {
    return {
      error: `Please wait ${timeFromNow(lastSent.expiresAt)} before resending`,
    };
  }
  const verificationCode = await generateEmailVerificationCode(
    user.id,
    user.email,
  );
  await sendMail(user.email, EmailTemplate.EmailVerification, {
    code: verificationCode,
  });

  return { success: true };
}

// Function to verify the email using a verification code
export async function verifyEmail(
  _: any,
  formData: FormData,
): Promise<{ error: string } | void> {
  const code = formData.get("code");
  if (typeof code !== "string" || code.length !== 8) {
    return { error: "Invalid code" };
  }
  const { user } = await validateRequest();
  if (!user) {
    return redirect(Paths.SignIn);
  }

  const dbCode = await db.transaction(async (tx) => {
    const item = await tx.query.emailVerificationCodes.findFirst({
      where: (table, { eq }) => eq(table.userId, user.id),
    });
    if (item) {
      await tx
        .delete(emailVerificationCodes)
        .where(eq(emailVerificationCodes.id, item.id));
    }
    return item;
  });

  if (!dbCode || dbCode.code !== code)
    return { error: "Invalid verification code" };

  if (!isWithinExpirationDate(dbCode.expiresAt))
    return { error: "Verification code expired" };

  if (dbCode.email !== user.email) return { error: "Email does not match" };

  await lucia.invalidateUserSessions(user.id);
  await db
    .update(users)
    .set({ emailVerified: true })
    .where(eq(users.id, user.id));
  const session = await lucia.createSession(user.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  redirect(Paths.Chat);
}

// Helper function to calculate the time remaining from now until a specified time
const timeFromNow = (time: Date) => {
  const now = new Date();
  const diff = time.getTime() - now.getTime();
  const minutes = Math.floor(diff / 1000 / 60);
  const seconds = Math.floor(diff / 1000) % 60;
  return `${minutes}m ${seconds}s`;
};

// Generate email verification code for user
async function generateEmailVerificationCode(
  userId: string,
  email: string,
): Promise<string> {
  await db
    .delete(emailVerificationCodes)
    .where(eq(emailVerificationCodes.userId, userId));
  const code = generateRandomString(8, alphabet("0-9")); // 8 digit code
  await db.insert(emailVerificationCodes).values({
    userId,
    email,
    code,
    expiresAt: createDate(new TimeSpan(10, "m")), // 10 minutes
  });
  return code;
}
