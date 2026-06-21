import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaInstagram, FaWhatsapp, FaTimes, FaBars, FaChevronDown, FaStar, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa'
import { GiPencilBrush, GiInkSwirl } from 'react-icons/gi'
import { MdOutlineDesignServices } from 'react-icons/md'

const styles = [
  { name: 'Blackwork', desc: 'Traços precisos, sombras densas e geometria impecável. Arte que resiste ao tempo.', emoji: '⬛' },
  { name: 'Old School', desc: 'Ícones clássicos americanos com cores vibrantes e contornos fortes. Tradição na pele.', emoji: '⚓' },
  { name: 'Fineline', desc: 'Delicadeza extrema. Linhas finas que criam detalhes fotográficos na pele.', emoji: '🌿' },
  { name: 'Neo Tradicional', desc: 'Releitura moderna do tradicional. Paleta rica, volumes expressivos, composição narrativa.', emoji: '🦅' },
  { name: 'Realismo', desc: 'Retratos e naturezas que desafiam a percepção. Cada detalhe milimétrico perfeito.', emoji: '🖤' },
  { name: 'Aquarela', desc: 'Explosões de cor que imitam pintura em aquarela. Arte fluida e única em cada traço.', emoji: '🎨' },
]

const tattooImages = [
  'https://images.unsplash.com/photo-1661714220704-711551e73799?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616879564267-a336232e3a95?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1614199621267-5812fe71d122?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1651650564239-7e96053d934c?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1661678147338-7248d49eb887?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605647533135-51b5906087d0?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1597852075234-fd721ac361d3?w=600&q=80&auto=format&fit=crop',
]

const GalleryItem = ({ src, i }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="ink-card aspect-square cursor-pointer relative overflow-hidden group"
    >
      <img src={src} alt="tattoo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-[#e63946]/0 group-hover:bg-[#e63946]/20 transition-all duration-300" />
    </motion.div>
  )
}

