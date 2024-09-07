"use client";

export default function SuccessPopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg relative w-[300px]">
        <button
          className="absolute top-2 left-2 text-gray-600"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">Success!</h2>
        <p className="text-gray-700">You have successfully signed up.</p>
      </div>
    </div>
  );
}
