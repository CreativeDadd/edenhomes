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








// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function AgentsSignUp() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     password: '',
//     age: '',
//   });
//   const [error, setError] = useState('');
//   const [showModal, setShowModal] = useState(false); // Modal state for success message
//   const router = useRouter();

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ ...formData, role: 'agent' }), // Pass 'agent' role explicitly
//       });
      
//       if (!res.ok) {
//         const { message } = await res.json();
//         throw new Error(message || 'Error signing up');
//       }
      
//       setShowModal(true); // Show success modal on successful signup
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     router.push('/'); // Redirect to the homepage after closing the modal
//   };

//   return (
//     <div className="container mx-auto p-6 mt-12 max-w-lg">
//       <h2 className="text-3xl font-bold text-black mb-6">Sign Up as an Agent</h2>
//       <form onSubmit={handleSignUp} className="space-y-6 bg-white p-6 shadow-lg rounded-lg">
//         <input
//           type="text"
//           placeholder="Name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           className="w-full p-3 border border-gray-300 rounded-md"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           className="w-full p-3 border border-gray-300 rounded-md"
//           required
//         />
//         <input
//           type="tel"
//           placeholder="Phone Number"
//           value={formData.phone}
//           onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//           className="w-full p-3 border border-gray-300 rounded-md"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Address"
//           value={formData.address}
//           onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//           className="w-full p-3 border border-gray-300 rounded-md"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Age"
//           value={formData.age}
//           onChange={(e) => setFormData({ ...formData, age: e.target.value })}
//           className="w-full p-3 border border-gray-300 rounded-md"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//           className="w-full p-3 border border-gray-300 rounded-md"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-[#FF7F50] text-white p-3 rounded-md hover:bg-[#FF4500] transition duration-300"
//         >
//           Sign Up
//         </button>
//         {error && <p className="text-red-500">{error}</p>}
//       </form>

//       {/* Modal for success message */}
//       {showModal && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
//             <h3 className="text-2xl font-bold mb-4">Signup Successful!</h3>
//             <p className="text-gray-700 mb-6">Awaiting admin approval for your account.</p>
//             <button
//               onClick={closeModal}
//               className="bg-[#FF7F50] text-white px-4 py-2 rounded-md hover:bg-[#FF4500] transition duration-300"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }










// /app/components/AgentsSignUp.jsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AgentsSignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    age: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, role: 'agent' }), // Pass 'agent' role explicitly
      });
      
      if (!res.ok) {
        const { message } = await res.json();
        throw new Error(message || 'Error signing up');
      }
      
      setShowModal(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    router.push('/');
  };

  return (
    <div className="container mx-auto p-6 mt-12 max-w-lg">
      <div className="text-black mb-6 text-center mt-6">
      <h2 className="text-3xl font-bold text-black ">Are You an Experienced Property Agent?</h2>
      <p className="text-[#ff7f50] pt-4"> (We Care About Your Success. Fill the Form to Sign Up.)</p>
      </div>
      <form onSubmit={handleSignUp} className="space-y-6 bg-white p-6 shadow-lg rounded-lg">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#FF7F50] text-white p-3 rounded-md hover:bg-[#FF4500] transition duration-300"
        >
          Sign Up
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Signup Successful!</h3>
            <p className="text-gray-700 mb-6">Awaiting admin approval for your account.</p>
            <button
              className="bg-[#FF7F50] text-white p-3 rounded-md hover:bg-[#FF4500] transition duration-300"
              onClick={closeModal}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
