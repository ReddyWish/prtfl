'use client'
import styles from './style.module.scss';
import Link from "next/link";
import Image from "next/image";
import {
  useScroll,
  useSpring,
} from "framer-motion"

export default function Work() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.projects}>
        <span style={{'--i': 1}}>P</span>
        <span style={{'--i': 2}}>R</span>
        <span style={{'--i': 3}}>O</span>
        <span style={{'--i': 4}}>J</span>
        <span style={{'--i': 5}}>E</span>
        <span style={{'--i': 6}}>C</span>
        <span style={{'--i': 7}}>T</span>
        <span style={{'--i': 8}}>S</span>
        <span style={{'--i': 9}}>.</span>
      </div>
      <div className={styles.container}>

        <div className={`${styles.card}`}>
          <div className={`${styles.card__side} ${styles[`card__side--front`]}`}>
            <img src="/images/iTalk.png" alt="iTalk" className={styles.image}/>
          </div>
          <div className={`${styles.card__side} ${styles[`card__side--back`]} ${styles[`card__side--back-1`]}`}>
            <a href={'https://italk-7gco.onrender.com/'} target="_blank"
               rel="noopener noreferrer" className={styles.customLink}><h2 className={styles.cardTitle}>iTalk</h2></a>
            <p className={styles.cardSubTitle}>
              Tech Stack: Leveraging <span className={styles.accent}>React</span>, <span className={styles.accent}>NodeJS</span>, <span className={styles.accent}>Express</span>, and <span className={styles.accent}>MongoDB</span>, I carefully orchestrated the project's architecture.
              Redux Toolkit & RTK Query: I adopted the Redux Toolkit and RTK Query to manage state effectively and simplify data fetching.
              Backend Magic: Every aspect of the backend was crafted from scratch. This allowed me to gain a deeper understanding of the intricate workings behind the scenes.
              JWT Token Security: Security is a top priority, and I implemented <span className={styles.accent}>JWT tokens</span>, ensuring their safe storage and transmission as HTTP-only cookies.
              Performance and Limitations:
              As a pet project hosted on a free platform, there might be some restrictions on image downloads and app speed. While these limitations may affect performance to some extent, I wholeheartedly invite you to explore and benefit from the well-implemented best practices embedded within.
            </p>
          </div>
        </div>

        <div className={`${styles.card}`}>
          <div className={`${styles.card__side} ${styles[`card__side--front`]}`}>
            <img src="/images/Quantum.png" alt="Quantum" className={styles.image}/>
          </div>
          <div className={`${styles.card__side} ${styles[`card__side--back`]} ${styles[`card__side--back-2`]}`}>
            <a href={'https://quantum-tfiy.onrender.com/'} target="_blank"
               rel="noopener noreferrer" className={styles.customLink}><h2 className={styles.cardTitle}>Quantum</h2></a>
            <p className={styles.cardSubTitle}>First commercial fullstack app, It's an ongoing venture aimed at facilitating drone reselling, currently nearing completion with over 80% of the work done.
              The project is built using a robust tech stack that includes:
             <span className={styles.accent}>React</span>.
              <span className={styles.accent}>Express</span> and <span className={styles.accent}>NodeJS</span> : To create a powerful and flexible server to support the application.
              <span className={styles.accent}>MongoDB</span>: As the database, ensuring efficient data management.
              <span className={styles.accent}>Redux Toolkit</span>: A central player in managing state and streamlining data flow.
              Key Features:
              Smart Cart Functionality: I've implemented an intricate shopping cart system, making use of Redux Toolkit for a seamless and intuitive user experience.
              Secure Payment Processing: Payment processing is securely handled via the PayPal API, ensuring trust and reliability for users.
              Server-Side Pagination: To optimize performance, I've introduced server-side pagination, allowing for efficient handling of a large number of products.
              There is still ongoing work.</p>
          </div>
        </div>

        <div className={`${styles.card}`}>
          <div className={`${styles.card__side} ${styles[`card__side--front`]}`}>
            <img src="/images/MyBlog.png" alt="My Blog" className={styles.image}/>
          </div>
          <div className={`${styles.card__side} ${styles[`card__side--back`]} ${styles[`card__side--back-3`]}`}>
            <a href={'https://reddywish.com/'} target="_blank"
               rel="noopener noreferrer" className={styles.customLink}><h2 className={styles.cardTitle}> My NextJs Blog</h2></a>
            <p className={styles.cardSubTitle}>"Education is at its best when you try to teach," and with this philosophy in mind, I embarked on a remarkable journey to create my very own blog.
              Technology Showcase: This project serves as a showcase of the powerful <span className={styles.accent}>NextJS</span> framework. I found myself captivated by the technology and wanted to unravel its potential by building a blog.

              <span className={styles.accent}>GitHub API</span> Integration: I integrated the GitHub API. This allows me to conveniently store blog posts in a separate GitHub repository.

              Dynamic Content: With server-side rendering at the helm, the blog provides dynamic content. Each time a post is pushed into the GitHub repository, the application revalidates itself. There's no need for continuous redeployment.

              This project encapsulates the essence of exploration and learning.</p>
          </div>
        </div>

        <div className={`${styles.card}`}>
          <div className={`${styles.card__side} ${styles[`card__side--front`]}`}>
            <img src="/images/bodySymphony.png" alt="Body Symphony" className={styles.image}/>
          </div>
          <div className={`${styles.card__side} ${styles[`card__side--back`]} ${styles[`card__side--back-4`]}`}>
            <a href={'https://body-symphony.onrender.com/'} target="_blank"
               rel="noopener noreferrer" className={styles.customLink}><h2 className={styles.cardTitle}> Body Symphony</h2></a>
            <p className={styles.cardSubTitle}>Ongoing Commercial Venture: "Body Symphony" is an exciting and dynamic commercial application developed with cutting-edge technologies. It caters to the unique requirements of fitness studios.
This project is a perfect example of synergy among technologies. Leveraging the capabilities of <span className={styles.accent}>React</span>, <span className={styles.accent}>TypeScript</span>, and <span className={styles.accent}>Tailwind CSS</span>, I've created an application that blends power and aesthetics.
              Tailwind: The project was an opportunity to explore the incredible convenience and efficiency of Tailwind CSS.
              Fitness in Symphony: "Body Symphony" is the embodiment of fitness and technology working in harmony. Its ongoing development reflects a commitment to enhancing the fitness studio experience through state-of-the-art web applications. The project demonstrates how modern web development technologies, when orchestrated seamlessly, can create a symphony of functionality and aesthetics.</p>
          </div>
        </div>
      </div>
      <div className={styles.border}></div>
    </div>
  );
}
