import Link from 'next/link';
import styles from './Header.module.css';  // Assuming you have a CSS Module for styling
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <a href="/" className={styles.logo}>SkillUp</a>
        <nav>
          <Link href="/">Home</Link>
    
          <Link href="/profile">Student Profile</Link>
         
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </header>
    </>
  );
}
