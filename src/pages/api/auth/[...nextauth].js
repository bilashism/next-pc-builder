import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],

  pages: {
    signIn: "https://next-pc-builder.vercel.app/login"
  }
};

export default NextAuth(authOptions);
