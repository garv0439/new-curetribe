import { useCallback, useEffect, useRef, useState } from 'react'
import { mainSlides } from '../main-slide'

const AUTO_MS = 6000

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reducedMotion = useRef(false)
  const touchPauseRef = useRef(0)

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const goNext = useCallback(() => {
    setActive((i) => (i + 1) % mainSlides.length)
  }, [])

  const goPrev = useCallback(() => {
    setActive((i) => (i - 1 + mainSlides.length) % mainSlides.length)
  }, [])

  useEffect(() => {
    if (paused || reducedMotion.current) return
    const t = setInterval(goNext, AUTO_MS)
    return () => clearInterval(t)
  }, [paused, goNext, active])

  function handleTouchStart() {
    touchPauseRef.current += 1
    setPaused(true)
  }

  function handleTouchEnd() {
    const id = touchPauseRef.current
    window.setTimeout(() => {
      if (touchPauseRef.current === id) setPaused(false)
    }, 2000)
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-brand-muted/25"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Featured highlights"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(25,88,88,0.08),transparent)]" />

      <div className="relative mx-auto max-w-6xl py-8 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="relative min-h-[max(22rem,min(88svh,36rem))] sm:min-h-[460px] lg:min-h-[480px]">
          {mainSlides.map(({ id, Component }, i) => {
            const isActive = i === active
            return (
              <article
                key={id}
                aria-hidden={!isActive}
                className={`absolute inset-0 transition-all duration-700 ease-out motion-reduce:transition-none ${
                  isActive
                    ? 'z-10 translate-y-0 opacity-100'
                    : 'z-0 translate-y-6 opacity-0 pointer-events-none'
                }`}
              >
                <Component isActive={isActive} />
              </article>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col items-center gap-5 sm:mt-10 sm:flex-row sm:justify-center sm:gap-6">
          <div className="flex w-full max-w-full items-center justify-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-11 min-h-[44px] w-11 min-w-[44px] shrink-0 items-center justify-center rounded-full border border-brand-muted bg-white text-brand shadow-sm transition hover:border-brand/40 hover:bg-brand-muted/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              aria-label="Previous slide"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div
              className="flex max-w-[min(100%,18rem)] flex-1 snap-x snap-mandatory justify-center gap-0.5 overflow-x-auto overscroll-x-contain px-1 py-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:max-w-none sm:flex-none sm:gap-2 sm:overflow-visible [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label="Slide indicators"
            >
              {mainSlides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setActive(i)}
                  className="flex h-11 min-h-[44px] min-w-[44px] shrink-0 snap-center items-center justify-center sm:h-auto sm:min-h-0 sm:min-w-0 sm:px-1"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      i === active ? 'h-2.5 w-8 bg-brand' : 'h-2.5 w-2.5 bg-brand-muted sm:hover:bg-brand-muted/80'
                    }`}
                    aria-hidden
                  />
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="flex h-11 min-h-[44px] w-11 min-w-[44px] shrink-0 items-center justify-center rounded-full border border-brand-muted bg-white text-brand shadow-sm transition hover:border-brand/40 hover:bg-brand-muted/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
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
