import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.heroInfo} data-aos="fade-right">
          <h1>Welcome to SkillUp</h1>
          <p>Your ultimate platform for learning and skill development</p>
          <a href="#study-paths" className='button'>View Paths</a>
        </div>

        <div className={styles.heroImage} data-aos="fade-up">
          <img src='/hero-image.svg' alt='Hero Image'/>
        </div>
      </div>
    </>
  )
}

export default HeroSection