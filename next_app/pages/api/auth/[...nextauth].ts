import NextAuth from 'next-auth';

export default NextAuth({
  providers: [],
  pages: {},
  callbacks: {
    async signIn({ user }) {
      // TODO: create API call to get the token
      user.acessToken = 'FAKE-TOKEN';
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.acessToken = user.acessToken;
        token.profile = user.profile;
        token.subscription = user.subscription;
      }
      return token;
    },
    async session({ session, token }) {
      session.acessToken = token.acessToken;
      session.profile = token.profile;
      session.subscription = token.subscription;
      return session;
    },
  },
});
