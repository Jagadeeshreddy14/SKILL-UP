import Link from 'next/link';
import styles from './Header.module.css';  // Assuming you have a CSS Module for styling

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <a href="/" className={styles.logo}>SkillUp</a>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/login">Login/Signup</Link>
          <Link href="/profile">Student Profile</Link>
        </nav>
      </header>
    </>
  );
}
