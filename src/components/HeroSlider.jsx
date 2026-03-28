import { useCallback, useEffect, useRef, useState } from 'react'

const SLIDES = [
  {
    id: 1,
    eyebrow: 'Health comes first',
    eyebrowEmoji: true,
    title: 'Live Pain-Free with Cure Tribe',
    body: 'Start your journey toward movement, strength, and confidence with care that puts you first.',
    cta: 'Book Appointment',
    stats: [
      { value: '2+', label: 'Experts' },
      { value: '50+', label: 'Lives Transformed' },
      { value: '100%', label: 'Personalized Care' },
    ],
    variant: 'hero',
  },
  {
    id: 2,
    eyebrow: 'Holistic wellness',
    title: 'Move Better. Eat Smarter. Think Stronger.',
    body:
      'Empowering you with expert physiotherapy, personalized nutrition, and mental wellness support—because true health is a balance of body and mind. Your well-being, our mission.',
    cta: 'Book Consultation',
    variant: 'text',
  },
  {
    id: 3,
    eyebrow: 'Medical Services',
    title: '24/7 Holistic Care',
    body: 'Your health never sleeps, and neither do we! Get round-the-clock support in physiotherapy, nutrition, yoga, and mental well-being.',
    bullets: [
      { title: 'Heal from Home', text: 'Expert-led online sessions for movement, mindfulness, and nutrition—wellness just a click away.' },
      { title: 'Your Health, Your Privacy', text: 'Confidential, secure, top-notch care for your body and mind—you deserve the best.' },
    ],
    cta: 'Explore services',
    variant: 'split',
  },
  {
    id: 4,
    eyebrow: 'Our Medical Services',
    title: 'Comprehensive wellness for every aspect of life',
    cards: [
      { title: 'Physiotherapy Services', text: 'Improve mobility, reduce pain, and enhance physical well-being.' },
      { title: 'Dietary Guidance', text: 'Nutrition plans tailored to your goals for a balanced lifestyle.' },
      { title: 'Yoga Classes', text: 'Build flexibility, strength, and mental clarity holistically.' },
      { title: 'Mental & movement support', text: 'Counseling and physiotherapy support for emotional resilience.' },
    ],
    variant: 'cards',
  },
  {
    id: 5,
    eyebrow: 'About Cure Tribe',
    title: 'Accessible, personalized healthcare',
    body:
      'Welcome to Cure Tribe—your partner for online consultations and tailored services. We prioritize your health and help you thrive.',
    steps: [
      { title: 'Find Your Specialist', text: 'Discover physiotherapists tailored to your needs—focused, individualized care.' },
      { title: 'Book Your Schedule', text: 'Pick a time that fits your routine and connect with specialists who put you first.' },
      { title: 'Get Personalized Care', text: 'Custom treatment plans from our experienced team for physical and mental balance.' },
    ],
    variant: 'steps',
  },
  {
    id: 6,
    eyebrow: 'Why Cure Tribe',
    title: 'Care that transforms lives',
    metrics: [
      { value: '98%', label: 'Recovery Rate' },
      { value: '100%', label: 'Client Trust' },
      { value: '24/7', label: 'Support Your Well-being' },
      { value: '50+', label: 'Happy patients' },
    ],
    highlights: [
      { title: 'Expert Care Team', text: 'Highly skilled physiotherapy professionals dedicated to your well-being.' },
      { title: 'Holistic Health Support', text: 'Guidance whenever your physical and mental health needs arise.' },
      { title: '24/7 Availability', text: 'Support on your journey toward recovery and wellness, any time.' },
      { title: 'Easy Enrollment', text: 'Simple registration to start your path to better health.' },
    ],
    cta: 'Book Appointment',
    variant: 'metrics',
  },
]

