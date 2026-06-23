import { LuPhone, LuMapPin, LuClock } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa'
import { styles } from '../constants/data'
import type { IconType } from 'react-icons'

interface ContactItem {
  icon: IconType
  text: string
}

const contactItems: ContactItem[] = [
  { icon: LuPhone, text: '(11) 94567-8901' },
  { icon: FaWhatsapp, text: '(11) 94567-8901 (WhatsApp)' },
  { icon: LuMapPin, text: 'Rua Augusta, 1440 - Consolação, SP' },
  { icon: LuClock, text: 'Seg-Sáb: 10h às 20h' },
]

const formFields = [
  { label: 'Nome', type: 'text', ph: 'Seu nome' },
  { label: 'WhatsApp', type: 'tel', ph: '(11) 99999-9999' },
  { label: 'E-mail', type: 'email', ph: 'seu@email.com' },
]

export default function Booking() {
  return (
    <section id="agendamento" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[#e63946] text-xs tracking-[0.4em] uppercase mb-4">
              Agende Sua Sessão
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-[#f1faee] leading-none mb-8">
              GRAVE
              <br />
              NA PELE
            </h2>

            <div className="space-y-4 mb-8">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 border border-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-[#e63946]" size={12} />
                  </div>
                  <span className="text-gray-500 text-sm font-sans">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="border border-[#1a1a1a] p-4">
              <p className="text-[#e63946] text-xs tracking-widest uppercase font-sans mb-2">
                Importante
              </p>
              <p className="text-gray-600 text-xs font-sans leading-relaxed">
                Consultas e orçamentos realizados presencialmente. Sinal de 30% para confirmação da
                sessão. Traga referências de design.
              </p>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {formFields.map((f, i) => (
              <div key={i}>
                <label className="block text-xs tracking-widest uppercase text-gray-700 mb-2 font-sans">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.ph}
                  className="w-full bg-[#050505] border border-[#1a1a1a] px-4 py-3 text-[#f1faee] text-sm font-sans placeholder-gray-800 focus:border-[#e63946] focus:outline-none transition-colors"
                />
              </div>
            ))}

            <div>
              <label className="block text-xs tracking-widest uppercase text-gray-700 mb-2 font-sans">
                Estilo Desejado
              </label>
              <select className="w-full bg-[#050505] border border-[#1a1a1a] px-4 py-3 text-gray-500 text-sm font-sans focus:border-[#e63946] focus:outline-none transition-colors">
                <option value="">Selecione um estilo</option>
                {styles.map((s) => (
                  <option key={s.name}>{s.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase text-gray-700 mb-2 font-sans">
                Descreva Sua Ideia
              </label>
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
  )
}
