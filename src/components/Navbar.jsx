function IconHome({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  )
}

function IconUsers({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  )
}

function IconInfo({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
  )
}

function IconEnvelope({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  )
}

const navLinkClass =
  'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-brand transition-colors hover:bg-brand-muted/80 hover:text-brand'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-muted bg-white shadow-sm">
      <div className="flex h-[72px] w-full items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <a href="#top" className="flex shrink-0 items-center py-2">
          <img
            src="/images/curetribelogofull.png"
            alt="Cure Tribe — Move Better Feel Better"
            className="h-12 w-auto max-w-[220px] object-contain object-left sm:h-14"
            width={220}
            height={56}
          />
        </a>

        <nav className="ml-auto hidden items-center justify-end gap-1 md:flex" aria-label="Primary">
          <a href="#top" className={navLinkClass}>
            <IconHome className="h-5 w-5 shrink-0 text-brand" />
            Home
          </a>
          <a href="#services" className={navLinkClass}>
            <IconUsers className="h-5 w-5 shrink-0 text-brand" />
            Services
          </a>
          <a href="#about" className={navLinkClass}>
            <IconInfo className="h-5 w-5 shrink-0 text-brand" />
            About
          </a>
          <a href="#contact" className={navLinkClass}>
            <IconEnvelope className="h-5 w-5 shrink-0 text-brand" />
            Contact
          </a>
        </nav>
      </div>

      <nav
        className="flex w-full border-t border-brand-muted/60 bg-brand-muted/25 px-3 py-2 md:hidden"
        aria-label="Mobile"
      >
        <div className="ml-auto flex w-full max-w-full flex-wrap justify-end gap-1">
          <a href="#top" className={navLinkClass}>
            <IconHome className="h-4 w-4 text-brand" />
            Home
          </a>
          <a href="#services" className={navLinkClass}>
            <IconUsers className="h-4 w-4 text-brand" />
            Services
          </a>
          <a href="#about" className={navLinkClass}>
            <IconInfo className="h-4 w-4 text-brand" />
            About
          </a>
          <a href="#contact" className={navLinkClass}>
            <IconEnvelope className="h-4 w-4 text-brand" />
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
