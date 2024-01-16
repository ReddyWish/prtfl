import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss'

export function Language({locale, pathname}) {

  const redirectedPathName = (locale) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className={styles.flags}>
      {
        locale === 'en'
          ?
          <Link href={redirectedPathName(locale)}>
            <Image src='/unitedkingdom.svg' alt='eng' width={20} height={20}/>
          </Link>
          :
          <Link href={redirectedPathName(locale)}>
            <Image src='/spain.svg' alt='es' width={20} height={20}/>
          </Link>
      }
    </div>
  )
}