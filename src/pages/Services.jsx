import { Link } from 'react-router-dom'

const offerings = [
  {
    name: 'Clinical physiotherapy',
    summary: 'Hands-on and exercise-based rehab for pain, stiffness, post-surgical recovery, and performance tuning.',
    bullets: ['Joint and spine programs', 'Sport-specific return-to-play', 'Ergonomic and load-management coaching'],
  },
  {
    name: 'Nutrition & metabolic health',
    summary: 'Dietitian-led plans for energy, weight goals, gut comfort, and recovery—aligned with your training schedule.',
    bullets: ['Meal frameworks, not fad rules', 'Labs-friendly guidance when needed', 'Sync with your physio goals'],
  },
  {
    name: 'Yoga & mindful movement',
    summary: 'Therapeutic yoga sequences that build mobility, breath control, and nervous-system regulation.',
    bullets: ['Beginner-safe progressions', 'Stress and sleep support', 'Small-group and 1:1 options'],
  },
  {
    name: 'Mind–body coaching',
    summary: 'Structured support for anxiety around injury, motivation dips, and building sustainable routines.',
    bullets: ['Goal setting with accountability', 'CBT-informed coping skills', 'Warm handoffs to specialists'],
  },
]

const process = [
  { step: '01', title: 'Intake & goals', text: 'We capture your history, schedule, and what “better” looks like for you.' },
  { step: '02', title: 'Plan together', text: 'Your lead clinician maps milestones; other disciplines plug in only where useful.' },
  { step: '03', title: 'Iterate weekly', text: 'Sessions adjust based on symptoms, feedback, and real-world constraints.' },
]

export default function Services() {
  return (
    <div className="bg-white">
      <header className="w-full border-b border-brand-muted/70 bg-gradient-to-b from-white to-brand-muted/20">
        <div className="w-full px-[max(1rem,env(safe-area-inset-left))] py-10 pr-[max(1rem,env(safe-area-inset-right))] sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
          <p className="w-full text-sm font-semibold uppercase tracking-widest text-brand">Services</p>
          <h1 className="mt-3 w-full max-w-none text-balance text-2xl font-bold tracking-tight text-brand sm:text-4xl lg:text-5xl">
            Care pathways designed to stack—not compete
          </h1>
          <p className="mt-4 w-full max-w-none text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Pick one service or blend several. Every Cure Tribe program starts with clarity: what hurts, what matters, and
            what success looks like in your calendar.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] py-10 pr-[max(1rem,env(safe-area-inset-right))] sm:px-6 sm:py-14 lg:px-8">
        <ul className="grid gap-8 lg:grid-cols-2">
          {offerings.map((o) => (
            <li
              key={o.name}
              className="flex flex-col rounded-2xl border border-brand-muted/80 bg-brand-muted/10 p-5 transition hover:border-brand/30 hover:bg-white hover:shadow-lg sm:p-8"
            >
              <h2 className="text-xl font-bold text-brand">{o.name}</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{o.summary}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {o.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-brand-muted/60 bg-gradient-to-b from-brand-muted/15 to-white py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-brand">How we work with you</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {process.map((p) => (
              <li key={p.step} className="relative rounded-2xl border border-brand-muted/80 bg-white p-6 pt-10 shadow-sm">
                <span className="absolute left-6 top-4 font-mono text-xs font-bold text-brand/70">{p.step}</span>
                <h3 className="font-semibold text-brand">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-10 max-w-2xl text-center text-slate-600">
            Not sure where to start? Book a triage call—we will point you to the right clinician and format (virtual or
            in-person) before you commit.
          </p>
          <div className="mt-8 flex justify-center px-1">
            <Link
              to="/contact"
              className="inline-flex w-full max-w-sm items-center justify-center rounded-full bg-brand px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-brand-light sm:w-auto sm:px-10 sm:py-4"
            >
              Book or ask a question
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
