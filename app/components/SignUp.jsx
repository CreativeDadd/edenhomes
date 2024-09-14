// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function SignUp() {
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
//     <form onSubmit={handleSubmit}>
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
