
// // /app/lib/auth.js
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route'; // Your NextAuth configuration

// export async function isAdmin(req) {
//   const session = await getServerSession(authOptions);

//   if (session && session.user && session.user.role === 'admin') {
//     return session;
//   }

//   return null;
// }













// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/app/lib/authOptions'; // Import your NextAuth options

// // This function checks if the logged-in user is an admin
// export async function isAdmin(req) {
//   // Get the session using NextAuth's `getServerSession` method
//   const session = await getServerSession(req, authOptions);

//   // If there is no session, the user is not logged in
//   if (!session || !session.user) {
//     return null;
//   }

//   // Check if the user's role is 'admin'
//   if (session.user.role === 'admin') {
//     return session; // Return the session if the user is an admin
//   }

//   return null; // If the user is not an admin, return null
// }











import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function isAdmin(req) {
  const session = await getServerSession(authOptions);

  if (session && session.user && session.user.role === 'admin') {
    return session;
  }

  return null;
}
