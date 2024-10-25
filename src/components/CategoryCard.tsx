import styles from '../styles/CategoryCard.module.scss'

type CategoryProps = {
  title: string
  image: string
}

export default function CategoryCard({ title, image }: CategoryProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  )
}
