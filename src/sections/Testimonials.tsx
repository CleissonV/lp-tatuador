import { motion } from 'framer-motion'
import { LuStar } from 'react-icons/lu'
import { testimonials } from '../constants/data'

export default function Testimonials() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-[#e63946] text-xs tracking-[0.4em] uppercase mb-3">Clientes</p>
        <h2 className="font-display text-6xl md:text-8xl text-[#f1faee]">DEPOIMENTOS</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="ink-card p-6"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <LuStar key={j} className="text-[#e63946] fill-[#e63946]" size={12} />
              ))}
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-sans mb-4">"{t.text}"</p>
            <div className="text-[#f1faee] text-xs tracking-widest uppercase font-sans">
              — {t.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
