'use client'
import {usePathname} from 'next/navigation'
import {i18n} from '../../../i18n.config'
import { Language } from "@/components/language";
import styles from './style.module.scss'

export function LocaleSwitcher() {
  const pathname = usePathname()

  return (
    <>
      <ul className={styles.list}>
        {i18n.locales.map(locale => {
          return (
            <Language key={locale} locale={locale} pathname={pathname}/>
          )
        })}
      </ul>
    </>
  )
}