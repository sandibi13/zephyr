import { getKindeSession } from "@kinde-oss/kinde-remix-sdk";
import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { getUser } = await getKindeSession(request);
  const user = await getUser();
  if (!user || !user.id) {
    throw redirect("/kinde-auth/login?returnTo=/dashboard");
  }
  return { user };
};

export default function Dashboard() {
  const { user } = useLoaderData();

  return (
    <div>
      <h1>{user.email}</h1>
    </div>
  );
}
