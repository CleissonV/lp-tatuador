import { motion } from 'framer-motion'
import StyleCard from '../components/ui/StyleCard'
import { styles } from '../constants/data'

export default function Styles() {
  return (
    <section id="estilos" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[#e63946] text-xs tracking-[0.4em] uppercase mb-3">Especialidades</p>
          <h2 className="font-display text-6xl md:text-8xl text-[#f1faee]">ESTILOS</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {styles.map((s, i) => (
            <StyleCard key={i} style={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
