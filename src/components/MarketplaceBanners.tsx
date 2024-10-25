import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/MarketplaceBanners.module.scss'

interface BannerProps {
  imageSrc: string
  altText: string
}

const Banner: React.FC<BannerProps> = ({ imageSrc, altText }) => (
  <div className={styles.banner}>
    <img src={imageSrc} alt={altText} />
  </div>
)

const MarketplaceBanners: React.FC = () => {
  return (
    <section className={styles.marketplaceSection}>
      <div className={styles.bannerGrid}>
        <Banner 
          imageSrc="/images/marketplace_banners/1.png" 
          altText="Kylie Jenner promoting her beauty products"
        />
        <Banner 
          imageSrc="/images/marketplace_banners/2.png" 
          altText="Woman with pink hair promoting Pink Friday products"
        />
        <Banner 
          imageSrc="/images/marketplace_banners/3.png" 
          altText="Woman wearing Fenty sunglasses"
        />
      </div>
    </section>
  )
}

export default MarketplaceBanners