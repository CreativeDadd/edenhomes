
// // 'use client'
// // import { useState } from 'react';
// // import { useRouter } from 'next/navigation'

// // export default function Login() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const router = useRouter()

// //   const handleLogin = async () => {
// //     const response = await fetch('/api/login', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({ email, password }),
// //     });

// //     if (response.ok) {
// //       alert('Login successful!');
// //       onclose()
// //       router.push("/admin")
// //     } else {
// //       alert('Login failed!');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <input
// //         type="email"
// //         placeholder="Enter Email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //       />
// //       <input
// //         type="password"
// //         placeholder="Enter Password"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //       />
// //       <button onClick={handleLogin}>Login</button>
// //     </div>
// //   );
// // }


















// 'use client'
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = async () => {
//     const response = await fetch('/api/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });

//     if (response.ok) {
//       alert('Login successful!');
//       router.push("/admin");
//     } else {
//       alert('Login failed!');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Login</h2>
//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
//         />
//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
//         />
//         <button
//           onClick={handleLogin}
//           className="w-full bg-[#ff4500] hover:bg-[#ee9519] text-white py-3 rounded-lg hover:bg-orange-600 transition duration-300"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }
