import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import { LocaleSwitcher } from "@/components/localeSwitcher";
import Link from './Link';
import Curve from './Curve';
import { getDictionary } from "../../../../lib/dictionary";

const navItems = [
  {
    title: "GitHub",
    href: "https://github.com/ReddyWish",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/ilya-shuvatov-51b37624a/",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/heyimilya/",
  },
]

function Index(props) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
      <div className={styles.body}>
        <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
            <LocaleSwitcher/>
          </div>
          {
            navItems.map( (data, index) => {
              return <Link key={index} data={{...data, index}} isActive={selectedIndicator === data.href} setSelectedIndicator={setSelectedIndicator}></Link>
            })
          }
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}

export default Index;