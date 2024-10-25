'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from '../styles/TrendingProducts.module.scss'

interface Product {
  id: string
  brand: string
  name: string
  options: number
  price: number
  image: string
}

const products: Product[] = [
  {
    id: '1',
    brand: 'Christian Dior',
    name: 'Addict Lip Glow Oil',
    options: 7,
    price: 36,
    image: '/images/trending_products/1.png'
  },
  {
    id: '2',
    brand: 'Embryolisse',
    name: 'Lait-Cream Concentre',
    options: 2,
    price: 25,
    image: '/images/trending_products/2.png'
  },
  {
    id: '3',
    brand: 'Color Wow',
    name: 'Dream Coat Supernatural Spray',
    options: 2,
    price: 32,
    image: '/images/trending_products/3.png'
  },
  {
    id: '4',
    brand: 'Saie',
    name: 'Sun Melt Balm Bronzer - Fair Bronze',
    options: 5,
    price: 34,
    image: '/images/trending_products/4.png'
  }
]

const TrendingProducts: React.FC = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const index = searchParams.get('index')
    if (index) {
      setCurrentIndex(parseInt(index, 10))
    }
  }, [searchParams])

  const updateIndex = (newIndex: number) => {
    const updatedIndex = (newIndex + products.length) % products.length
    setCurrentIndex(updatedIndex)
    router.push(`?index=${updatedIndex}`, { scroll: false })
  }

  return (
    <section className={styles.trendingProducts}>
      <h2>TRENDING PRODUCTS</h2>
      <div className={styles.carousel}>
        <button className={styles.navButton} onClick={() => updateIndex(currentIndex - 1)}>
          <ChevronLeft />
        </button>
        <div className={styles.productGrid}>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`${styles.productCard} ${index === currentIndex ? styles.active : ''}`}
            >
              <div className={styles.imageWrapper}>
                <Image src={product.image} alt={product.name} width={200} height={200} />
                <span className={styles.commission}>15% Commission</span>
              </div>
              <div className={styles.productInfo}>
                <h3>{product.brand}</h3>
                <p>{product.name}</p>
                <p>{product.options} Options</p>
                <p>${product.price}</p>
              </div>
              <div className={styles.actions}>
                <button className={styles.addToShelf}>Add to Shelf</button>
                <button className={styles.addToBag}>Add to Bag</button>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.navButton} onClick={() => updateIndex(currentIndex + 1)}>
          <ChevronRight />
        </button>
      </div>
    </section>
  )
}

export default TrendingProducts