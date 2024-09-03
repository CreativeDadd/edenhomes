// app/components/LoginModal.js
// export default function LoginModal({ isOpen, onClose }) {
//     const handleLogin = () => {
//       const password = prompt("Enter Password");
//       if (password === "admin123") {
//         alert("Login successful");
//       } else {
//         alert("Invalid password");
//       }
//     };
  
//     return (
//       isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-8 rounded-md">
//             <h2 className="text-2xl font-bold mb-4">Log In</h2>
//             <button onClick={handleLogin} className="bg-orange-500 text-white px-4 py-2 rounded-md">Log In</button>
//             <button onClick={onClose} className="mt-4 text-gray-700">Cancel</button>
//           </div>
//         </div>
//       )
//     );
//   }
  




// export default function LoginModal({ isOpen, onClose }) {
//   console.log('LoginModal rendered', { isOpen });

//   const handleLogin = () => {
//     const password = prompt("Enter Password");
//     if (password === "admin123") {
//       alert("Login successful");
//     } else {
//       alert("Invalid password");
//     }
//   };

//   return (
//     isOpen && (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//         <div className="bg-white p-8 rounded-md">
//           <h2 className="text-2xl font-bold mb-4">Log In</h2>
//           <button onClick={handleLogin} className="bg-orange-500 text-white px-4 py-2 rounded-md">Log In</button>
//           <button onClick={onClose} className="mt-4 text-gray-700">Cancel</button>
//         </div>
//       </div>
//     )
//   );
//  }



// import { useState } from 'react';

// export default function LoginModal({ isOpen, onClose }) {
//   const [password, setPassword] = useState('');
  

//   const handleLogin = () => {
//     if (password === 'admin123') {
//       alert('Login successful');
//       onClose(); // Close the modal on successful login
//     } else {
//       alert('Invalid password');
//     }
//   };

//   return (
//     isOpen && (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//         <div className="bg-white p-8 rounded-md">
//           <h2 className="text-2xl font-bold mb-4 ">Log In</h2>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 mb-4 border border-gray-300 rounded-md"
//             placeholder="Enter Password"
//           />
//           <button
//             onClick={handleLogin}
//             className="bg-green-800 text-white px-4 py-2 rounded-md mr-2"
//           >
//             Log In
//           </button>
//           <button onClick={onClose} className="mt-4 text-gray-700">
//             Cancel
//           </button>
//         </div>
//       </div>
//     )
//   );
// }


// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function LoginModal({ isOpen, onClose }) {
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = () => {
//     if (password === 'admin123') {
//       alert('Login successful');
//       onClose(); // Close the modal
//       router.push('/admin'); // Navigate to the admin dashboard
//     } else {
//       alert('Invalid password');
//     }
//   };

//   return (
//     isOpen && (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//         <div className="bg-white p-8 rounded-md">
//           <h2 className="text-2xl font-bold mb-4">Log In</h2>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 mb-4 border border-gray-300 rounded-md"
//             placeholder="Enter Password"
//           />
//           <button
//             onClick={handleLogin}
//             className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
//           >
//             Log In
//           </button>
//           <button onClick={onClose} className="mt-4 text-gray-700">
//             Cancel
//           </button>
//         </div>
//       </div>
//     )
//   );
// }



// // app/components/LoginModal.jsx
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function LoginModal({ isOpen, onClose, onSuccess }) {
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleLogin = () => {
//     if (password === 'admin123') {
//       onSuccess(); // Call onSuccess to handle navigation
//       setError('');
//       onClose(); // Close the modal
//       router.push('/admin'); // Navigate to the admin dashboard
//     } else {
//       setError('Invalid password');
//     }
//   };

//   return (
//     isOpen && (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//         <div className="bg-white p-8 rounded-md shadow-lg max-w-sm w-full">
//           <h2 className="text-2xl font-bold mb-4">Log In</h2>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//             placeholder="Enter Password"
//           />
//           {error && <p className="text-red-500 mb-4">{error}</p>}
//           <div className="flex justify-end space-x-2">
//             <button
//               onClick={handleLogin}
//               className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
//             >
//               Log In
//             </button>
//             <button
//               onClick={onClose}
//               className="text-gray-700 hover:text-gray-900"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     )
//   );
// }






import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginModal({ isOpen, onClose }) {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (password === 'admin123') {
      onClose(); // Close the modal
      router.push('/admin'); // Navigate to the admin dashboard
    } else {
      alert('Invalid password');
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter Password"
          />
          <div className="flex justify-end">
            <button
              onClick={handleLogin}
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-200"
            >
              Log In
            </button>
            <button
              onClick={onClose}
              className="ml-4 text-gray-500 hover:text-gray-700 transition duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
}
