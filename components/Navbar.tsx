'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Kevin Neung
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/projects" className="text-gray-300 hover:text-white transition">
            Projects
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition">
            About
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-white transition">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