const StyleCard = ({ s, i }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="ink-card p-6 hover:border-[#e63946] transition-all duration-300 cursor-default"
    >
      <div className="text-3xl mb-4">{s.emoji}</div>
      <h3 className="font-display text-2xl text-[#f1faee] mb-2">{s.name}</h3>
      <p className="text-gray-600 text-sm leading-relaxed font-sans">{s.desc}</p>
    </motion.div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -120])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#050505] noise-bg">
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-[#e63946] z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />

      {/* Nav */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#050505]/98 backdrop-blur border-b border-[#1a1a1a] py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-display text-2xl tracking-widest">DARK<span className="text-[#e63946]">INK</span></a>
          <div className="hidden md:flex items-center gap-10">
            {['Galeria', 'Estilos', 'Artista', 'Agendamento'].map(item => (
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
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
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
                {['Galeria', 'Estilos', 'Artista', 'Agendamento'].map(item => (
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

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
          <source src="https://videos.pexels.com/video-files/4124289/4124289-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0a] via-[#050505] to-[#050505]" />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(230,57,70,0.08) 0%, transparent 50%)' }}
          />
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-5 font-display text-[#e63946]"
              style={{
                left: `${(i * 37 + 5) % 90}%`,
                top: `${(i * 53 + 10) % 90}%`,
                fontSize: `${(i % 3) * 20 + 30}px`
              }}
              animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6 + (i % 4), repeat: Infinity, delay: (i % 3) }}
            >
              {['⬛', '☽', '⚓', '🦅', '🌹', '⚔️'][i % 6]}
            </motion.div>
          ))}
        </div>
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-6 w-full">
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
                <GiPencilBrush size={16} /> Agendar Sessão
              </a>
              <a
                href="#galeria"
                className="text-gray-600 text-xs tracking-widest uppercase hover:text-gray-400 transition-colors flex items-center gap-2"
              >
                Ver Galeria <span className="text-[#e63946]">→</span>
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
          <FaChevronDown className="text-[#e63946] animate-bounce" />
        </motion.div>
      </section>

      {/* Gallery */}
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
          {tattooImages.map((src, i) => (
            <GalleryItem key={i} src={src} i={i} />
          ))}
        </div>
      </section>

      {/* Styles */}
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
              <StyleCard key={i} s={s} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Artist */}
      <section id="artista" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#e63946] text-xs tracking-[0.4em] uppercase mb-4">O Artista</p>
            <h2 className="font-display text-6xl md:text-8xl text-[#f1faee] leading-none mb-8">
              MARCOS<br />VEIGA
            </h2>
            <div className="space-y-4 text-gray-500 text-sm leading-relaxed font-sans">
              <p>8 anos transformando peles em telas. Formado em artes visuais pela FAAP, Marcos construiu uma carreira sólida entre os melhores artistas do Brasil.</p>
              <p>Especialista em blackwork e realismo, com passagens por estúdios premiados em Buenos Aires e Barcelona. Cada trabalho é uma obra única e assinada.</p>
              <p>Mais de 4.000 tatuagens realizadas. Participante do São Paulo Tattoo Festival 2019, 2021 e 2023.</p>
            </div>
            <div className="flex gap-6 mt-8">
              {[{ n: '8+', l: 'Anos' }, { n: '4k+', l: 'Tattoos' }, { n: '3x', l: 'Festival SP' }].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-3xl text-[#e63946]">{s.n}</div>
                  <div className="text-gray-600 text-xs tracking-widest uppercase font-sans">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 border border-[#1a1a1a] flex items-center justify-center text-gray-600 hover:border-[#e63946] hover:text-[#e63946] transition-all">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 border border-[#1a1a1a] flex items-center justify-center text-gray-600 hover:border-[#e63946] hover:text-[#e63946] transition-all">
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] bg-[#0d0d0d] border border-[#1a1a1a] relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1772925660436-277b5b7cff09?w=600&q=80&auto=format&fit=crop" alt="artista" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="font-display text-2xl text-[#f1faee]">MARCOS VEIGA</div>
                <div className="text-[#e63946] text-xs tracking-widest uppercase font-sans mt-1">Artista Principal · Dark Ink Studio</div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 w-16 h-16 border border-[#e63946]/30" />
            <div className="absolute -bottom-3 -left-3 w-10 h-10 border border-[#e63946]/20" />
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="agendamento" className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#e63946] text-xs tracking-[0.4em] uppercase mb-4">Agende Sua Sessão</p>
              <h2 className="font-display text-5xl md:text-7xl text-[#f1faee] leading-none mb-8">
                GRAVE<br />NA PELE
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  { icon: FaPhone, text: '(11) 94567-8901' },
                  { icon: FaWhatsapp, text: '(11) 94567-8901 (WhatsApp)' },
                  { icon: FaMapMarkerAlt, text: 'Rua Augusta, 1440 - Consolação, SP' },
                  { icon: FaClock, text: 'Seg-Sáb: 10h às 20h' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 border border-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-[#e63946]" size={12} />
                    </div>
                    <span className="text-gray-500 text-sm font-sans">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="border border-[#1a1a1a] p-4">
                <p className="text-[#e63946] text-xs tracking-widest uppercase font-sans mb-2">Importante</p>
                <p className="text-gray-600 text-xs font-sans leading-relaxed">
                  Consultas e orçamentos realizados presencialmente. Sinal de 30% para confirmação da sessão. Traga referências de design.
                </p>
              </div>
            </div>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              {[
                { label: 'Nome', type: 'text', ph: 'Seu nome' },
                { label: 'WhatsApp', type: 'tel', ph: '(11) 99999-9999' },
                { label: 'E-mail', type: 'email', ph: 'seu@email.com' }
              ].map((f, i) => (
                <div key={i}>
                  <label className="block text-xs tracking-widest uppercase text-gray-700 mb-2 font-sans">{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.ph}
                    className="w-full bg-[#050505] border border-[#1a1a1a] px-4 py-3 text-[#f1faee] text-sm font-sans placeholder-gray-800 focus:border-[#e63946] focus:outline-none transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-700 mb-2 font-sans">Estilo Desejado</label>
                <select className="w-full bg-[#050505] border border-[#1a1a1a] px-4 py-3 text-gray-500 text-sm font-sans focus:border-[#e63946] focus:outline-none transition-colors">
                  <option value="">Selecione um estilo</option>
                  {styles.map(s => <option key={s.name}>{s.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-700 mb-2 font-sans">Descreva Sua Ideia</label>
                <textarea
                  rows={3}
                  placeholder="Descreva o que você tem em mente..."
                  className="w-full bg-[#050505] border border-[#1a1a1a] px-4 py-3 text-[#f1faee] text-sm font-sans placeholder-gray-800 focus:border-[#e63946] focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#e63946] text-white font-sans font-medium text-sm tracking-widest uppercase hover:bg-[#c1121f] transition-colors"
              >
                Solicitar Orçamento
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
          {[
            { name: 'Ana C.', text: 'Marcos é um artista incrível. Meu blackwork ficou perfeito, exatamente como eu imaginava. Profissionalismo impecável do início ao fim.', stars: 5 },
            { name: 'Rafael M.', text: 'A melhor experiência de tatuagem que já tive. O estúdio é impecável, o atendimento é ótimo e o resultado superou minhas expectativas.', stars: 5 },
            { name: 'Juliana P.', text: 'Fiz um realismo de alta complexidade e o Marcos entregou algo além do que eu esperava. Arte de nível internacional aqui em SP.', stars: 5 },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="ink-card p-6"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <FaStar key={j} className="text-[#e63946]" size={12} />
                ))}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed font-sans mb-4">"{t.text}"</p>
              <div className="text-[#f1faee] text-xs tracking-widest uppercase font-sans">— {t.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="py-8 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xl">DARK<span className="text-[#e63946]">INK</span></span>
          <p className="text-gray-700 text-xs font-sans">© 2024 Dark Ink Studio. Todos os direitos reservados. São Paulo - SP</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-700 hover:text-[#e63946] transition-colors"><FaInstagram size={16} /></a>
            <a href="#" className="text-gray-700 hover:text-[#e63946] transition-colors"><FaWhatsapp size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
