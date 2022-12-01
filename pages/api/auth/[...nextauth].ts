import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async redirect(params: { url: string }) {
      const { url } = params

      // url is just a path, e.g.: /videos/pets
      if (!url.startsWith("http")) return url

      // If we have a callback use only its relative path
      const callbackUrl = new URL(url).searchParams.get("callbackUrl")
      if (!callbackUrl) return url

      return new URL(callbackUrl as string).pathname
    },
  },
}
export default NextAuth(authOptions)
