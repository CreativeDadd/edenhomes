// // import NextAuth from 'next-auth';
// // import CredentialsProvider from 'next-auth/providers/credentials';
// // import bcrypt from 'bcryptjs';
// // import User from '@/app/models/User';
// // import connectToDatabase from '@/app/lib/mongodb';

// // const handler = NextAuth({
// //   providers: [
// //     CredentialsProvider({
// //       name: 'Credentials',
// //       async authorize(credentials) {
// //         await connectToDatabase();
// //         const user = await User.findOne({ email: credentials.email });

// //         if (!user) {
// //           throw new Error('No user found with this email');
// //         }

// //         const isValidPassword = await bcrypt.compare(credentials.password, user.password);

// //         if (!isValidPassword) {
// //           throw new Error('Invalid password');
// //         }

// //         if (!user.isApproved) {
// //           throw new Error('Your account is not approved yet');
// //         }

// //         return { email: user.email, role: user.role };
// //       }
// //     })
// //   ],
// //   secret: process.env.NEXTAUTH_SECRET,
// //   session: {
// //     strategy: 'jwt',
// //   },
// //   callbacks: {
// //     async jwt({ token, user }) {
// //       if (user) {
// //         token.role = user.role;
// //       }
// //       return token;
// //     },
// //     async session({ session, token }) {
// //       session.user.role = token.role;
// //       return session;
// //     }
// //   },
// //   pages: {
// //     signIn: '/auth/signin'
// //   }
// // });

// // export { handler as GET, handler as POST };







// // // app/api/auth/[...nextauth]/route.js
// // import NextAuth from 'next-auth';
// // import CredentialsProvider from 'next-auth/providers/credentials';
// // import bcrypt from 'bcryptjs';
// // import User from '@/app/models/User';
// // import connectToDatabase from '@/app/lib/mongodb';

// // export const authOptions = {
// //   providers: [
// //     CredentialsProvider({
// //       name: 'Credentials',
// //       credentials: {
// //         email: { label: "Email", type: "text" },
// //         password: { label: "Password", type: "password" }
// //       },
// //       authorize: async (credentials) => {
// //         await connectToDatabase();

// //         // Check if the user exists in the database
// //         const user = await User.findOne({ email: credentials.email });
// //         if (!user) {
// //           throw new Error('No user found');
// //         }

// //         // Verify the password
// //         const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
// //         if (!isPasswordValid) {
// //           throw new Error('Invalid credentials');
// //         }

// //         // Return user object if authentication is successful
// //         return { id: user._id, email: user.email, role: user.role };
// //       }
// //     })
// //   ],
// //   secret: process.env.NEXTAUTH_SECRET, // Ensure this is set in your .env file
// //   pages: {
// //     signIn: '/auth/signin',  // Redirect to a custom sign-in page
// //   },
// //   session: {
// //     strategy: 'jwt',  // Use JSON Web Tokens for sessions
// //   },
// //   callbacks: {
// //     async jwt({ token, user }) {
// //       if (user) {
// //         token.id = user.id;
// //         token.role = user.role;
// //       }
// //       return token;
// //     },
// //     async session({ session, token }) {
// //       session.user.id = token.id;
// //       session.user.role = token.role;
// //       return session;
// //     }
// //   }
// // };

// // const handler = NextAuth(authOptions);
// // export { handler as GET, handler as POST };










// // // app/api/auth/[...nextauth]/route.js
// // import NextAuth from 'next-auth';
// // import CredentialsProvider from 'next-auth/providers/credentials';
// // import bcrypt from 'bcryptjs';
// // import User from '@/app/models/User';
// // import connectToDatabase from '@/app/lib/mongodb';

// // export const authOptions = {
// //   providers: [
// //     CredentialsProvider({
// //       name: 'Credentials',
// //       credentials: {
// //         email: { label: "Email", type: "text" },
// //         password: { label: "Password", type: "password" }
// //       },
// //       authorize: async (credentials) => {
// //         await connectToDatabase();

