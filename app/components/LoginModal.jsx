
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
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-200"
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
