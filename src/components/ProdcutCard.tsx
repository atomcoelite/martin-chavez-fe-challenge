import styles from '../styles/ProductCard.module.scss'

type ProductProps = {
  title: string
  price: number
  image: string
}

export default function ProductCard({ title, price, image }: ProductProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <button>Add to Bag</button>
    </div>
  )
}
