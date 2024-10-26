import Section from './components/Section/Section';  // Import Section component
import HeroSection from './components/HeroSection/HeroSection';  // Import HeroSection component
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <HeroSection />
      <div id='study-paths'>
        <h2>Study Paths</h2>
        <p>Choose a path that suits your interests and goals</p>
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
    </div>
  );
}
