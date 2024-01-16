import styles from './style.module.scss';
import { motion } from 'framer-motion'

function About({ page }) {
  let section = page.home.about
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.item} ${styles.content}`} >
        <motion.div initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                      hidden: {opacity: 0, scale: 0.8},
                      visible: {opacity: 1, scale: 1}
                    }}
          className={styles.title}>
          <span>{section.title}.</span>
        </motion.div>
        <motion.div initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                      hidden: {opacity: 0, scale: 0.8},
                      visible: {opacity: 1, scale: 1}
                    }}>
          <p className={styles.subtitle}>{section.description1} <span className={styles.name}>{section.description2}</span>, {section.description3}.</p>
        </motion.div>

        <motion.div initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.4, duration: 0.5}}
                    variants={{
                      hidden: {opacity: 0, scale: 0.8},
                      visible: {opacity: 1, scale: 1}
                    }}>
          <p className={styles.subtitle}>{section.price}</p>
        </motion.div>
      </div>
      <div className={`${styles.item }`}></div>
    </div>
  );
}

export default About;