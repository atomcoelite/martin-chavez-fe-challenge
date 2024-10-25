import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/BeautyCategories.module.scss'

const categories = [
  { name: 'BEAUTY', image: '/images/beauty_products/1.png' },
  { name: 'LIPS', image: '/images/beauty_products/2.png' },
  { name: 'EYES', image: '/images/beauty_products/3.png' },
  { name: 'SKIN', image: '/images/beauty_products/4.png' },
  { name: 'BROWS', image: '/images/beauty_products/5.png' },
  { name: 'MAKEUP', image: '/images/beauty_products/6.png' },
  { name: 'HAIR', image: '/images/beauty_products/7.png' },
  { name: 'BEAUTY TOOLS', image: '/images/beauty_products/8.png' },
]

const featuredProducts = [
  {
    title: 'LIP COMBOS WE\'RE LOVING RIGHT NOW',
    image: '/images/beauty_bottom/1.png',
    link: '/lip-combos',
  },
  {
    title: 'OUR FAVORITE LIGHTWEIGHT MAKEUP ROUTINE',
    image: '/images/beauty_bottom/2.png',
    link: '/makeup-routine',
  },
]

const BeautyCategories: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.category}>
            <Image src={category.image} alt={category.name} width={300} height={300} />
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
      <div className={styles.featured}>
        {featuredProducts.map((product, index) => (
          <div key={index} className={styles.featuredProduct}>
            <Image src={product.image} alt={product.title} width={600} height={400} />
            <h3>{product.title}</h3>
            <Link href={product.link} className={styles.button}>
              VIEW PRODUCTS
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BeautyCategories