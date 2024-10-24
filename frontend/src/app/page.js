import Section from './components/Section/Section';  // Import Section component
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Welcome to SkillUp</h1>
      <p>Your ultimate platform for learning and skill development</p>
      <div className={styles.sections}>
        <Section image="/college.png" title="College Academics" />
        <Section image="/webdev.png" title="Web Dev" />
        <Section image="/ai_ml.png" title="AI/ML" />
        <Section image="/dsa.png" title="Data Structures & Algorithms" />
        <Section image="/cp.png" title="Competitive Programming" />
        <Section image="/blockchain.png" title="Blockchain" />
        <Section image="/cybersecurity.jpg" title="CyberSecurity" />
        <Section image="/interview.jpg" title="Interview Preparation" />
      </div>
    </div>
  );
}
