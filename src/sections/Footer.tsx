import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl">
          DARK<span className="text-[#e63946]">INK</span>
        </span>
        <p className="text-gray-700 text-xs font-sans">
          © 2024 Dark Ink Studio. Todos os direitos reservados. São Paulo - SP
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-gray-700 hover:text-[#e63946] transition-colors">
            <FaInstagram size={16} />
          </a>
          <a href="#" className="text-gray-700 hover:text-[#e63946] transition-colors">
            <FaWhatsapp size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