const AUTO_MS = 6000

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reducedMotion = useRef(false)

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const goNext = useCallback(() => {
    setActive((i) => (i + 1) % SLIDES.length)
  }, [])

  const goPrev = useCallback(() => {
    setActive((i) => (i - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    if (paused || reducedMotion.current) return
    const t = setInterval(goNext, AUTO_MS)
    return () => clearInterval(t)
  }, [paused, goNext, active])

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-brand-muted/25"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured highlights"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(25,88,88,0.08),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="relative min-h-[420px] sm:min-h-[460px]">
          {SLIDES.map((s, i) => {
            const isActive = i === active
            return (
              <article
                key={s.id}
                aria-hidden={!isActive}
                className={`absolute inset-0 transition-all duration-700 ease-out motion-reduce:transition-none ${
                  isActive
                    ? 'z-10 translate-y-0 opacity-100'
                    : 'z-0 translate-y-6 opacity-0 pointer-events-none'
                }`}
              >
                {s.id === 1 && (
                  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
                    <img
                      src="/images/Meetcuretribe.jpeg"
                      alt=""
                      className="absolute inset-0 h-full w-full scale-105 object-cover opacity-[0.22]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/88" />
                  </div>
                )}
                <div className="relative z-10 flex h-full flex-col items-center text-center">
                  <p
                    className={`mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand motion-safe:transition-all motion-safe:duration-500 ${
                      isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                    }`}
                  >
                    {s.eyebrowEmoji && <span aria-hidden>❤️</span>}
                    {s.eyebrow}
                  </p>

                  <h1 className="max-w-4xl font-sans text-3xl font-bold leading-tight tracking-tight text-brand sm:text-4xl lg:text-5xl">
                    {s.title}
                  </h1>

                  {s.body && (
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{s.body}</p>
                  )}

                  {s.stats && (
                    <dl className="mt-10 grid w-full max-w-2xl grid-cols-3 gap-4 sm:gap-6">
                      {s.stats.map((st) => (
                        <div
                          key={st.label}
                          className="rounded-2xl border border-brand-muted/80 bg-white px-3 py-4 shadow-sm transition hover:border-brand/25 hover:shadow-md"
                        >
                          <dt className="text-2xl font-bold text-brand sm:text-3xl">{st.value}</dt>
                          <dd className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">{st.label}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {s.bullets && (
                    <ul className="mt-8 grid w-full max-w-3xl gap-4 text-left sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li
                          key={b.title}
                          className="rounded-2xl border border-brand-muted/90 bg-white p-5 shadow-sm transition hover:border-brand/30"
                        >
                          <h3 className="font-semibold text-brand">{b.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.text}</p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.cards && (
                    <ul className="mt-8 grid w-full max-w-4xl gap-3 sm:grid-cols-2 lg:gap-4">
                      {s.cards.map((c) => (
                        <li
                          key={c.title}
                          className="rounded-xl border border-brand-muted/80 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-md"
                        >
                          <h3 className="font-semibold text-brand">{c.title}</h3>
                          <p className="mt-2 text-sm text-slate-600">{c.text}</p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.steps && (
                    <ol className="mt-8 grid w-full max-w-3xl gap-4 text-left sm:grid-cols-3">
                      {s.steps.map((step, idx) => (
                        <li
                          key={step.title}
                          className="relative rounded-2xl border border-brand-muted/80 bg-white p-5 pt-8 shadow-sm"
                        >
                          <span className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                            {idx + 1}
                          </span>
                          <h3 className="font-semibold text-brand">{step.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
                        </li>
                      ))}
                    </ol>
                  )}

                  {s.metrics && (
                    <div className="mt-8 w-full max-w-4xl">
                      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {s.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="rounded-xl bg-brand px-3 py-4 text-center text-white shadow-md"
                          >
                            <dt className="text-xl font-bold sm:text-2xl">{m.value}</dt>
                            <dd className="mt-1 text-[10px] font-medium uppercase tracking-wide text-white/90 sm:text-xs">
                              {m.label}
                            </dd>
                          </div>
                        ))}
                      </dl>
                      {s.highlights && (
                        <ul className="mt-6 grid gap-3 text-left sm:grid-cols-2">
                          {s.highlights.map((h) => (
                            <li key={h.title} className="flex gap-3 rounded-xl border border-brand-muted/80 bg-white p-4">
                              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden />
                              <div>
                                <h3 className="font-semibold text-brand">{h.title}</h3>
                                <p className="mt-1 text-sm text-slate-600">{h.text}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {s.cta && (
                    <a
                      href="#contact"
                      className="mt-10 inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-light hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    >
                      {s.cta}
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-muted bg-white text-brand shadow-sm transition hover:border-brand/40 hover:bg-brand-muted/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              aria-label="Previous slide"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div className="flex gap-2 px-2" role="tablist" aria-label="Slide indicators">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-brand' : 'w-2.5 bg-brand-muted hover:bg-brand-muted/80'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-muted bg-white text-brand shadow-sm transition hover:border-brand/40 hover:bg-brand-muted/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              aria-label="Next slide"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
