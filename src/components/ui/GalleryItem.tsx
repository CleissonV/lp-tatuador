import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  src: string
  alt: string
  style: string
  index: number
}

export default function GalleryItem({ src, alt, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="ink-card aspect-square cursor-pointer relative overflow-hidden group"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-[#e63946]/0 group-hover:bg-[#e63946]/20 transition-all duration-300" />
    </motion.div>
  )
}
