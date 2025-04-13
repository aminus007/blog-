import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--background)] to-gray-100">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Logo />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[var(--primary)]"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[var(--primary)]"
              >
                About
              </Link>
              <Link
                href="/admin"
                className="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[var(--primary)]"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-[var(--primary)] text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div>
              <Logo className="text-white" />
              <p className="text-gray-300 mt-2">Your source for tech news and insights</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
              <Link href="/admin" className="text-gray-300 hover:text-white">
                Admin
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} TechBlog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 