import styles from './Section.module.css';  // Import the CSS for this component

export default function Section({ image, title }) {
  return (
    <div className={styles.section}>
      <img src={image} alt={title} className={styles.image} />
      <h3>{title}</h3>
    </div>
  );
}
