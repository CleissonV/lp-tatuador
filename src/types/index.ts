import type { IconType } from 'react-icons'

export interface TattooStyle {
  name: string
  desc: string
  icon: IconType
  specialties?: string[]
}

export interface GalleryItem {
  src: string
  alt: string
  style: string
}

export interface Testimonial {
  name: string
  style?: string
  text: string
  rating: number
}
