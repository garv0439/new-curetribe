import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

function IconUsers({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
  )
}

function IconInfo({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
      />
    </svg>
  )
}

function IconEnvelope({ className }) {
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

function IconMenu({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}

function IconClose({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}

const navLinkClass =
  'flex min-h-[44px] items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-brand transition-colors hover:bg-brand-muted/80 hover:text-brand active:bg-brand-muted/60'

function navLinkActive({ isActive }) {
  return `${navLinkClass} ${isActive ? 'bg-brand-muted/60 text-brand' : ''}`
}

const mobilePanelLinkClass =
  'flex min-h-[52px] items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-brand transition-colors hover:bg-brand-muted/50 active:bg-brand-muted/70'

function mobileNavLinkActive({ isActive }) {
  return `${mobilePanelLinkClass} ${isActive ? 'bg-brand-muted/50 ring-1 ring-brand/20' : ''}`
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-muted bg-white/95 pt-[env(safe-area-inset-top)] shadow-sm backdrop-blur-sm supports-[backdrop-filter]:bg-white/90">
      <div className="relative z-[60] flex min-h-[52px] w-full items-center justify-between gap-3 px-[max(1rem,env(safe-area-inset-left))] py-2 pr-[max(1rem,env(safe-area-inset-right))] sm:min-h-[64px] sm:gap-6 sm:px-6 lg:min-h-[72px] lg:px-10">
        <Link to="/" className="flex min-h-[44px] min-w-0 shrink items-center py-1">
          <img
            src="/images/curetribelogofull.png"
            alt="Cure Tribe — Move Better Feel Better"
            className="h-10 w-auto max-w-[min(200px,calc(100vw-8rem))] object-contain object-left sm:h-14 sm:max-w-[220px]"
            width={220}
            height={56}
          />
        </Link>

        <nav className="ml-auto hidden items-center justify-end gap-1 md:flex" aria-label="Primary">
          <NavLink to="/services" className={navLinkActive}>
            <IconUsers className="h-5 w-5 shrink-0 text-brand" />
            Services
          </NavLink>
          <NavLink to="/about" className={navLinkActive}>
            <IconInfo className="h-5 w-5 shrink-0 text-brand" />
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkActive}>
            <IconEnvelope className="h-5 w-5 shrink-0 text-brand" />
            Contact
          </NavLink>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-muted/80 text-brand transition hover:bg-brand-muted/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[55] bg-slate-900/40 md:hidden"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <nav
            id="mobile-nav-panel"
            className="absolute left-0 right-0 top-full z-[56] flex max-h-[min(24rem,calc(100dvh-5rem))] flex-col overflow-y-auto border-b border-brand-muted bg-white py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-lg md:hidden"
            aria-label="Mobile navigation"
          >
            <NavLink to="/services" className={mobileNavLinkActive} onClick={() => setMenuOpen(false)}>
              <IconUsers className="h-6 w-6 shrink-0 text-brand" />
              Services
            </NavLink>
            <NavLink to="/about" className={mobileNavLinkActive} onClick={() => setMenuOpen(false)}>
              <IconInfo className="h-6 w-6 shrink-0 text-brand" />
              About
            </NavLink>
            <NavLink to="/contact" className={mobileNavLinkActive} onClick={() => setMenuOpen(false)}>
              <IconEnvelope className="h-6 w-6 shrink-0 text-brand" />
              Contact
            </NavLink>
          </nav>
        </>
      )}
    </header>
  )
}
