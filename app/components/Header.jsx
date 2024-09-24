

// // app/components/Header.jsx
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { signOut } from 'next-auth/react';
// import { useSession } from 'next-auth/react';


// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { data: session } = useSession();

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="bg-white shadow-lg fixed w-full z-20 top-0 py-2">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex justify-center items-center gap-4">
//           <Link href="/">
//           <Image src="/images/orangeHomeLogo.jpg"  alt="brandlogo" width={60} height={60} className="border-2 border-[#ff7F50] rounded-[100%]" />
//           </Link>
//             <Link href="/" className="text-xl font-bold text-[#FF7F50] hidden sm:flex ">
            
//             Orange-Sun Homes
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
//             <Link href="/blog-nav" className="text-gray-800 hover:text-[#FF7F50] font-medium">
//             Blog/News
//             </Link>
//             <Link href="/admin/loginmodal" className="bg-[#FF7F50] hover:bg-[#FF6A35] text-white py-2 px-4 rounded-md font-semibold transition-all">
//               Admin Login
//             </Link>

//             {session ? (
//         <>
//           <span>{session.user.email}</span>
//           <button onClick={() => signOut()}>Logout</button>
//         </>
//       ) : (
//         <>
//           <button onClick={() => signIn()}>Login</button>
//         </>
//       )}
            
//             {/* <Link href="/signup-form" className="border-[#FF7F50] border-solid border-2 hover:bg-[#FF6A35] text-[#FF7F50] hover:text-white py-2 px-4 rounded-md font-semibold transition-all">
//               Signup
//             </Link> */}
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
//           <Link href="/blog-nav" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>
//           Blog/News
//           </Link>
//           <Link href="/admin/loginmodal" className="bg-[#FF7F50] hover:bg-[#FF6A35] text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>
//             Login
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }




// // app/components/Header.jsx

// 'use client'; // Ensure that this is a client component

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { signOut, signIn, useSession } from 'next-auth/react';

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { data: session } = useSession(); // Session data from next-auth

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="bg-white shadow-lg fixed w-full z-20 top-0 py-2">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex justify-center items-center gap-4">
//             <Link href="/">
//               <Image src="/images/orangeHomeLogo.jpg" alt="brandlogo" width={60} height={60} className="border-2 border-[#ff7F50] rounded-[100%]" />
//             </Link>
//             <Link href="/" className="text-xl font-bold text-[#FF7F50] hidden sm:flex">
//               Orange-Sun Homes
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex space-x-8 items-center">
//             <Link href="/" className="text-gray-800 hover:text-[#FF7F50] font-medium">Home</Link>
//             <Link href="/view-property" className="text-gray-800 hover:text-[#FF7F50] font-medium">Properties</Link>
//             <Link href="/about" className="text-gray-800 hover:text-[#FF7F50] font-medium">About Us</Link>
//             <Link href="/contact" className="text-gray-800 hover:text-[#FF7F50] font-medium">Contact</Link>
//             <Link href="/testimonials" className="text-gray-800 hover:text-[#FF7F50] font-medium">Testimonials</Link>
//             <Link href="/blog-nav" className="text-gray-800 hover:text-[#FF7F50] font-medium">Blog/News</Link>
//             <Link href="/admin/loginmodal" className="bg-[#FF7F50] hover:bg-[#FF6A35] text-white py-2 px-4 rounded-md font-semibold transition-all">Admin Login</Link>

