import { motion, useScroll, useTransform } from 'framer-motion'
import { LuPenLine, LuArrowRight, LuChevronDown, LuPlus } from 'react-icons/lu'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -120])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1920&q=80&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0a]/70 via-[#050505]/45 to-[#050505]/80" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 70% 50%, rgba(230,57,70,0.08) 0%, transparent 50%)',
          }}
        />
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#e63946]/10"
            style={{
              left: `${(i * 37 + 5) % 90}%`,
              top: `${(i * 53 + 10) % 90}%`,
            }}
            animate={{ y: [0, -20, 0], rotate: [0, 90, 180, 270, 360] }}
            transition={{
              duration: 12 + (i % 5),
              repeat: Infinity,
              delay: i % 3,
              ease: 'linear',
            }}
          >
            <LuPlus size={(i % 3) * 14 + 22} strokeWidth={1} />
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#e63946] tracking-[0.5em] uppercase text-xs mb-6 font-sans font-light"
          >
            São Paulo · Est. 2016
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-[20vw] md:text-[15vw] lg:text-[180px] leading-none text-[#f1faee] mb-0"
          >
            DARK
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="font-display text-[20vw] md:text-[15vw] lg:text-[180px] leading-none text-[#e63946] mb-0 -mt-6"
          >
            INK
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-display text-[10vw] md:text-[7vw] lg:text-[80px] leading-none text-gray-600 -mt-4"
          >
            STUDIO
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-12"
          >
            <a
              href="#agendamento"
              className="group flex items-center gap-3 px-8 py-4 border border-[#e63946] text-[#e63946] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#e63946] hover:text-white transition-all duration-300"
            >
              <LuPenLine size={16} /> Agendar Sessão
            </a>
            <a
              href="#galeria"
              className="group text-gray-600 text-xs tracking-widest uppercase hover:text-gray-400 transition-colors flex items-center gap-2"
            >
              Ver Galeria{' '}
              <LuArrowRight
                size={14}
                className="text-[#e63946] transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <LuChevronDown className="text-[#e63946] animate-bounce" />
      </motion.div>
    </section>
  )
}
