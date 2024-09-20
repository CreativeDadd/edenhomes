'use client';
import { useState } from 'react';

export default function MessageBox({ recipient }) {
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipient, message }),
    });

    if (res.ok) {
      setSuccess(true);
      setMessage('');
    }
  };

  return (
    <div className="container max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
      <h1 className="text-2xl font-bold text-center text-black">Send Message</h1>

      <form onSubmit={handleSendMessage} className="mt-6">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message..."
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-[#FF7F50] to-red-500 text-white py-3 mt-4 rounded-md text-lg font-semibold hover:shadow-lg transition duration-200"
        >
          Send Message
        </button>
        {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
      </form>
    </div>
  );
}
