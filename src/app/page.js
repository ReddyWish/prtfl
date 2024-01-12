'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import About from "@/app/about";
import Work from "@/app/work";
import Footer from "@/components/footer/Footer";

export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.9,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <div className={styles['main-wrapper']}>
      <main className={styles.main}>
        <Image fill={true} priority={true} src='/images/photo2.jpg' alt='image'/>
        <div className={styles.sliderContainer}>
          <div ref={slider} className={styles.slider}>
            <p ref={firstText}>Hey! I'm Ilya and I'm Frontend Developer -</p>
            <p ref={secondText}>Hey! I'm Ilya and I'm Frontend Developer -</p>
          </div>
        </div>
      </main>
      <About/>
      <Work/>
      <Footer/>
    </div>
  )
}
