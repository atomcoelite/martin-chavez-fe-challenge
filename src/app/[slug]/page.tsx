import { notFound } from 'next/navigation'
import SimplePageLayout from '../../components/SimplePageLayout'

const pageData: Record<string, { title: string; description: string }> = {
  marketplace: {
    title: 'Welcome to the Marketplace',
    description: 'Explore and shop the best products across different categories.',
  },
  brands: {
    title: 'Brands A-Z',
    description: 'Brand A-Z',
  },
  makeup: {
    title: 'Makeup Products',
    description: 'Discover a wide range of makeup products from top brands.',
  },
  hair: {
    title: 'Hair Care & Styling',
    description: 'Find the best hair care products and styling tools.',
  },
  skincare: {
    title: 'Skincare Products',
    description:
      'Browse our collection of skincare products to keep your skin glowing.',
  },
  nails: {
    title: 'Nail Care & Polish',
    description: 'Explore the latest in nail care, colors, and treatments.',
  },
  'tools-brushes': {
    title: 'Tools & Brushes',
    description: 'Find the perfect tools and brushes for your beauty routine.',
  },
  fragrance: {
    title: 'Fragrances',
    description:
      'Discover a wide range of luxurious fragrances for every occasion.',
  },
  body: {
    title: 'Body Care',
    description: 'Shop the best body care products for healthy and nourished skin.',
  },
}


export default function DynamicPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // If the slug doesn't exist in pageData, return a 404 page
  if (!pageData[slug]) {
    notFound()
  }

  // Get the content for the current page based on the slug
  const { title, description } = pageData[slug]

  return <SimplePageLayout title={title} description={description} />
}
