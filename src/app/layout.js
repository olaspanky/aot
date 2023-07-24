import './globals.css'
import { Mulish } from 'next/font/google'
import { Providers } from '../store/provider'

const mulish = Mulish({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={mulish.className}>  <Providers>
    {children}
    </Providers>
    </body>
    </html>
  )
}