//             {session ? (
//               <>
//                 <span>{session.user.email}</span>
//                 <button onClick={() => signOut()} className="text-gray-800 hover:text-[#FF7F50] font-medium">Logout</button>
//               </>
//             ) : (
//               <button onClick={() => signIn()} className="text-gray-800 hover:text-[#FF7F50] font-medium">Login</button>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden flex items-center">
//             <button onClick={toggleMenu} className="relative w-10 h-10 flex flex-col justify-between items-center focus:outline-none">
//               <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'transform translate-y-2 rotate-45' : ''}`}></span>
//               <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
//               <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <Link href="/" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Home</Link>
//           <Link href="/view-property" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Properties</Link>
//           <Link href="/about" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>About</Link>
//           <Link href="/contact" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Contact</Link>
//           <Link href="/testimonials" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Testimonials</Link>
//           <Link href="/blog-nav" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Blog/News</Link>
//           <Link href="/admin/loginmodal" className="bg-[#FF7F50] hover:bg-[#FF6A35] text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Login</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }













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
              Orange-Sun Homes
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link href="/" className="text-gray-800 hover:text-[#FF7F50] font-medium">Home</Link>
            <Link href="/view-property" className="text-gray-800 hover:text-[#FF7F50] font-medium">Properties</Link>
            <Link href="/about" className="text-gray-800 hover:text-[#FF7F50] font-medium">About</Link>
            <Link href="/contact" className="text-gray-800 hover:text-[#FF7F50] font-medium">Contact</Link>
            <Link href="/testimonials" className="text-gray-800 hover:text-[#FF7F50] font-medium">Testimonials</Link>
            <Link href="/blog-nav" className="text-gray-800 hover:text-[#FF7F50] font-medium">Blog</Link>
            {/* <Link href="/admin/loginmodal" className="bg-[#FF7F50] hover:bg-[#FF6A35] text-white py-2 px-4 rounded-md font-semibold transition-all">Admin Login</Link> */}

            {/* {session ? (
              <>
                <span>{session.user.email}</span>
                <button onClick={() => signOut()} className="text-gray-800 hover:text-[#FF7F50] font-medium">Logout</button>
              </>
            ) : (
              <>
                
                <button onClick={() => signup()}  className="text-gray-800 hover:text-[#FF7F50] font-medium">SignUp</button>
                <button onClick={() => signIn()} className="text-gray-800 hover:text-[#FF7F50] font-medium">SignIn</button>
              </>
            )} */}

{session ? (
  <>
    <span>{session.user.email}</span>
    <Link rel="stylesheet" href="/admin/admin-dashboard" className="underline text-[#FF7F69]" >Admin DashBoard</Link>
    <button onClick={() => signOut()} className="text-gray-800 hover:text-[#FF7F50] font-medium">Logout</button>
  </>
) : (
  <>
    {/* SignUp Button - Use Link to navigate */}
    <Link href="/auth/signup" className=" font-medium bg-[#FF7F50] hover:bg-[#FF6A35] text-white py-1 px-4   transition-all rounded-full">Agents SignUp</Link>
    
    {/* SignIn Button - Customize signIn behavior to avoid default callbackUrl */}
    <Link  
      href="/auth/signin"
      className=" border border-[#ff5e24] text-gray-800 font-medium  border-solid  py-1 px-6 rounded-full hover:text-[#ff5e24]"> Agents
      Login
    </Link>
  </>
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
          <Link href="/about" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>About</Link>
          <Link href="/contact" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Contact</Link>
          <Link href="/testimonials" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Testimonials</Link>
          <Link href="/blog-nav" className="text-gray-800 hover:text-[#FF7F50] block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Blog/News</Link>
          {/* <Link href="/admin/loginmodal" className="bg-[#FF7F50] hover:bg-[#FF6A35] text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Login</Link> */}
          {session ? (
  <>
    <span>{session.user.email}</span>
    <Link rel="stylesheet" href="/admin/admin-dashboard" className="underline text-[#FF7F69]" >Admin DashBoard</Link> 
    <button onClick={() => signOut()} className="text-gray-800 hover:text-[#FF7F50] font-medium">Logout</button>
  </>
) : (
  <div className="flex flex-col gap-1 max-w-24">
    {/* SignUp Button - Use Link to navigate */}
    <Link href="/auth/signup" className="text-gray-800 border border-solid border-[#ff7f50] py-0.5 px-6 rounded-full hover:text-[#FF7F50] font-medium ">Agents SignUp</Link>
    
    {/* SignIn Button - Customize signIn behavior to avoid default callbackUrl */}
    <Link  
      href="/auth/signin"
      className="text-gray-800 hover:text-[#FF7F50] font-medium border border-solid border-[#ff7f50] py-0.5 px-6 rounded-full mt-5">
      Agents Login
    </Link>
  </div>
)}
        </div>
      </div>
    </nav>
  );
}