// //         const user = await User.findOne({ email: credentials.email });
// //         if (!user) {
// //           throw new Error('No user found');
// //         }

// //         const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
// //         if (!isPasswordValid) {
// //           throw new Error('Invalid credentials');
// //         }

// //         // Return user object if authentication is successful
// //         return { id: user._id, email: user.email, role: user.role };
// //       }
// //     })
// //   ],
// //   secret: process.env.NEXTAUTH_SECRET,
// //   session: {
// //     strategy: 'jwt',
// //   },
// //   callbacks: {
// //     async jwt({ token, user }) {
// //       if (user) {
// //         token.id = user.id;
// //         token.role = user.role;
// //       }
// //       return token;
// //     },
// //     async session({ session, token }) {
// //       session.user.id = token.id;
// //       session.user.role = token.role;
// //       return session;
// //     }
// //   }
// // };

// // const handler = NextAuth(authOptions);
// // export { handler as GET, handler as POST };










// // // // app/api/auth/[...nextauth]/route.js
// // import { compare } from 'bcryptjs';
// //  import NextAuth from 'next-auth';
// //  import CredentialsProvider from 'next-auth/providers/credentials';
// // // import bcrypt from 'bcryptjs';
// // import User from '@/app/models/User';
// // import connectToDatabase from '@/app/lib/mongodb';





// // export const authOptions = {
// //   providers: [
// //     CredentialsProvider({
// //       name: 'Credentials',
// //       credentials: {
// //         email: { label: 'Email', type: 'email', placeholder: 'Email' },
// //         password: { label: 'Password', type: 'password', placeholder: 'Password' },
// //       },
// //       async authorize(credentials) {
// //         await dbConnect();
// //         const user = await User.findOne({ email: credentials.email });
// //         if (!user) throw new Error('No user found with this email');
        
// //         const isValidPassword = await compare(credentials.password, user.password);
// //         if (!isValidPassword) throw new Error('Invalid credentials');
        
// //         return { id: user._id, name: user.name, role: user.role };
// //       },
// //     }),
// //   ],
// //   session: {
// //     strategy: 'jwt',
// //   },
// //   callbacks: {
// //     async jwt({ token, user }) {
// //       if (user) token.role = user.role;
// //       return token;
// //     },
// //     async session({ session, token }) {
// //       session.user.role = token.role;
// //       return session;
// //     },
// //   },
// //   secret: process.env.NEXTAUTH_SECRET,
// // };

// // export default NextAuth(authOptions);






















// import { compare } from 'bcryptjs';
// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import User from '@/app/models/User';
// import connectToDatabase from '@/app/lib/mongodb';

// const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email', placeholder: 'Email' },
//         password: { label: 'Password', type: 'password', placeholder: 'Password' },
//       },
//       async authorize(credentials) {
//         await connectToDatabase();
//         const user = await User.findOne({ email: credentials.email });
//         if (!user) throw new Error('No user found with this email');

//         const isValidPassword = await compare(credentials.password, user.password);
//         if (!isValidPassword) throw new Error('Invalid credentials');

//         return { id: user._id, name: user.name, role: user.role };
//       },
//     }),
//   ],
//   session: {
//     strategy: 'jwt',
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) token.role = user.role;
//       return token;
//     },
//     async session({ session, token }) {
//       session.user.role = token.role;
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// // Export HTTP methods
// export const POST = async (req, res) => {
//   return NextAuth(req, res, authOptions);
// };













// /api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/app/models/User'; // Ensure this points to your correct model
import bcrypt from 'bcryptjs';
import connectToDatabase from '@/app/lib/mongodb';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await connectToDatabase();
        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error('No user found with that email');
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordValid) {
          throw new Error('Invalid password');
        }

        if (user.role !== 'admin') {
          throw new Error('Unauthorized. Admins only.');
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: '/admin/asdemcirnret', // The secret admin login page
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      session.user.role = token.role;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
