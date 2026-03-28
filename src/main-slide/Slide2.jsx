import { Link } from 'react-router-dom'

export default function Slide2({ isActive }) {
  return (
    <div className="relative z-10 flex h-full flex-col items-center text-center">
      <p
        className={`mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand sm:mb-3 sm:text-sm sm:tracking-[0.2em] motion-safe:transition-all motion-safe:duration-500 ${
          isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        Holistic wellness
      </p>
      <h1 className="max-w-4xl px-1 text-balance font-sans text-2xl font-bold leading-snug tracking-tight text-brand sm:text-4xl lg:text-5xl">
        Move Better. Eat Smarter. Think Stronger.
      </h1>
      <p className="mx-auto mt-3 max-w-2xl px-1 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base sm:text-lg">
        Empowering you with expert physiotherapy, personalized nutrition, and mental wellness support—because true
        health is a balance of body and mind. Your well-being, our mission.
      </p>
      <Link
        to="/contact"
        className="mt-8 inline-flex w-full max-w-xs items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-light hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:mt-10 sm:w-auto sm:max-w-none sm:px-8"
      >
        Book Consultation
      </Link>
    </div>
  )
}
