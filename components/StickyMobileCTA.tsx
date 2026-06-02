'use client'

import { useEffect, useState } from 'react'
import { useT } from '@/providers/LanguageProvider'

export function StickyMobileCTA() {
  const { t } = useT()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const target = document.getElementById('simulador')
    if (!target) return
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.05 }
    )
    obs.observe(target)
    return () => obs.disconnect()
  }, [])

  const scrollToSim = () => {
    document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <>
      <style>{`
        @media (min-width: 769px) { .sticky-mobile-cta { display: none !important; } }
      `}</style>
      <div
        className="sticky-mobile-cta"
        style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 300,
          padding: '0.875rem 1rem',
          background: 'var(--navy2)',
          borderTop: '2px solid var(--orange)',
          boxShadow: '0 -4px 20px rgba(0,0,0,.25)',
        }}
      >
        <button
          onClick={scrollToSim}
          style={{
            width: '100%', padding: '0.875rem',
            background: 'linear-gradient(135deg, var(--orange) 0%, #f5841c 100%)',
            color: 'white', border: 'none', borderRadius: 'var(--radius)',
            fontFamily: 'var(--font-sora)', fontWeight: 800, fontSize: '1rem',
            cursor: 'pointer', letterSpacing: '0.01em',
          }}
        >
          {t.stickyMobileCta.text}
        </button>
      </div>
    </>
  )
}
