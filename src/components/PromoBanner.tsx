import React from 'react'
import Image from 'next/image'
import styles from '../styles/PromoBanner.module.scss'

const PromoBanner: React.FC = () => {
  return (
    <section className={styles.promoBanner}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <Image src="/images/get_paid_mark.svg" alt="Get Paid" width={200} height={200} />
        </div>
        <div className={styles.text}>
          <h2>SHOP & SHARE ANY PRODUCT</h2>
          <h2>GET PAID SAME DAY ON SALES</h2>
          <p>- LOOK FOR THE BADGE -</p>
        </div>
        <div className={styles.image}>
          <Image src="/images/get_paid.png" alt="Model" width={200} height={200} />
        </div>
      </div>
    </section>
  )
}

export default PromoBanner