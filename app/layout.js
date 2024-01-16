import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Strix Tech',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Nav />
        {children}
        </body>
    </html>
  )
}
