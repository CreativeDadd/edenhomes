// // app/auth/signin/page.jsx
// 'use client';
// import { signIn } from 'next-auth/react';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function SignInPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await signIn('credentials', {
//       redirect: false,
//       email,
//       password,
//     });

//     if (res.ok) {
//       router.push('/agents/agent-dashboard');
//     } else {
//       setError('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-50">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 w-full max-w-md space-y-6"
//       >
//         <h1 className="text-2xl font-bold text-center text-[#FF7F50]">Sign In</h1>

//         {error && (
//           <div className="text-red-500 text-center">
//             {error}
//           </div>
//         )}

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




























// app/auth/signin/page.jsx
'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Call sign-in API
  //   const res = await signIn('credentials', {
  //     redirect: false,
  //     email, 
  //     password,
  //   });

  //   if (res.ok) {
  //     // Fetch agent approval status
  //     const response = await fetch(`/api/agents/${email}/status`);
  //     const data = await response.json();

  //     if (data.isApproved) {
  //       // Redirect to agent's unique profile page if approved
  //       router.push(`/agents/${data.agentId}/dashboard`);
  //     } else {
  //       setError('Your account is not yet approved by the admin.');
  //     }
  //   } else {
  //     setError('Invalid credentials. Please try again.');
  //   }
  // };


// Updated handleSubmit function in app/auth/signin/page.jsx

const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch('/api/auth/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (res.ok) {
    // Redirect to agent's unique profile page
    router.push(`/agents/${data.agentId}/dashboard`);
  } else {
    setError(data.message);
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
          <div className="text-red-500 text-center">{error}</div>
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
          <span className="text-gray-600">Don't have an account? </span>
          <a href="/auth/signup" className="text-[#FF7F50] hover:underline">Sign Up</a>
        </div>
      </form>
    </div>
  );
}
