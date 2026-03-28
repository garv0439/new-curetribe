import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const initialForm = { name: '', email: '', phone: '', topic: 'booking', message: '' }

export default function Contact() {
  const location = useLocation()
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (location.hash !== '#appointment-form') return
    const el = document.getElementById('appointment-form')
    if (!el) return
    window.requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [location.pathname, location.hash])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-white">
      <header className="w-full border-b border-brand-muted/70 bg-gradient-to-b from-brand-muted/20 to-white">
        <div className="w-full px-[max(1rem,env(safe-area-inset-left))] py-10 pr-[max(1rem,env(safe-area-inset-right))] sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
          <p className="w-full text-sm font-semibold uppercase tracking-widest text-brand">Contact</p>
          <h1 className="mt-3 w-full max-w-none text-balance text-2xl font-bold tracking-tight text-brand sm:text-4xl lg:text-5xl">
            Tell us what you need—we will route you to the right specialist
          </h1>
          <p className="mt-4 w-full max-w-none text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Use the appointment form to request a visit. For urgent medical emergencies, please contact your local
            emergency services.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-[max(1rem,env(safe-area-inset-left))] py-10 pr-[max(1rem,env(safe-area-inset-right))] sm:px-6 sm:py-14 lg:grid-cols-5 lg:px-8 lg:py-16">
        <aside className="min-w-0 lg:col-span-2">
          <div className="rounded-2xl border border-brand-muted/80 bg-brand-muted/10 p-5 sm:p-8">
            <h2 className="text-lg font-semibold text-brand">Direct lines</h2>
            <ul className="mt-6 space-y-4 text-sm text-slate-600">
              <li>
                <span className="font-medium text-brand">Email</span>
                <br />
                <a href="mailto:hello@curetribe.com" className="underline-offset-2 hover:underline">
                  hello@curetribe.com
                </a>
              </li>
              <li>
                <span className="font-medium text-brand">Phone</span>
                <br />
                <a href="tel:+18005551234" className="underline-offset-2 hover:underline">
                  +1 (800) 555-1234
                </a>
                <span className="mt-1 block text-xs text-slate-500">Mon–Sun, 24/7 triage for members</span>
              </li>
              <li>
                <span className="font-medium text-brand">Visit</span>
                <br />
                <span>By appointment — hybrid care with virtual-first options nationwide.</span>
              </li>
            </ul>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            We typically reply within one business day. In the appointment form, include your time zone and preferred
            visit times.
          </p>
        </aside>

        <div className="min-w-0 lg:col-span-3">
          {submitted ? (
            <div
              className="rounded-2xl border border-brand-muted/80 bg-white p-6 text-center shadow-sm sm:p-10"
              role="status"
            >
              <p className="text-lg font-semibold text-brand">Thanks, {form.name || 'there'}!</p>
              <p className="mt-3 text-slate-600">
                This demo form does not send email yet—wire it to your backend or a form service when you are ready.
                We’ll follow up to confirm your appointment.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  setForm(initialForm)
                }}
                className="mt-8 min-h-[44px] w-full max-w-xs rounded-full border-2 border-brand px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand-muted/30 sm:w-auto"
              >
                Submit another appointment
              </button>
            </div>
          ) : (
            <form
              id="appointment-form"
              aria-labelledby="appointment-form-title"
              onSubmit={handleSubmit}
              className="rounded-2xl border border-brand-muted/80 bg-white p-4 shadow-sm sm:p-8"
              noValidate
            >
              <h2 id="appointment-form-title" className="text-xl font-bold text-brand sm:text-2xl">
                Appointment form
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill in your details and we’ll get back to you to schedule your visit.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="text-sm font-medium text-brand">Full name</span>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-2 w-full min-h-[44px] rounded-xl border border-brand-muted/80 px-4 py-3 text-base text-slate-800 outline-none ring-brand/30 transition focus:border-brand focus:ring-2"
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-brand">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 w-full min-h-[44px] rounded-xl border border-brand-muted/80 px-4 py-3 text-base text-slate-800 outline-none ring-brand/30 transition focus:border-brand focus:ring-2"
                    autoComplete="email"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-brand">Phone (optional)</span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-2 w-full min-h-[44px] rounded-xl border border-brand-muted/80 px-4 py-3 text-base text-slate-800 outline-none ring-brand/30 transition focus:border-brand focus:ring-2"
                    autoComplete="tel"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-medium text-brand">Appointment type</span>
                  <select
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    className="mt-2 w-full min-h-[44px] rounded-xl border border-brand-muted/80 bg-white px-4 py-3 text-base text-slate-800 outline-none ring-brand/30 transition focus:border-brand focus:ring-2"
                  >
                    <option value="booking">Book an appointment</option>
                    <option value="general">General question</option>
                    <option value="physio">Physiotherapy</option>
                    <option value="nutrition">Nutrition</option>
                    <option value="yoga">Yoga / movement</option>
                    <option value="other">Something else</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-medium text-brand">Notes for your visit</span>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="mt-2 w-full min-h-[8rem] resize-y rounded-xl border border-brand-muted/80 px-4 py-3 text-base text-slate-800 outline-none ring-brand/30 transition focus:border-brand focus:ring-2"
                    placeholder="Goals, pain areas, preferred days or times…"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-brand py-4 text-base font-semibold text-white shadow-lg transition hover:bg-brand-light sm:w-auto sm:px-12"
              >
                Submit appointment request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
