import './globals.css'
import { Inter } from 'next/font/google';
import Header from "@/components/header";
import { i18n } from "../../../i18n.config";
import Script from "next/script";

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
    <Script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/5690aecc0e1b511f43e73525/script.js"></Script>
      <body className={inter.className}>
      <Header/>
      {children}
      </body>
    </html>
  )
}
