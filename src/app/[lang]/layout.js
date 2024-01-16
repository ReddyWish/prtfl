import './globals.css'
import { Inter } from 'next/font/google';
import Header from "@/components/header";
import { i18n } from "../../../i18n.config";
import { getDictionary } from "../../../lib/dictionary";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Modest Portfolio',
  description: 'Get to know me better',
  icons: {
    icon: '/images/photo2.jpg'
  }
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default async function RootLayout({ children, params }) {

  return (
    <html lang={params.lang}>
      <body className={inter.className}>
      <Header/>
      {children}
      </body>
    </html>
  )
}
