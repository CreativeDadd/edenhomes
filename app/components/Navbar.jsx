


// app/components/Navbar.jsx
"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link';

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl">
          Home
        </Link>
        <div>
          {status === "loading" ? (
            <p className="text-white">Loading...</p>
          ) : session ? (
            <>
              <span className="text-white">Welcome, {session.user.name}</span>
              <button
                onClick={() => signOut()}
                className="ml-4 bg-red-500 text-white py-2 px-4 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
