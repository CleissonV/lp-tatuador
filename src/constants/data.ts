import {
  LuSquare, LuAnchor, LuPenLine, LuFeather, LuEye, LuDroplets,
} from 'react-icons/lu'
import type { TattooStyle, GalleryItem, Testimonial } from '../types'

export const styles: TattooStyle[] = [
  {
    name: 'Blackwork',
    desc: 'Traços precisos, sombras densas e geometria impecável. Arte que resiste ao tempo.',
    icon: LuSquare,
    specialties: ['Geométrico', 'Mandala', 'Tribal'],
  },
  {
    name: 'Old School',
    desc: 'Ícones clássicos americanos com cores vibrantes e contornos fortes. Tradição na pele.',
    icon: LuAnchor,
    specialties: ['Âncoras', 'Rosas', 'Marinheiro'],
  },
  {
    name: 'Fineline',
    desc: 'Delicadeza extrema. Linhas finas que criam detalhes fotográficos na pele.',
    icon: LuPenLine,
    specialties: ['Botânico', 'Minimalista', 'Lettering'],
  },
  {
    name: 'Neo Tradicional',
    desc: 'Releitura moderna do tradicional. Paleta rica, volumes expressivos, composição narrativa.',
    icon: LuFeather,
    specialties: ['Animais', 'Retratos', 'Natureza'],
  },
  {
    name: 'Realismo',
    desc: 'Retratos e naturezas que desafiam a percepção. Cada detalhe milimétrico perfeito.',
    icon: LuEye,
    specialties: ['Retratos', 'Preto e Cinza', 'Colorido'],
  },
  {
    name: 'Aquarela',
    desc: 'Explosões de cor que imitam pintura em aquarela. Arte fluida e única em cada traço.',
    icon: LuDroplets,
    specialties: ['Flores', 'Abstratos', 'Fauna'],
  },
]

export const tattooImages: GalleryItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=600&q=80&auto=format&fit=crop',
    alt: 'Tatuagem blackwork geométrica',
    style: 'Blackwork',
  },
  {
    src: 'https://images.unsplash.com/photo-1616879564267-a336232e3a95?w=600&q=80&auto=format&fit=crop',
    alt: 'Tatuagem old school âncora',
    style: 'Old School',
  },
  {
    src: 'https://images.unsplash.com/photo-1614199621267-5812fe71d122?w=600&q=80&auto=format&fit=crop',
    alt: 'Tatuagem fineline botânica',
    style: 'Fineline',
  },
  {
    src: 'https://images.unsplash.com/photo-1651650564239-7e96053d934c?w=600&q=80&auto=format&fit=crop',
    alt: 'Tatuagem neo tradicional',
    style: 'Neo Tradicional',
  },
  {
    src: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&q=80&auto=format&fit=crop',
    alt: 'Tatuagem realismo retrato',
    style: 'Realismo',
  },
  {
    src: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=600&q=80&auto=format&fit=crop',
    alt: 'Tatuagem aquarela flores',
    style: 'Aquarela',
  },
  {
    src: 'https://images.unsplash.com/photo-1605647533135-51b5906087d0?w=600&q=80&auto=format&fit=crop',
    alt: 'Tatuagem blackwork mandala',
    style: 'Blackwork',
  },
  {
    src: 'https://images.unsplash.com/photo-1597852075234-fd721ac361d3?w=600&q=80&auto=format&fit=crop',
    alt: 'Tatuagem fineline minimalista',
    style: 'Fineline',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Ana C.',
    style: 'Blackwork',
    text: 'Marcos é um artista incrível. Meu blackwork ficou perfeito, exatamente como eu imaginava. Profissionalismo impecável do início ao fim.',
    rating: 5,
  },
  {
    name: 'Rafael M.',
    style: 'Realismo',
    text: 'A melhor experiência de tatuagem que já tive. O estúdio é impecável, o atendimento é ótimo e o resultado superou minhas expectativas.',
    rating: 5,
  },
  {
    name: 'Juliana P.',
    style: 'Realismo',
    text: 'Fiz um realismo de alta complexidade e o Marcos entregou algo além do que eu esperava. Arte de nível internacional aqui em SP.',
    rating: 5,
  },
]
