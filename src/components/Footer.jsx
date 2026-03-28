import { Link } from 'react-router-dom'

function IconMail({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  )
}

function IconPhone({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.608-1.288.422l-2.33-1.016a12.034 12.034 0 0 1-6.294-6.294l-1.016-2.33c-.186-.519-.046-1.006.422-1.288l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  )
}

/* Footer: light cyan #c5d7d7 (brand-muted), text #195858 (brand) */
const footerLink =
  'text-brand transition hover:underline hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

export default function Footer() {
  return (
    <footer className="w-full border-t border-brand/25 bg-brand-muted pb-[env(safe-area-inset-bottom)] text-brand">
      <div className="w-full px-[max(1rem,env(safe-area-inset-left))] py-12 pr-[max(1rem,env(safe-area-inset-right))] sm:px-8 sm:py-14 lg:px-12 xl:px-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <img
                src="/images/curetribelogofull.png"
                alt=""
                className="mb-4 h-12 w-auto max-w-[200px] object-contain object-left"
                width={200}
                height={48}
              />
            </Link>
            <p className="w-full font-serif text-sm leading-relaxed text-brand">
              MOVE BETTER FEEL BETTER — Expert physiotherapy, nutrition, and mental wellness support for a balanced body
              and mind.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand">Quick links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className={`${footerLink} inline-flex min-h-[44px] items-center py-1`}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className={`${footerLink} inline-flex min-h-[44px] items-center py-1`}>
                  About Cure Tribe
                </Link>
              </li>
              <li>
                <Link to="/#why" className={`${footerLink} inline-flex min-h-[44px] items-center py-1`}>
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`${footerLink} inline-flex min-h-[44px] items-center py-1`}>
                  Book appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand">Contact</h3>
            <ul className="space-y-3 text-sm text-brand">
              <li className="flex items-start gap-2">
                <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <a
                  href="mailto:hello@curetribe.com"
                  className="break-all text-brand underline-offset-2 hover:underline sm:break-normal"
                >
                  hello@curetribe.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>24/7 support — we’re here when you need us</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brand/20 py-6 text-center text-xs text-brand">
          © {new Date().getFullYear()} Cure Tribe. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
