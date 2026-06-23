import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { TattooStyle } from '../../types'

interface Props {
  style: TattooStyle
  index: number
}

export default function StyleCard({ style, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="ink-card p-6 hover:border-[#e63946] transition-all duration-300 cursor-default group"
    >
      <span className="inline-flex w-12 h-12 mb-5 items-center justify-center border border-[#1a1a1a] text-[#e63946] group-hover:border-[#e63946] transition-colors">
        <style.icon size={22} strokeWidth={1.5} />
      </span>
      <h3 className="font-display text-2xl text-[#f1faee] mb-2">{style.name}</h3>
      <p className="text-gray-600 text-sm leading-relaxed font-sans">{style.desc}</p>
    </motion.div>
  )
}
