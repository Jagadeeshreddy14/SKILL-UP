import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <a href="/" className={styles.logo}>SkillUp</a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center">
          <Link href="/" className={`${styles.navLink}`}>Home</Link>
          <Link href="/profile" className={`${styles.navLink}`}>Student Profile</Link>
          <Link href="/dashboard" className={`${styles.navLink}`}>Dashboard</Link>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <XMarkIcon className="h-6 w-6 text-indigo-600" /> : <Bars3Icon className="h-6 w-6 text-indigo-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white rounded-lg shadow-lg p-4 space-y-3 md:hidden">
          <Link href="/" className={`${styles.navLink} block border-t border-gray-200`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/profile" className={`${styles.navLink} block border-t border-gray-200`} onClick={() => setIsOpen(false)}>Student Profile</Link>
          <Link href="/dashboard" className={`${styles.navLink} block border-t border-gray-200`} onClick={() => setIsOpen(false)}>Dashboard</Link>
          <div className="border-t border-gray-200 items-center justify-center flex">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton /> 
          </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
}
