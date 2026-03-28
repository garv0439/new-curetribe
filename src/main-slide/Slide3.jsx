import { Link } from 'react-router-dom'

const bullets = [
  {
    title: 'Heal from Home',
    text: 'Expert-led online sessions for movement, mindfulness, and nutrition—wellness just a click away.',
  },
  {
    title: 'Your Health, Your Privacy',
    text: 'Confidential, secure, top-notch care for your body and mind—you deserve the best.',
  },
]

export default function Slide3({ isActive }) {
  return (
    <div className="relative z-10 flex h-full flex-col items-center text-center">
      <p
        className={`mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand sm:mb-3 sm:text-sm sm:tracking-[0.2em] motion-safe:transition-all motion-safe:duration-500 ${
          isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        Medical Services
      </p>
      <h1 className="max-w-4xl px-1 text-balance font-sans text-2xl font-bold leading-snug tracking-tight text-brand sm:text-4xl lg:text-5xl">
        24/7 Holistic Care
      </h1>
      <p className="mx-auto mt-3 max-w-2xl px-1 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base sm:text-lg">
        Your health never sleeps, and neither do we! Get round-the-clock support in physiotherapy, nutrition, yoga, and
        mental well-being.
      </p>
      <ul className="mt-6 grid w-full max-w-3xl gap-3 text-left sm:mt-8 sm:gap-4 sm:grid-cols-2">
        {bullets.map((b) => (
          <li
            key={b.title}
            className="rounded-2xl border border-brand-muted/90 bg-white p-4 shadow-sm transition hover:border-brand/30 sm:p-5"
          >
            <h3 className="font-semibold text-brand">{b.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.text}</p>
          </li>
        ))}
      </ul>
      <Link
        to="/services"
        className="mt-8 inline-flex w-full max-w-xs items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-light hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:mt-10 sm:w-auto sm:max-w-none sm:px-8"
      >
        Explore services
      </Link>
    </div>
  )
}
