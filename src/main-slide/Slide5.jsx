import { Link } from 'react-router-dom'

const steps = [
  {
    title: 'Find Your Specialist',
    text: 'Discover physiotherapists tailored to your needs—focused, individualized care.',
  },
  {
    title: 'Book Your Schedule',
    text: 'Pick a time that fits your routine and connect with specialists who put you first.',
  },
  {
    title: 'Get Personalized Care',
    text: 'Custom treatment plans from our experienced team for physical and mental balance.',
  },
]

export default function Slide5({ isActive }) {
  return (
    <div className="relative z-10 flex h-full flex-col items-center text-center">
      <p
        className={`mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand sm:mb-3 sm:text-sm sm:tracking-[0.2em] motion-safe:transition-all motion-safe:duration-500 ${
          isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        About Cure Tribe
      </p>
      <h1 className="max-w-4xl px-1 text-balance font-sans text-2xl font-bold leading-snug tracking-tight text-brand sm:text-4xl lg:text-5xl">
        Accessible, personalized healthcare
      </h1>
      <p className="mx-auto mt-3 max-w-2xl px-1 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base sm:text-lg">
        Welcome to Cure Tribe—your partner for online consultations and tailored services. We prioritize your health and
        help you thrive.
      </p>
      <ol className="mt-6 grid w-full max-w-3xl gap-3 text-left sm:mt-8 sm:grid-cols-3 sm:gap-4">
        {steps.map((step, idx) => (
          <li key={step.title} className="relative rounded-2xl border border-brand-muted/80 bg-white p-4 pt-7 shadow-sm sm:p-5 sm:pt-8">
            <span className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
              {idx + 1}
            </span>
            <h3 className="font-semibold text-brand">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
          </li>
        ))}
      </ol>
      <Link
        to="/about"
        className="mt-8 inline-flex w-full max-w-xs items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-light hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:mt-10 sm:w-auto sm:max-w-none sm:px-8"
      >
        Our story
      </Link>
    </div>
  )
}
