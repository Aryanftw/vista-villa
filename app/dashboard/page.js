import { auth, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return <RedirectToSignIn />;
  }

  return (
    <SignedIn>
      <div className="p-6">
        <h1 className="text-xl font-bold">User Dashboard</h1>
        <p>Welcome to your dashboard!</p>
      </div>
    </SignedIn>
  );
}
