import styles from './style.module.scss';

function About() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.item} ${styles.content}`} >
        <div className={styles.title}>
          <span >A</span>
          <span >B</span>
          <span >O</span>
          <span >U</span>
          <span >T</span>
          <span >.</span>
        </div>
        <p className={styles.subtitle}>Hello! I'm <span className={styles.name}>Ilya</span>, a dedicated frontend developer driven by a passion for technology. While my journey may not be filled with extensive experience, one thing I can confidently say is that I'm a quick learner with exceptional soft skills. My dream is to evolve into a proficient specialist, and I'm on the lookout for intriguing projects and the opportunity to join a dynamic team. Feel free to get in touch with me; I'm eager to connect and collaborate!</p>
      </div>
      <div className={`${styles.item }`}></div>
    </div>
  );
}

export default About;