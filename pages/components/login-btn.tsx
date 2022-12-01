import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        Signed in {session.user?.email}
        <br />
        <button
          onClick={() => signOut({ callbackUrl: process.env.NEXTAUTH_URL })}
        >
          Sign out
        </button>
      </>
    )
  }

  return (
    <>
      Not signed in
      <br />
      <button
        onClick={() =>
          signIn(undefined, { callbackUrl: process.env.NEXTAUTH_URL! })
        }
      >
        Sign in
      </button>
    </>
  )
}
