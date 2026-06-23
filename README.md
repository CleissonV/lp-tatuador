<h1 align="center">Estúdio de Tatuagem</h1>

<p align="center">
  Landing page para estúdio de tatuagem underground com galeria de trabalhos, estilos disponíveis e sistema de agendamento.
  <br /><br />
  <a href="https://lp-tatuador.vercel.app"><strong>🔗 Ver Demo</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" />
</p>

---

## Sobre o Projeto

Landing page para estúdio de tatuagem com estética underground e dark. Hero com vídeo em loop e ícones flutuantes animados. Galeria de trabalhos com filtro por estilo, perfil detalhado do artista e formulário de agendamento personalizado.

## Funcionalidades

- Hero com vídeo e ícones flutuantes animados via Framer Motion
- Galeria de trabalhos com 8 fotos em grid responsivo
- 6 estilos de tatuagem com cards informativos
- Seção do artista com bio e especialidades
- Formulário de agendamento com seleção de estilo
- Depoimentos de clientes com avaliações

## Stack

- **React 18 + TypeScript** — componentes bem tipados
- **Tailwind CSS 3** — estilização rápida e responsiva
- **Framer Motion 11** — animações fluidas
- **Vite 5** — build ultrarrápido
- **react-icons** — ícones Font Awesome e Lucide

## Instalação

```bash
git clone https://github.com/CleissonV/lp-tatuador
cd lp-tatuador
npm install
npm run dev
```

## Estrutura

```
src/
├── constants/
│   └── data.ts         # estilos, galeria, depoimentos
├── types/
│   └── index.ts        # TattooStyle, GalleryItem, Testimonial
├── components/
│   └── ui/
│       ├── StyleCard.tsx
│       └── GalleryItem.tsx
├── sections/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Gallery.tsx
│   ├── Styles.tsx
│   ├── Artist.tsx
│   ├── Booking.tsx
│   ├── Testimonials.tsx
│   └── Footer.tsx
└── App.tsx
```

---

Desenvolvido por [Cleisson Vilela](https://github.com/CleissonV)
