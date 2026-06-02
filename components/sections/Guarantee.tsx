'use client'

import { useT } from '@/providers/LanguageProvider'

export function Guarantee() {
  const { t } = useT()
  const g = t.guarantee

  return (
    <section style={{ background: 'var(--white)', padding: '2.5rem 1.5rem' }}>
      <div className="container-lg" style={{ maxWidth: 720, textAlign: 'center' }}>
        <div style={{
          background: 'linear-gradient(135deg, var(--navy2) 0%, var(--navy3) 100%)',
          borderRadius: 'var(--radius-xl)', padding: '2.5rem 2rem',
          boxShadow: 'var(--shadow-lg)', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-40%', right: '-10%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(5,150,105,.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🛡️</div>
          <h3 style={{ fontFamily: 'var(--font-sora)', fontWeight: 900, fontSize: 'clamp(1.25rem, 3vw, 1.625rem)', color: 'white', marginBottom: '1rem' }}>
            {g.title}
          </h3>
          <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,.85)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>
            {g.text}
          </p>
        </div>
      </div>
    </section>
  )
}
