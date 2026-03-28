import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSlider from './components/HeroSlider'

const solutionSteps = [
  {
    title: 'Find Your Specialist',
    text: 'Discover expert physiotherapists tailored to your needs. Whether you’re managing pain or enhancing mental well-being, our professionals provide focused, individualized care.',
  },
  {
    title: 'Book Your Schedule',
    text: 'Pick a date and time that fits your routine and connect with dedicated specialists who prioritize your recovery, growth, and holistic health.',
  },
  {
    title: 'Get Personalized Care',
    text: 'Receive expert advice and customized treatment plans from our experienced team to achieve both physical and mental balance. We’re here to help you heal, grow, and thrive.',
  },
]

const services = [
  {
    title: 'Physiotherapy Services',
    text: 'Expert physiotherapy treatments designed to improve mobility, reduce pain, and enhance physical well-being.',
  },
  {
    title: 'Dietary Guidance',
    text: 'Personalized nutrition plans tailored to individual health goals, ensuring a balanced and sustainable lifestyle.',
  },
  {
    title: 'Yoga Classes',
    text: 'Holistic yoga sessions to improve flexibility, strength, and mental clarity while promoting overall wellness.',
  },
  {
    title: 'Physiotherapy Support',
    text: 'Compassionate counseling and physiotherapy support to foster emotional resilience and mental health.',
  },
]

export default function App() {
  const [solutionTab, setSolutionTab] = useState(0)

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSlider />

        <section id="services" className="border-t border-brand-muted/70 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">Our Medical Services</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand sm:text-4xl">
                Comprehensive wellness solutions for every aspect of life
              </h2>
            </div>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((item) => (
                <li
                  key={item.title}
                  className="group flex flex-col rounded-2xl border border-brand-muted/80 bg-brand-muted/15 p-6 transition hover:border-brand/30 hover:bg-white hover:shadow-lg"
                >
                  <span className="mb-3 h-1 w-10 rounded-full bg-brand transition group-hover:w-14" aria-hidden />
                  <h3 className="text-lg font-semibold text-brand">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="about" className="border-t border-brand-muted/50 bg-gradient-to-b from-white via-brand-muted/20 to-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand">About Cure Tribe</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand sm:text-4xl">
                  Your partner in accessible healthcare
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Welcome to Cure Tribe – your go-to partner for accessible and personalized healthcare. With expert
                  doctors offering online consultations and tailored services, we’re here to prioritize your health and
                  help you thrive.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand">Our solutions</h3>
                <div
                  className="mt-4 flex flex-wrap gap-2"
                  role="tablist"
                  aria-label="Our solutions steps"
                >
                  {solutionSteps.map((step, i) => (
                    <button
                      key={step.title}
                      type="button"
                      role="tab"
                      aria-selected={solutionTab === i}
                      id={`solution-tab-${i}`}
                      aria-controls={`solution-panel-${i}`}
                      onClick={() => setSolutionTab(i)}
                      className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                        solutionTab === i
                          ? 'bg-brand text-white shadow-md'
                          : 'border-2 border-brand-muted bg-white text-brand hover:border-brand/40 hover:bg-brand-muted/30'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <div
                  role="tabpanel"
                  id={`solution-panel-${solutionTab}`}
                  aria-labelledby={`solution-tab-${solutionTab}`}
                  className="mt-6 rounded-2xl border border-brand-muted/80 bg-white p-6 shadow-sm transition duration-300"
                >
                  <h4 className="font-semibold text-brand">{solutionSteps[solutionTab].title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {solutionSteps[solutionTab].text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="border-t border-brand-muted/70 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">Why Choose Cure Tribe?</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand sm:text-4xl">
                Physiotherapy expertise that transforms lives
              </h2>
              <p className="mt-4 text-slate-600">
                At Cure Tribe, we specialize in physiotherapy, delivering expert care that transforms lives.
              </p>
            </div>

            <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { v: '98%', l: 'Recovery Rate' },
                { v: '100%', l: 'Client Trust' },
                { v: '24/7', l: 'Support Your Well-being' },
                { v: '50+', l: 'Happy patients' },
              ].map((row) => (
                <div
                  key={row.l}
                  className="rounded-2xl border border-brand-muted/90 bg-brand-muted/15 px-4 py-6 text-center transition hover:border-brand/30"
                >
                  <dt className="text-2xl font-bold text-brand sm:text-3xl">{row.v}</dt>
                  <dd className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">{row.l}</dd>
                </div>
              ))}
            </dl>

            <ul className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
              {[
                {
                  title: 'Expert Care Team',
                  text: 'Access personalized care from a team of highly skilled physiotherapy professionals dedicated to your well-being.',
                },
                {
                  title: 'Holistic Health Support',
                  text: 'Round-the-clock guidance to ensure your physical and mental health needs are met whenever you need us.',
                },
                {
                  title: '24/7 Availability',
                  text: 'Dedicated support to help you on your journey toward recovery and wellness, any time of the day.',
                },
                {
                  title: 'Easy Enrollment',
                  text: 'Simple and quick registration process to start your journey towards better health.',
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-brand-muted/80 bg-gradient-to-br from-white to-brand-muted/25 p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-brand">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-14 flex justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-brand px-10 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-brand-light hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
