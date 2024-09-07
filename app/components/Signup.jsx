// 'use client'
// import { useState } from 'react';

// export default function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = async () => {
//     const response = await fetch('/api/signup', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });

//     if (response.ok) {
//       alert('Signup successful!');
//     } else {
//       alert('Signup failed!');
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <input
//         type="email"
//         placeholder="Enter Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Enter Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleSignup}>Signup</button>
//     </div>
//   );
// }



// app/components
// 'use client'

// import React, { useState } from 'react';

// export default function HomePage({signupModalOpen, onClose}) {
//   // const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
//   const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
//   const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
  
//     const handleSignup = async () => {
//       const response = await fetch('/api/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
  
//       if (response.ok) {
//         alert('Signup successful!');
//       } else {
//         alert('Signup failed!');
//       }
//     };


//   const handleSignupSubmit = (e) => {
//     e.preventDefault();
//     // Close signup modal and show success popup
//     // setIsSignupModalOpen(false);
//     setIsSuccessPopupOpen(true);
//   };

//   return (
//     <div className="relative">
//       <header className="bg-gray-900 text-white p-4">
//         <h1 className="text-3xl">Welcome to Orange-Sun Homes Limited</h1>
//         <button
//           className="bg-orange-500 text-white px-4 py-2 rounded mt-4"
//           onClick={handleSignupSubmit}
//         >
//           Sign Up
//         </button>
//       </header>

//       {/* Signup Modal */}
//       {signupModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-8 rounded-lg relative w-[400px]">
//             <button
//               className="absolute top-2 left-2 text-gray-600"
//               onClick={onClose}
//             >
//               X
//             </button>
//             <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//             <form onSubmit={handleSignup}>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full p-2 border border-gray-300 rounded mb-4"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full p-2 border border-gray-300 rounded mb-4"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-orange-500 text-white py-2 rounded"
//               >
//                 Sign Up
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Success Popup */}
//       {isSuccessPopupOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg relative w-[300px]">
//             <button
//               className="absolute top-2 left-2 text-gray-600"
//               onClick={() => setIsSuccessPopupOpen(false)}
//             >
//               X
//             </button>
//             <h2 className="text-2xl font-bold mb-4">Success!</h2>
//             <p className="text-gray-700">You have successfully signed up.</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
 
'use client'

import React, { useState } from 'react';

export default function HomePage() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      setIsSuccessPopupOpen(true);
      setIsSignupModalOpen(false);
    } else {
      alert('Signup failed!');
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  };

  return (
    <div className="relative">
      <header className="bg-gray-800 text-white p-6 shadow-lg">
        <h1 className="text-4xl font-extrabold">Welcome to Orange-Sun Homes Limited</h1>
        <button
          className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg mt-4 hover:bg-yellow-300 transition"
          onClick={() => setIsSignupModalOpen(true)}
        >
          Sign Up
        </button>
      </header>

      {/* Signup Modal */}
      {isSignupModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg relative w-[400px] shadow-xl">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={() => setIsSignupModalOpen(false)}
            >
              X
            </button>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Sign Up</h2>
            <form onSubmit={handleSignupSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-md mb-4 shadow-sm focus:ring-2 focus:ring-yellow-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-md mb-4 shadow-sm focus:ring-2 focus:ring-yellow-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-800 py-3 rounded-md shadow-md hover:bg-yellow-300 transition"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {isSuccessPopupOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg relative w-[300px] shadow-xl">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={() => setIsSuccessPopupOpen(false)}
            >
              X
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Success!</h2>
            <p className="text-gray-700">You have successfully signed up.</p>
          </div>
        </div>
      )}
    </div>
  );
}
