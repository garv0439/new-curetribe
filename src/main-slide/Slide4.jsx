import { Link } from 'react-router-dom'

const cards = [
  { title: 'Physiotherapy Services', text: 'Improve mobility, reduce pain, and enhance physical well-being.' },
  { title: 'Dietary Guidance', text: 'Nutrition plans tailored to your goals for a balanced lifestyle.' },
  { title: 'Yoga Classes', text: 'Build flexibility, strength, and mental clarity holistically.' },
  { title: 'Mental & movement support', text: 'Counseling and physiotherapy support for emotional resilience.' },
]

export default function Slide4({ isActive }) {
  return (
    <div className="relative z-10 flex h-full flex-col items-center text-center">
      <p
        className={`mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand sm:mb-3 sm:text-sm sm:tracking-[0.2em] motion-safe:transition-all motion-safe:duration-500 ${
          isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        Our Medical Services
      </p>
      <h1 className="max-w-4xl px-1 text-balance font-sans text-xl font-bold leading-snug tracking-tight text-brand sm:text-3xl lg:text-5xl">
        Comprehensive wellness for every aspect of life
      </h1>
      <ul className="mt-6 grid w-full max-w-4xl gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3 lg:gap-4">
        {cards.map((c) => (
          <li
            key={c.title}
            className="rounded-xl border border-brand-muted/80 bg-white p-3.5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-md sm:p-4"
          >
            <h3 className="text-sm font-semibold text-brand sm:text-base">{c.title}</h3>
            <p className="mt-1.5 text-xs text-slate-600 sm:mt-2 sm:text-sm">{c.text}</p>
          </li>
        ))}
      </ul>
      <Link
        to="/services"
        className="mt-8 inline-flex w-full max-w-xs items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-light hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:mt-10 sm:w-auto sm:max-w-none sm:px-8"
      >
        View all services
      </Link>
    </div>
  )
}
