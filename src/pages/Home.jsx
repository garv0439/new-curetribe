import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'

const teasers = [
  {
    to: '/services',
    title: 'Services',
    text: 'Physio, nutrition, yoga, and mind–body support in one coordinated care model.',
  },
  {
    to: '/about',
    title: 'About us',
    text: 'How Cure Tribe started, what we believe, and how we keep care human and evidence-based.',
  },
  {
    to: '/contact',
    title: 'Contact',
    text: 'Book a visit, ask a question, or reach our team—we respond quickly.',
  },
]

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="border-t border-brand-muted/70 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Explore Cure Tribe</p>
            <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-brand sm:text-3xl">
              Everything you need, on dedicated pages
            </h2>
            <p className="mt-3 text-slate-600">
              Jump into services, our story, or get in touch—no scrolling through one long page.
            </p>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {teasers.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="group flex min-h-[44px] h-full flex-col rounded-2xl border border-brand-muted/80 bg-brand-muted/10 p-5 transition active:bg-brand-muted/30 hover:border-brand/30 hover:bg-white hover:shadow-lg sm:p-6"
                >
                  <span className="mb-3 h-1 w-10 rounded-full bg-brand transition group-hover:w-14" aria-hidden />
                  <h3 className="text-lg font-semibold text-brand">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                  <span className="mt-4 text-sm font-semibold text-brand group-hover:underline">Open page →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="why" className="border-t border-brand-muted/70 bg-gradient-to-b from-white via-brand-muted/20 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Why Cure Tribe</p>
            <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-brand sm:text-3xl">
              Physiotherapy-led care with room for the whole you
            </h2>
            <p className="mt-4 text-slate-600">
              We combine clinical rigor with approachable coaching so you can move better, fuel smarter, and feel more
              like yourself—at home or in session.
            </p>
          </div>
          <dl className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { v: '98%', l: 'Recovery Rate' },
              { v: '100%', l: 'Client Trust' },
              { v: '24/7', l: 'Support' },
              { v: '50+', l: 'Happy patients' },
            ].map((row) => (
              <div
                key={row.l}
                className="rounded-2xl border border-brand-muted/90 bg-white px-4 py-6 text-center shadow-sm"
              >
                <dt className="text-2xl font-bold text-brand sm:text-3xl">{row.v}</dt>
                <dd className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">{row.l}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex w-full max-w-sm items-center justify-center rounded-full bg-brand px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-brand-light hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto sm:px-10 sm:py-4"
            >
              Book appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
