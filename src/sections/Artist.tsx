import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const stats = [
  { n: '8+', l: 'Anos' },
  { n: '4k+', l: 'Tattoos' },
  { n: '3x', l: 'Festival SP' },
]

export default function Artist() {
  return (
    <section id="artista" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#e63946] text-xs tracking-[0.4em] uppercase mb-4">O Artista</p>
          <h2 className="font-display text-6xl md:text-8xl text-[#f1faee] leading-none mb-8">
            MARCOS
            <br />
            VEIGA
          </h2>
          <div className="space-y-4 text-gray-500 text-sm leading-relaxed font-sans">
            <p>
              8 anos transformando peles em telas. Formado em artes visuais pela FAAP, Marcos
              construiu uma carreira sólida entre os melhores artistas do Brasil.
            </p>
            <p>
              Especialista em blackwork e realismo, com passagens por estúdios premiados em Buenos
              Aires e Barcelona. Cada trabalho é uma obra única e assinada.
            </p>
            <p>
              Mais de 4.000 tatuagens realizadas. Participante do São Paulo Tattoo Festival 2019,
              2021 e 2023.
            </p>
          </div>

          <div className="flex gap-6 mt-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl text-[#e63946]">{s.n}</div>
                <div className="text-gray-600 text-xs tracking-widest uppercase font-sans">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="#"
              className="w-10 h-10 border border-[#1a1a1a] flex items-center justify-center text-gray-600 hover:border-[#e63946] hover:text-[#e63946] transition-all"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-[#1a1a1a] flex items-center justify-center text-gray-600 hover:border-[#e63946] hover:text-[#e63946] transition-all"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[3/4] bg-[#0d0d0d] border border-[#1a1a1a] relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1772925660436-277b5b7cff09?w=600&q=80&auto=format&fit=crop"
              alt="Marcos Veiga - Artista"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-display text-2xl text-[#f1faee]">MARCOS VEIGA</div>
              <div className="text-[#e63946] text-xs tracking-widest uppercase font-sans mt-1">
                Artista Principal · Dark Ink Studio
              </div>
            </div>
          </div>
          <div className="absolute -top-3 -right-3 w-16 h-16 border border-[#e63946]/30" />
          <div className="absolute -bottom-3 -left-3 w-10 h-10 border border-[#e63946]/20" />
        </div>
      </div>
    </section>
  )
}
