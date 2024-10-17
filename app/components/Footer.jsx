import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#FF7F50]">Orange-Sun Homes Limited</h2>
          <p>Discover your dream home with us. We offer premium relocation, vacation, and getaway accommodations that suit your lifestyle.</p>
          <p className="text-sm">© {new Date().getFullYear()} Orange-Sun Homes Limited. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#FF7F50]">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link href="/properties" className="hover:text-orange-400">Properties</Link></li>
            <li><Link href="/about" className="hover:text-orange-400">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-orange-400">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Information & Newsletter Subscription */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#FF7F50]">Contact & Newsletter</h3>
          <ul className="space-y-2">
            <li><strong>Address:</strong> 123 Dreamland Avenue, Sunset City, Country</li>
            <li><strong>Email:</strong> info@orangesunhomes.com</li>
            <li><strong>Phone:</strong> +1238102555210</li>
          </ul>

          {/* Newsletter Subscription */}
          <div className="mt-6">
            <h4 className="text-lg font-medium">Subscribe to Our Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Get the latest updates on new properties and exclusive offers.</p>
            <form className="flex flex-col lg:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 text-gray-900 rounded-l-md border-none focus:outline-none"
              />
              <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-r-md bg-[#FF4500] hover:bg-[#e04208]  transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Site Map */}
      <div className="bg-gray-800 mt-8 py-4">
        <div className="container mx-auto text-center">
          <p>Site Map</p>
          <ul className="md:inline-flex space-x-6 ">
            <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link href="/view-property" className="hover:text-orange-400">Properties</Link></li>
            <li><Link href="/about" className="hover:text-orange-400">About Us</Link></li>
            <li><Link href="/blog-nav" className="hover:text-orange-400">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400">Contact Us</Link></li>
            <li><Link href="/privacy" className="hover:text-orange-400">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-orange-400">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
