import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <nav className="flex justify-between py-6 px-8 text-[#402015] shadow-md">
        <div><Link href="/">OrangeHome</Link></div>
        <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/">Properteis</Link>
            <Link href="/">Contact Us</Link>
            <Link href="/">FAQ</Link>
        </div>
        <Link href="/admin/loginmodal">
        <button >
            Admin Login
        </button>
        </Link>

    </nav>
    </>
  )
}

export default Header