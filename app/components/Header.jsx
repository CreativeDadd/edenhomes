// import Link from 'next/link'
// import React from 'react'

// const Header = () => {
//   return (
//     <>
//     <nav className="flex justify-between py-6 px-8 text-[#402015] shadow-md">
//         <div><Link href="/">OrangeHome</Link></div>
//         <div className="flex gap-4">
//             <Link href="/">Home</Link>
//             <Link href="/about">About</Link>
//             <Link href="/">Properteis</Link>
//             <Link href="/">Contact Us</Link>
//             <Link href="/">FAQ</Link>
//         </div>
//         <Link href="/admin/loginmodal">
//         <button >
//             Admin Login
//         </button>
//         </Link>

//     </nav>
//     </>
//   )
// }

// export default Header



// import { useState } from 'react';
// import { MenuIcon, XIcon } from '@heroicons/react/outline';

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <a href="/" className="text-2xl font-bold text-[#FF7F50]">
//               Orange-Sun Homes
//             </a>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex space-x-8">
//             <a href="/" className="text-gray-800 hover:text-[#FF7F50] font-medium">
//               Home
//             </a>
//             <a href="/properties" className="text-gray-800 hover:text-[#FF7F50] font-medium">
//               Properties
//             </a>
//             <a href="/about" className="text-gray-800 hover:text-[#FF7F50] font-medium">
//               About Us
//             </a>
//             <a href="/contact" className="text-gray-800 hover:text-[#FF7F50] font-medium">
//               Contact
//             </a>
//             <a
//               href="/login"
//               className="bg-[#FF7F50] hover:bg-[#FF6A35] text-white py-2 px-4 rounded-md font-semibold transition-all"
//             >
//               Login
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex lg:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#FF7F50] hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
//             >
//               {isOpen ? (
//                 <XIcon className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <MenuIcon className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <a href="/" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium">
//               Home
//             </a>
//             <a href="/properties" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium">
//               Properties
//             </a>
//             <a href="/about" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium">
//               About Us
//             </a>
//             <a href="/contact" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium">
//               Contact
//             </a>
//             <a
//               href="/login"
//               className="bg-[#FF7F50] hover:bg-[#FF6A35] text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Login
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }





// app/components/Header.jsx
// "use client";

// import { useState } from 'react';
// import Link from 'next/link';

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/" className="text-2xl font-bold text-[#FF7F50]">
//             <img src="/images/logo.svg" alt="Corporate-logo"  width={50} height={50} />
//               Orange-Sun Homes
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex space-x-8 items-center">
//             <Link href="/" className="text-gray-800 hover:text-[#FF7F50] font-medium">
//               Home
//             </Link>
//             <Link href="/view-property" className="text-gray-800 hover:text-[#FF7F50] font-medium">
//               Properties
//             </Link>
//             <Link href="/about" className="text-gray-800 hover:text-[#FF7F50] font-medium">
//               About Us
//             </Link>
//             <Link href="/contact" className="text-gray-800 hover:text-[#FF7F50] font-medium">
//               Contact
//             </Link>
//             <Link href="/testimonials" className="text-gray-800 hover:text-[#FF7F50] font-medium">
//               Testimonials
//             </Link>
//             <Link
//              href="/admin/loginmodal"
//               className="bg-[#FF7F50] hover:bg-[#FF6A35] text-white py-2 px-4 rounded-md font-semibold transition-all"
//             >
//               Login
//             </Link>
//             <Link
//              href="/login-form"
//               className="bg-[#FF7F50] hover:bg-[#FF6A35] text-white py-2 px-4 rounded-md font-semibold transition-all"
//             >
//               Login Now
//             </Link>
//             <Link
//              href="/signup-form"
//               className=" border-[#FF7F50] border-solid border-2 hover:bg-[#FF6A35] text-[#FF7F50] hover:text-white py-2 px-4 rounded-md font-semibold transition-all"
//             >
//               Signup
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               className="relative w-10 h-10 flex items-center justify-center focus:outline-none"
//             >
//               <span
//                 className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? 'translate-y-1.5 rotate-45' : 'translate-y-0'} `}
//               ></span>
//               <span
//                 className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
//               ></span>
//               <span
//                 className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? '-translate-y-1.5 -rotate-45' : 'translate-y-1.5 rotate-45'}`}
//               ></span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link href="/" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium">
//               Home
//             </Link>
//             <Link href="/properties" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium">
//               Properties
//             </Link>
//             <Link href="/about" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium">
//               About Us
//             </Link>
//             <Link href="/contact" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium">
//               Contact
//             </Link>
//             <Link href="/testimonials" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium">
//               Testimonials
//             </Link>
//             <Link
//               href="/admin/loginmodal"
//               className="bg-[#FF7F50] hover:bg-[#FF6A35] text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Login
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }








// app/components/Header.jsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-20 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#FF7F50]">
              Orange-Sun Homes
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link href="/" className="text-gray-800 hover:text-[#FF7F50] font-medium">
              Home
            </Link>
            <Link href="/view-property" className="text-gray-800 hover:text-[#FF7F50] font-medium">
              Properties
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-[#FF7F50] font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-[#FF7F50] font-medium">
              Contact
            </Link>
            <Link href="/testimonials" className="text-gray-800 hover:text-[#FF7F50] font-medium">
              Testimonials
            </Link>
            <Link href="/blog-nav" className="text-gray-800 hover:text-[#FF7F50] font-medium">
            Blog/News
            </Link>
            <Link href="/admin/loginmodal" className="bg-[#FF7F50] hover:bg-[#FF6A35] text-white py-2 px-4 rounded-md font-semibold transition-all">
              Admin Login
            </Link>
            
            {/* <Link href="/signup-form" className="border-[#FF7F50] border-solid border-2 hover:bg-[#FF6A35] text-[#FF7F50] hover:text-white py-2 px-4 rounded-md font-semibold transition-all">
              Signup
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="relative w-10 h-10 flex flex-col justify-between items-center focus:outline-none"
            >
              <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'transform translate-y-2 rotate-45' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${isOpen ? 'transform -translate-y-2 -rotate-45' : ''}`}></span>  
              <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : '' }`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/view-property" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>
            Properties
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>
            About Us
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>
            Contact
          </Link>
          <Link href="/testimonials" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>
            Testimonials
          </Link>
          <Link href="/admin/loginmodal" className="bg-[#FF7F50] hover:bg-[#FF6A35] text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}






// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="bg-white shadow-lg fixed w-full z-20 top-0">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/" className="text-2xl font-bold text-[#FF7F50]">
//               Orange-Sun Homes
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex space-x-8 items-center">
//             <Link href="/" className="text-gray-800 hover:text-[#FF7F50] font-medium">
//               Home
//             </Link>
//             <Link href="/view-property" className="text-gray-800 hover:text-[#FF7F50] font-medium">
//               Properties
//             </Link>
//             <Link href="/about" className="text-gray-800 hover:text-[#FF7F50] font-medium">
//               About Us
//             </Link>
//             <Link href="/contact" className="text-gray-800 hover:text-[#FF7F50] font-medium">
//               Contact
//             </Link>
//             <Link href="/testimonials" className="text-gray-800 hover:text-[#FF7F50] font-medium">
//               Testimonials
//             </Link>
//             <Link href="/admin/dashboard" className="bg-[#FF7F50] hover:bg-[#FF6A35] text-white py-2 px-4 rounded-md font-semibold transition-all">
//               Login Now
//             </Link>
//             <Link href="/signup-form" className="border-[#FF7F50] border-solid border-2 hover:bg-[#FF6A35] text-[#FF7F50] hover:text-white py-2 px-4 rounded-md font-semibold transition-all">
//               Signup
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               className="relative w-10 h-10 flex flex-col justify-between items-center focus:outline-none"
//             >
//               <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'transform translate-y-2 rotate-45' : ''}`}></span>
//               <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${isOpen ? 'transform -translate-y-2 -rotate-45' : ''}`}></span>  
//               <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : '' }`}></span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <Link href="/" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>
//             Home
//           </Link>
//           <Link href="/view-property" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>
//             Properties
//           </Link>
//           <Link href="/about" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>
//             About Us
//           </Link>
//           <Link href="/contact" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>
//             Contact
//           </Link>
//           <Link href="/testimonials" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>
//             Testimonials
//           </Link>
//           <Link href="/admin/dashboard" className="bg-[#FF7F50] hover:bg-[#FF6A35] text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>
//             Login Now
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
