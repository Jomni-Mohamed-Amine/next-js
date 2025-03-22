
import React from 'react'
import Link from 'next/link';

function Navbar() {
    return (
      <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
        <div className="text-lg font-bold">My app</div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/pages/products" className="hover:text-gray-300">Products</Link>
          <Link href="/pages/contact" className="hover:text-gray-300">contact</Link>

        </div>
      </nav>
    );
  }

export default Navbar
