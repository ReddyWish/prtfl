'use client'
import styles from './style.module.scss';
import {motion} from 'framer-motion'
import Link from "next/link";
import Image from "next/image";
import {
  useScroll,
  useSpring,
} from "framer-motion"

export default function Work({ page }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  let section = page.home.projects
  let sectionTitle = `${page.home.projects.title}.`
  return (
    <div className={styles.wrapper}>
      <motion.div initial='hidden'
                  whileInView='visible'
                  viewport={{once: true, amount: 0.5}}
                  transition={{delay: 0.2, duration: 0.5}}
                  variants={{
                    hidden: {opacity: 0, scale: 0.8},
                    visible: {opacity: 1, scale: 1}
                  }}
        className={styles.projects}>
        { sectionTitle.split('').map((item, index) => (
          <span key={index} style={{'--i': index + 1}}>{item}</span>
        )) }
      </motion.div>
      <div className={styles.container}>

        <motion.div initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                      hidden: {opacity: 0, x: -50},
                      visible: {opacity: 1, x: 0}
                    }}
          className={`${styles.card}`}>
          <div className={`${styles.card__side} ${styles[`card__side--front`]}`}>
            <Image src="/iTalk.png" alt="iTalk" fill={true} className={styles.image}/>
          </div>
          <div className={`${styles.card__side} ${styles[`card__side--back`]} ${styles[`card__side--back-1`]}`}>
            <a href={'https://italk-7gco.onrender.com/'} target="_blank"
               rel="noopener noreferrer" className={styles.customLink}><h2 className={styles.cardTitle}>iTalk</h2></a>
            <div className={styles.cardSubTitle}>
              <h3 className={styles.projectTitle}>{section.italk.subtitle}</h3>
              <p className={styles.techStackTitle}>{section.italk.techstack}:</p>
              <ul className={styles.techStack}>
                <li>{section.italk.techstacklist.Frontend}</li>
                <li>{section.italk.techstacklist.Backend}</li>
                <li>{section.italk.techstacklist.Database}</li>
                <li>{section.italk.techstacklist["State Management"]}</li>
                <li>{section.italk.techstacklist.Authentication}</li>
              </ul>
              <h3 className={styles.limitations}>{section.italk.performanceTitle}:</h3>
              <p className={styles.description}>{section.italk.performanceSubtitle}!</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                      hidden: {opacity: 0, x: -50},
                      visible: {opacity: 1, x: 0}
                    }}
          className={`${styles.card}`}>
          <div className={`${styles.card__side} ${styles[`card__side--front`]}`}>
            {/*<img src="/images/Quantum.png" alt="Quantum" className={styles.image}/>*/}
            <Image src="/Quantum.png" alt="iTalk" fill={true} className={styles.image}/>
          </div>
          <div className={`${styles.card__side} ${styles[`card__side--back`]} ${styles[`card__side--back-2`]}`}>
            <a href={'https://quantum-tfiy.onrender.com/'} target="_blank"
               rel="noopener noreferrer" className={styles.customLink}>
              <h2 className={styles.cardTitle}>Quantum</h2>
            </a>
            <div className={styles.cardSubTitle}>
            <h3 className={styles.projectTitle}>{section.quantum.subtitle}</h3>
            <p className={styles.techStackTitle}>{section.quantum.techstack}:</p>
            <ul className={styles.techStack}>
              <li>{section.quantum.techstacklist.stack}</li>
              <li>{section.quantum.techstacklist.cart}</li>
              <li>{section.quantum.techstacklist.payment}</li>
              <li>{section.quantum.techstacklist.pagination}</li>
              <li>{section.quantum.techstacklist.admin}</li>
            </ul>
            <h3 className={styles.limitations}>{section.quantum.performanceTitle}:</h3>
            <p className={styles.description}>{section.quantum.performanceSubtitle}</p>
          </div>
          </div>
        </motion.div>

        <motion.div initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.4, duration: 0.5}}
                    variants={{
                      hidden: {opacity: 0, x: -50},
                      visible: {opacity: 1, x: 0}
                    }}
          className={`${styles.card}`}>
          <div className={`${styles.card__side} ${styles[`card__side--front`]}`}>
            <Image src="/MyBlog.png" alt="iTalk" fill={true} className={styles.image}/>
          </div>
          <div className={`${styles.card__side} ${styles[`card__side--back`]} ${styles[`card__side--back-3`]}`}>
            <a href={'https://reddywish.com/'} target="_blank"
               rel="noopener noreferrer" className={styles.customLink}><h2 className={styles.cardTitle}> {section.blog.title}</h2></a>

            <div className={styles.cardSubTitle}>
              <h3 className={styles.projectTitle}>{section.blog.subtitle}</h3>
              <p className={styles.techStackTitle}>{section.blog.techstack}:</p>
              <ul className={styles.techStack}>
                <li>{section.blog.techstacklist.nextjs}</li>
                <li>{section.blog.techstacklist.github}</li>
              </ul>
              <h3 className={styles.limitations}>{section.blog.performanceTitle}:</h3>
              <p className={styles.description}>{section.blog.performanceSubtitle}</p>
            </div>

          </div>
        </motion.div>

        <motion.div initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.6, duration: 0.5}}
                    variants={{
                      hidden: {opacity: 0, x: -50},
                      visible: {opacity: 1, x: 0}
                    }}
          className={`${styles.card}`}>
          <div className={`${styles.card__side} ${styles[`card__side--front`]}`}>
            <Image src="/bodySymphony.png" alt="iTalk" fill={true} className={styles.image}/>
          </div>
          <div className={`${styles.card__side} ${styles[`card__side--back`]} ${styles[`card__side--back-4`]}`}>
            <a href={'https://body-symphony.onrender.com/'} target="_blank"
               rel="noopener noreferrer" className={styles.customLink}><h2 className={styles.cardTitle}>{section.symphony.title}</h2></a>

            <div className={styles.cardSubTitle}>
              <h3 className={styles.projectTitle}>{section.symphony.subtitle}</h3>
              <p className={styles.techStackTitle}>{section.symphony.techstack}:</p>
              <ul className={styles.techStack}>
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind</li>
                <li>React useForm</li>
              </ul>
              <h3 className={styles.limitations}>{section.symphony.performanceTitle}:</h3>
              <p className={styles.description}>{section.symphony.performanceSubtitle}</p>
            </div>

          </div>
        </motion.div>
      </div>
      <div className={styles.border}></div>
    </div>
  );
}
