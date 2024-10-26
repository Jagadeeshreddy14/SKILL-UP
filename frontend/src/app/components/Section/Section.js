import styles from './Section.module.css';  // Import the CSS for this component

export default function Section({ image, title, description }) {
  return (
    <div className={styles.section} data-aos="fade-up">
      <img src={image} alt={title} className={styles.image} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href='#' className='button'>Follow path &#x2197;</a>
      </div>
    </div>
  );
}
