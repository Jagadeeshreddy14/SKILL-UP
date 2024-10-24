import styles from './Footer.module.css'; // Use CSS Modules for styling

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactUs}>
        <h3>Contact Us</h3>
        <p>Email: contact@skillup.com</p>
        <p>Phone: +123-456-7890</p>
      </div>
      <div className={styles.followUs}>
        <h3>Follow Us</h3>
        <p>Facebook | Twitter | LinkedIn | Instagram</p>
      </div>
    </footer>
  );
}
