import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
        <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md py-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-extrabold">My Portfolio</h1>
            <ul className="flex space-x-8">
              <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-200">About</Link></li>
              <li><Link href="/projects" className="hover:text-gray-200">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-gray-200">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow container mx-auto p-6">
          {children}
        </main>
        <footer className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-4 text-center">
          <p>© 2024 My Portfolio. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
