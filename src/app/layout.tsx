import '../styles/globals.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import styles from "../styles/Layout.module.scss"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={styles.LayoutSection}>
      <Header />
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol>
          <li><Link href="/my-shop">My Shop</Link></li>
          <li><Link href="/marketplace" aria-current="page">Marketplace</Link></li>
        </ol>
      </nav>
      <main>{children}</main>
      <Footer />
    </body>
  </html>
  )
}