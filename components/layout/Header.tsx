'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useT } from '@/providers/LanguageProvider'

const LOGO_SRC = '/logo.jpg'
const LOGO_FALLBACK = '/logo.svg'

export function Header() {
  const { t } = useT()
  const [scrolled, setScrolled] = useState(false)
  const [logoSrc, setLogoSrc] = useState(LOGO_SRC)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollToSim = () => {
    document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(17,29,74,0.97)' : 'var(--navy2)',
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid rgba(255,255,255,${scrolled ? '.08' : '0'})`,
      boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,.2)' : 'none',
      transition: 'all 0.3s',
    }}>
      <div className="container-lg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            background: 'white',
            borderRadius: 999,
            padding: '4px 10px',
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}>
            <Image
              src={logoSrc}
              alt="Legend Restoration Logo"
              height={44}
              width={160}
              style={{ objectFit: 'contain', width: 'auto', height: 44 }}
              sizes="160px"
              onError={() => setLogoSrc(LOGO_FALLBACK)}
            />
          </div>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a
            href={t.contact.phoneHref}
            style={{ color: 'rgba(255,255,255,.7)', fontSize: '0.875rem', textDecoration: 'none', fontFamily: 'var(--font-dm)' }}
            className="hidden md:flex items-center gap-1"
          >
            📞 {t.contact.phone}
          </a>
          <button className="btn-primary" onClick={scrollToSim} style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}>
            {t.header.cta}
          </button>
        </nav>
      </div>
    </header>
  )
}
