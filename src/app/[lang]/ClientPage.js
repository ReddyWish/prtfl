"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "@/app/[lang]/page.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import About from "@/app/[lang]/about";
import Work from "@/app/[lang]/work";
import Footer from "@/components/footer/Footer";
import Policy from "@/components/policy/Policy";
import { Pricing } from "@/app/[lang]/pricing";

export default function ClientPage({ page }) {
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
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <div className={styles["main-wrapper"]}>
      <main className={styles.main}>
        <Image fill={true} priority={true} src="/photo2.jpg" alt="image" />
        <div className={styles.sliderContainer}>
          <div ref={slider} className={styles.slider}>
            <p ref={firstText}>{page.home.main} -</p>
            <p ref={secondText}>{page.home.main} -</p>
          </div>
        </div>
      </main>
      <About page={page} />
      <Pricing page={page} />
      <Work page={page} />
      <Footer page={page} />
      <Policy page={page} />
    </div>
  );
}
