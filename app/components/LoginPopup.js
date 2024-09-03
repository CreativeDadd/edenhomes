import { useState } from 'react';

export default function LoginPopup({ onClose, onLogin }) {
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === 'admin123') {
      onLogin();
      onClose();
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <div className="flex justify-end">
          <button onClick={handleLogin} className="bg-orange-500 text-white py-2 px-4 rounded mr-2">Login</button>
          <button onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
}
