import { json, LoaderFunction } from "@remix-run/node";
import { getKindeSession } from "@kinde-oss/kinde-remix-sdk";
import { db } from "~/db";

export const loader: LoaderFunction = async ({ request }) => {
  const { getUser } = await getKindeSession(request);
  const user = await getUser();

  if (!user || !user.id || !user.email) {
    return json({ success: false }, { status: 401 });
  }

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    await db.user.create({
      data: {
        id: user.id,
        email: user.email,
      },
    });
  }

  return json({ success: true });
};
