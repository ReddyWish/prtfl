import './globals.css'
import { Inter } from 'next/font/google';
import Header from "@/components/header";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Modest Portfolio',
  description: 'Get to know me better',
  icons: {
    icon: '/images/photo2.jpg'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      {children}
      </body>
    </html>
  )
}
