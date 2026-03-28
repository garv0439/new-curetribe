import { Link } from 'react-router-dom'

const metrics = [
  { value: '98%', label: 'Recovery Rate' },
  { value: '100%', label: 'Client Trust' },
  { value: '24/7', label: 'Support Your Well-being' },
  { value: '50+', label: 'Happy patients' },
]

const highlights = [
  { title: 'Expert Care Team', text: 'Highly skilled physiotherapy professionals dedicated to your well-being.' },
  { title: 'Holistic Health Support', text: 'Guidance whenever your physical and mental health needs arise.' },
  { title: '24/7 Availability', text: 'Support on your journey toward recovery and wellness, any time.' },
  { title: 'Easy Enrollment', text: 'Simple registration to start your path to better health.' },
]

export default function Slide6({ isActive }) {
  return (
    <div className="relative z-10 flex h-full flex-col items-center text-center">
      <p
        className={`mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand sm:mb-3 sm:text-sm sm:tracking-[0.2em] motion-safe:transition-all motion-safe:duration-500 ${
          isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        Why Cure Tribe
      </p>
      <h1 className="max-w-4xl px-1 text-balance font-sans text-2xl font-bold leading-snug tracking-tight text-brand sm:text-4xl lg:text-5xl">
        Care that transforms lives
      </h1>
      <div className="mt-6 w-full max-w-4xl sm:mt-8">
        <dl className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-lg bg-brand px-2 py-3 text-center text-white shadow-md sm:rounded-xl sm:px-3 sm:py-4">
              <dt className="text-lg font-bold tabular-nums sm:text-xl lg:text-2xl">{m.value}</dt>
              <dd className="mt-1 text-[9px] font-medium uppercase leading-tight tracking-wide text-white/90 sm:text-xs">
                {m.label}
              </dd>
            </div>
          ))}
        </dl>
        <ul className="mt-4 grid gap-2.5 text-left sm:mt-6 sm:grid-cols-2 sm:gap-3">
          {highlights.map((h) => (
            <li key={h.title} className="flex gap-2.5 rounded-xl border border-brand-muted/80 bg-white p-3 sm:gap-3 sm:p-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden />
              <div>
                <h3 className="text-sm font-semibold text-brand sm:text-base">{h.title}</h3>
                <p className="mt-1 text-xs text-slate-600 sm:text-sm">{h.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Link
        to="/contact#appointment-form"
        className="mt-8 inline-flex w-full max-w-xs items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-light hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:mt-10 sm:w-auto sm:max-w-none sm:px-8"
      >
        Book Appointment
      </Link>
    </div>
  )
}
