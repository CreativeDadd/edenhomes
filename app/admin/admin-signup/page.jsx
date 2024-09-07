import { useState } from 'react';
import Signup from '@/app/components/Signup';

export default function LoginPage() {
//   const [isModalOpen, setModalOpen] = useState(true);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);


  const handleClose = () => {
    setIsSignupModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Signup signupModalOpen={isSignupModalOpen} onClose={handleClose} />
    </div>
  );
}
