// // app/admin/admin-dashboard
// 'use client'
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';

// export default function Dashboard() {
//   const { data: session } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     if (!session) {
//       router.push('/auth/signin');
//     }
//   }, [session, router]);

//   if (session?.user.role !== 'admin') {
//     return <p>Access Denied</p>;
//   }

//   return <p>Welcome to the Admin Dashboard!</p>;
// }











// app/admin/admin-dashboard/page.js
'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Correct import from next/navigation
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter(); // Correct useRouter

  useEffect(() => {
    if (!session) {
      router.push('/auth/signin'); // Redirect if not logged in
    }
  }, [session, router]);

  if (!session) {
    return <p className="grid place-items-center h-full mt-24 z-40" >Loading...</p>; // Handle loading state while session is being fetched
  }

  if (session?.user.role !== 'user') {
    return <p>Access Denied</p>; // Show message if the user is not an admin
  }

  return <p className="mt-24">Welcome to the Admin Dashboard!</p>; // Main content for admin
}
