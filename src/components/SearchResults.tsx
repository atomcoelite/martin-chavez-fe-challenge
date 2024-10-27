'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ChevronDown, Heart } from 'lucide-react'
import styles from '../styles/SearchResults.module.scss'

interface Category {
  name: string
  checked: boolean
}

interface Seller {
  name: string
  image: string
}

interface Brand {
  name: string
  image: string
}

interface Product {
  id: string
  name: string
  brand: string
  image: string
  price: number
  options: number
}

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Superfood Air-Whip Moisture Cream',
    brand: 'Youth to the People',
    image: '/images/products/1.png',
    price: 18,
    options: 2,
  },
  // More products here...
]

const SearchResult: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts)

  const loadMore = () => {
    setProducts([...products, ...initialProducts])
  }

  const [categories, setCategories] = useState<Category[]>([
    { name: 'Accessories', checked: true },
    // More categories here...
  ])

  const sellers: Seller[] = [
    { name: 'ALEXANDRA RARE', image: '/images/sellers/1.png' },
    // More sellers here...
  ]

  const brands: Brand[] = [
    { name: 'Rare Beauty', image: '/images/brands/1.png' },
    // More brands here...
  ]

  const toggleCategory = (index: number) => {
    const newCategories = [...categories]
    newCategories[index].checked = !newCategories[index].checked
    setCategories(newCategories)
  }

  return (
    <div className={styles.searchResults}>
      <header className={styles.header}>
        <h1>"Rare"</h1>
        <button className={styles.sortButton}>
          Sort By <ChevronDown size={16} />
        </button>
      </header>

      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <h2>Category</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={category.name}>
                <label>
                  <input
                    type="checkbox"
                    checked={category.checked}
                    onChange={() => toggleCategory(index)}
                  />
                  {category.name}
                </label>
              </li>
            ))}
          </ul>
          <button className={styles.seeMoreButton}>See More</button>

          <h2>Brand</h2>
          <button className={styles.expandButton}>
            <ChevronDown size={16} />
          </button>
        </aside>

        <main>
          <section className={styles.sellers}>
            <div className={styles.sellersTitle}>
              <h2>Sellers</h2>
              <p>36 Results</p>
            </div>
            <div className={styles.sellerGrid}>
              <button className={styles.navButton} aria-label="Previous seller">
                <ChevronLeft size={24} />
              </button>
              {sellers.map((seller) => (
                <div key={seller.name} className={styles.sellerCard}>
                  <Image
                    src={seller.image}
                    alt={seller.name}
                    width={300}
                    height={300}
                  />
                </div>
              ))}
              <button className={styles.navButton} aria-label="Next seller">
                <ChevronRight size={24} />
              </button>
            </div>
          </section>

          <section className={styles.brands}>
            <div className={styles.brandsTitle}>
              <h2>Brands</h2>
              <p>1 Result</p>
            </div>
            <div className={styles.brandGrid}>
              {brands.map((brand) => (
                <div key={brand.name} className={styles.brandCard}>
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={300}
                    height={300}
                  />
                </div>
              ))}
            </div>
          </section>

          <section className={styles.products}>
            <div className={styles.productsTitle}>
              <h1>Products</h1>
              <p>178 Results</p>
            </div>

            <div className={styles.productGrid}>
              {products.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                    />
                    <span className={styles.commission}>15% COMMISSION</span>
                    <button
                      className={styles.favoriteButton}
                      aria-label="Add to favorites"
                    >
                      <Heart />
                    </button>
                    <div className={styles.badge}>
                      <Image
                        src="/images/same_day_mark.png"
                        alt="Same day shipping"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                  <div className={styles.productInfo}>
                    <p className={styles.brand}>{product.brand}</p>
                    <h2 className={styles.name}>{product.name}</h2>
                    <p className={styles.options}>{product.options} Options</p>
                    <p className={styles.price}>${product.price}</p>
                  </div>
                  <div className={styles.actions}>
                    <button className={styles.addToShelf}>Add to Shelf</button>
                    <button className={styles.addToBag}>Add to Bag</button>
                  </div>
                </div>
              ))}
            </div>

            <button className={styles.loadMore} onClick={loadMore}>
              Load More
            </button>
          </section>
        </main>
      </div>
    </div>
  )
}

export default SearchResult
