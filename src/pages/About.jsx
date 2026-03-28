import { Link } from 'react-router-dom'

const values = [
  {
    title: 'Evidence first, empathy always',
    text: 'Plans are grounded in clinical best practice and explained in plain language so you always know the “why” behind your program.',
  },
  {
    title: 'Whole-person wellness',
    text: 'Movement, nutrition, breath, and mental load interact. We coordinate specialists so nothing gets treated in isolation.',
  },
  {
    title: 'Access without compromise',
    text: 'Secure video consults, flexible hours, and clear follow-ups—quality care should fit real life, not the other way around.',
  },
]

const timeline = [
  { year: '2022', detail: 'Cure Tribe launched as a small physio collective focused on chronic pain and return-to-sport rehab.' },
  { year: '2023', detail: 'Added dietitians and yoga therapists to support recovery and long-term habit change.' },
  { year: '2024–2026', detail: 'Expanded 24/7 triage, mental-health–informed coaching, and hybrid online–in-person pathways.' },
]

export default function About() {
  return (
    <div className="bg-white">
      <header className="border-b border-brand-muted/70 bg-gradient-to-b from-brand-muted/20 to-white">
        <div className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] py-10 pr-[max(1rem,env(safe-area-inset-right))] sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">About Cure Tribe</p>
          <h1 className="mt-3 max-w-3xl text-balance text-2xl font-bold tracking-tight text-brand sm:text-4xl lg:text-5xl">
            We built a tribe around better movement—and kept growing from there
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Cure Tribe began when our founders saw too many people bouncing between disconnected providers. Today we are
            a multidisciplinary team united by one promise: make expert care coordinated, kind, and actually reachable.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] py-10 pr-[max(1rem,env(safe-area-inset-right))] sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-bold text-brand">Our mission</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Help every member move with confidence—whether you are rehabbing an injury, managing a busy desk job, or
              training for your next milestone. We measure success in fewer flare-ups, clearer goals, and care you would
              recommend to family.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Behind the scenes we invest in continuing education, shared clinical notes, and feedback loops so your
              experience improves every visit.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-muted/80 bg-brand-muted/10 p-5 sm:p-8">
            <h2 className="text-xl font-bold text-brand">Who we serve</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                Athletes and weekend warriors recovering from sprains, strains, and overuse patterns.
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                Professionals managing neck, back, and posture-related discomfort.
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                Anyone seeking structured nutrition, breathwork, or yoga alongside clinical rehab.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-muted/60 bg-white py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-brand">What we stand for</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <li
                key={v.title}
                className="rounded-2xl border border-brand-muted/80 bg-white p-6 shadow-sm transition hover:border-brand/25"
              >
                <h3 className="font-semibold text-brand">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-brand-muted/60 bg-gradient-to-b from-brand-muted/15 to-white py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand">Our journey</h2>
          <ol className="mt-8 space-y-6">
            {timeline.map((t) => (
              <li key={t.year} className="flex gap-4 sm:gap-8">
                <span className="shrink-0 font-mono text-sm font-bold text-brand">{t.year}</span>
                <p className="text-slate-600">{t.detail}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex w-full max-w-md items-center justify-center rounded-full bg-brand px-6 py-3.5 text-center text-sm font-semibold text-white shadow-md transition hover:bg-brand-light sm:w-auto sm:px-8"
            >
              Meet the team — start a conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
