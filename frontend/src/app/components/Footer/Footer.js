import styles from './Footer.module.css'; // Use CSS Modules for styling

export default function Footer() {
  return (
    <>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#17253c" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,256C384,277,480,267,576,261.3C672,256,768,256,864,261.3C960,267,1056,277,1152,256C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <footer className={styles.footer}>
      <div className={styles.contactUs}>
        <h3>Contact Us</h3>
        <p>Email: contact@skillup.com</p>
        <p>Phone: +123-456-7890</p>
      </div>
      <div className={styles.followUs}>
        <h3>Indian Institute of Information Technology (IIIT),Bhagalpur</h3>
        <p>Sabour ,Bhagalpur, Bihar 813210</p>
      </div>
    </footer>
    </>
  );
}
