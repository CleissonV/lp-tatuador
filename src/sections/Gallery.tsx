import { motion } from 'framer-motion'
import GalleryItem from '../components/ui/GalleryItem'
import { tattooImages } from '../constants/data'

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-[#e63946] text-xs tracking-[0.4em] uppercase mb-3">Portfólio</p>
        <h2 className="font-display text-6xl md:text-8xl text-[#f1faee]">GALERIA</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {tattooImages.map((item, i) => (
          <GalleryItem key={i} src={item.src} alt={item.alt} style={item.style} index={i} />
        ))}
      </div>
    </section>
  )
}
