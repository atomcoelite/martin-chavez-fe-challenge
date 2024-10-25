import Head from 'next/head'
import styles from '../styles/SimplePageLayout.module.scss'

type SimplePageLayout = {
  title: string
  description: string
}

export default function SimplePageLayout({
  title,
  description,
}: SimplePageLayout) {
  return (
    <>
      <Head>
        <title>{title} - My Store</title>
        <meta name="description" content={description} />
      </Head>
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>{title}</h1>
        <p className={styles.pageDescription}>{description}</p>
      </div>
    </>
  )
}
