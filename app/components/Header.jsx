
'use client'; 
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut, signIn, useSession } from 'next-auth/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession(); // Session data from next-auth

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-20 top-0 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex justify-center items-center gap-4">
            <Link href="/">
              <Image src="/images/logo.svg" alt="brandlogo" width={60} height={60}  priority />
            </Link>
            <Link href="/" className="text-xl font-bold text-[#FF7F50] hidden sm:flex">
              EdenHomes Limited
            </Link>
          </div>

          {/* Desktop Menu   Home|About|Why Use OrangeSun|Agents|Corporates|Contact|Testimonial|Blog*/}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link href="/" className="text-gray-800 hover:text-[#FF7F50] font-medium">Home</Link>
            <Link href="/view-property" className="text-gray-800 hover:text-[#FF7F50] font-medium">Properties</Link>
            <Link href="/about" className="text-gray-800 hover:text-[#FF7F50] font-medium">About</Link>
            <Link href="/why-use-orangeSun" className="text-gray-800 hover:text-[#FF7F50] font-medium">Why Use OrangeSun</Link>
            <Link href="/agents-page" className="text-gray-800 hover:text-[#FF7F50] font-medium">Agents</Link>
            <Link href="/corporates" className="text-gray-800 hover:text-[#FF7F50] font-medium">Corporates</Link>
            <Link href="/contact" className="text-gray-800 hover:text-[#FF7F50] font-medium">Contact</Link>
            <Link href="/testimonials" className="text-gray-800 hover:text-[#FF7F50] font-medium">Testimonials</Link>
            <Link href="/blog-nav" className="text-gray-800 hover:text-[#FF7F50] font-medium">Blog</Link>
                  
           {session ? (
  <>
  
    <span>{session.user.email}</span>
    <Link rel="stylesheet" href="/admin/admin-dashboard" className=" text-[#FF7F69]" >Admin DashBoard</Link> 
    
  </>
) : (
  <></>
)}
      




          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="relative w-10 h-10 flex flex-col justify-between items-center focus:outline-none">
              <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'transform translate-y-2 rotate-45' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Home</Link>
          <Link href="/view-property" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Properties</Link>
          <Link href="/why-use-orangeSun" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Why Use OrangeSun</Link>
          <Link href="/agents-page" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Agents</Link>
          <Link href="/corporates" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Corporates</Link>
          
          <Link href="/about" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>About</Link>
          <Link href="/contact" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Contact</Link>
          <Link href="/testimonials" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Testimonials</Link>
          <Link href="/blog-nav" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Blog/News</Link>
          
          
          
           {session ? (
  <>
    <span>{session.user.email}</span>
    <Link rel="stylesheet" href="/admin/admin-dashboard" className="underline text-[#FF7F69]" >Admin DashBoard</Link> 
    <button onClick={() => signOut()} className="text-gray-800 hover:text-[#FF7F50] font-medium">Logout</button>
  </>
) : (
  <div className="flex flex-col gap-1 max-w-24">
   
  </div>
)}
          {/* <Link href="/admin/loginmodal" className="bg-[#FF7F50] hover:bg-[#FF6A35] text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Login</Link> */}
        </div>
      </div>
    </nav>
  );
}
