// app/api/auth/agent/route.js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import Agent from '@/app/models/Agent'; // Agent model
import bcrypt from 'bcryptjs';
import connectToDatabase from '@/app/lib/mongodb';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Agent Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await connectToDatabase();

        // Check for agent user
        const agentUser = await Agent.findOne({ email: credentials.email });
        if (!agentUser) {
          throw new Error('No agent found with that email');
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, agentUser.password);
        if (!isPasswordValid) {
          throw new Error('Invalid password');
        }

        // Check if the agent is approved by the admin
        if (!agentUser.isApproved) {
          throw new Error('Your account is not approved yet.');
        }

        // Return agent user data
        return { email: agentUser.email, name: agentUser.name, id: agentUser._id, role: 'agent' };
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin', // Shared agent login page
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      session.user.role = token.role; // Set user role in the session
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // Assign role to token
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
