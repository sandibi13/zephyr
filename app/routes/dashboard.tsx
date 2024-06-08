import { getKindeSession } from "@kinde-oss/kinde-remix-sdk";
import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Dashboard from "~/components/Dashboard";
import { db } from "~/db";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { getUser } = await getKindeSession(request);
  const user = await getUser();

  if (!user || !user.id) {
    return redirect("/auth-callback?origin=dashboard");
  }

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    return redirect("/auth-callback?origin=dashboard");
  }

  return { user };
};

export default function DashboardPage() {
  const { user } = useLoaderData();

  return <Dashboard />;
}
