// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function SignupPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('user');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch('/api/auth/signup', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password, role })
//     });

//     if (res.ok) {
//       router.push('/auth/signin');
//     } else {
//       alert('Signup failed');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mt-24">
//       <h1>Sign Up</h1>
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
//       <select value={role} onChange={(e) => setRole(e.target.value)}>
//         <option value="user">User</option>
//         <option value="agent">Agent</option>
//       </select>
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }




// // import React from 'react'

// // const SignUpPage = () => {
// //   return (
// //     <div className="mt-20">SignUpPage</div>
// //   )
// // }

// // export default SignUpPage







'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, role })
    });

    if (res.ok) {
      router.push('/auth/signin');
    } else {
      alert('Signup failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-[#FF7F50]">Sign Up</h1>

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

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7F50]"
          >
            <option value="user">User</option>
            <option value="agent">Agent</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#FF7F50] hover:bg-[#FF6A35] text-white font-semibold py-2 px-4 rounded-md transition-all"
        >
          Sign Up
        </button>

        <div className="text-center mt-4">
          <span className="text-gray-600">Already have an account? </span>
          <a href="/auth/signin" className="text-[#FF7F50] hover:underline">
            Sign In
          </a>
        </div>
      </form>
    </div>
  );
}
