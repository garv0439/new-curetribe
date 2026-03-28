import { Link } from 'react-router-dom'

export default function Slide1({ isActive }) {
  const stats = [
    { value: '2+', label: 'Experts' },
    { value: '50+', label: 'Lives Transformed' },
    { value: '100%', label: 'Personalized Care' },
  ]

  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <img
          src="/images/Meetcuretribe.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/88" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center text-center">
        <p
          className={`mb-2 inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand sm:mb-3 sm:text-sm sm:tracking-[0.2em] motion-safe:transition-all motion-safe:duration-500 ${
            isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <span aria-hidden>❤️</span>
          Health comes first
        </p>
        <h1 className="max-w-4xl px-1 text-balance font-sans text-2xl font-bold leading-snug tracking-tight text-brand sm:text-4xl lg:text-5xl">
          Live Pain-Free with Cure Tribe
        </h1>
        <p className="mx-auto mt-3 max-w-2xl px-1 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base sm:text-lg">
          Start your journey toward movement, strength, and confidence with care that puts you first.
        </p>
        <dl className="mt-8 grid w-full max-w-2xl grid-cols-3 gap-2 sm:mt-10 sm:gap-6">
          {stats.map((st) => (
            <div
              key={st.label}
              className="rounded-xl border border-brand-muted/80 bg-white px-2 py-3 shadow-sm transition hover:border-brand/25 hover:shadow-md sm:rounded-2xl sm:px-3 sm:py-4"
            >
              <dt className="text-lg font-bold tabular-nums text-brand sm:text-2xl lg:text-3xl">{st.value}</dt>
              <dd className="mt-1 text-[10px] font-medium leading-tight text-slate-600 sm:text-sm">{st.label}</dd>
            </div>
          ))}
        </dl>
        <Link
          to="/contact"
          className="mt-8 inline-flex w-full max-w-xs items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-light hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:mt-10 sm:w-auto sm:max-w-none sm:px-8"
        >
          Book Appointment
        </Link>
      </div>
    </>
  )
}
