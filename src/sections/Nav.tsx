import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { LuMenu, LuX } from 'react-icons/lu'

const navLinks = ['Galeria', 'Estilos', 'Artista', 'Agendamento']

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-[#e63946] z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />
      <nav
        className={`fixed w-full z-40 transition-all duration-500 ${
          scrolled ? 'bg-[#050505]/98 backdrop-blur border-b border-[#1a1a1a] py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-display text-2xl tracking-widest">
            <svg viewBox="0 0 32 32" className="w-5 h-6" fill="#e63946">
              <path d="M16 4c4 6 8 10 8 15a8 8 0 0 1-16 0c0-5 4-9 8-15Z" />
            </svg>
            <span>
              DARK<span className="text-[#e63946]">INK</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs tracking-[0.2em] uppercase text-gray-500 hover:text-[#e63946] transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#agendamento"
              className="px-6 py-2 bg-[#e63946] text-white text-xs tracking-widest uppercase font-medium hover:bg-[#c1121f] transition-colors"
            >
              Agendar
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#e63946]">
            {menuOpen ? <LuX size={22} /> : <LuMenu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0d0d0d] border-t border-[#1a1a1a]"
            >
              <div className="flex flex-col gap-6 p-6">
                {navLinks.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-xs tracking-[0.2em] uppercase text-gray-500"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
