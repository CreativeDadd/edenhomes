// 'use client';
// import { signIn } from 'next-auth/react';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function SignInPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await signIn('credentials', {
//       redirect: false,
//       email,
//       password
//     });

//     if (!res.error) {
//       router.push('/dashboard');
//     } else {
//       alert('Login failed');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mt-24">
//       <h1>Sign In</h1>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Sign In</button>
//     </form>
//   );
// }














// 'use client';
// import { signIn } from 'next-auth/react';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function SignInPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await signIn('credentials', {
//       redirect: false,
//       email,
//       password
//     });

//     if (!res.error) {
//       router.push('/admin');
//     } else {
//       alert('Login failed');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-50">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 w-full max-w-md space-y-6"
//       >
//         <h1 className="text-2xl font-bold text-center text-[#FF7F50]">Sign In</h1>

//         <div className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7F50]"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7F50]"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-[#FF7F50] hover:bg-[#FF6A35] text-white font-semibold py-2 px-4 rounded-md transition-all"
//         >
//           Sign In
//         </button>

//         <div className="text-center mt-4">
//           <span className="text-gray-600">Don't have an account? </span>
//           <a href="/auth/signup" className="text-[#FF7F50] hover:underline">
//             Sign Up
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// }
















'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res.ok) {
      router.push('/admin');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-[#FF7F50]">Sign In</h1>

        {error && (
          <div className="text-red-500 text-center">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7F50]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7F50]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#FF7F50] hover:bg-[#FF6A35] text-white font-semibold py-2 px-4 rounded-md transition-all"
        >
          Sign In
        </button>

        <div className="text-center mt-4">
          <span className="text-gray-600">Don&apos;t have an account? </span>
          <a href="/auth/signup" className="text-[#FF7F50] hover:underline">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}
