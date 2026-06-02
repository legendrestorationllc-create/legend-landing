'use client'

import { motion } from 'framer-motion'
import { useT } from '@/providers/LanguageProvider'

export function FinalCTA() {
  const { t } = useT()
  const scrollToSim = () => {
    document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{ background: 'linear-gradient(160deg, var(--navy2) 0%, var(--navy3) 100%)', padding: 'clamp(3.5rem, 7vw, 5.5rem) 1.5rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,64,28,.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-lg" style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: 680 }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏠</div>
          <h2 style={{ fontFamily: 'var(--font-sora)', fontWeight: 900, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'white', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            {t.finalCta.title}
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,.7)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            {t.finalCta.sub}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
            <button className="btn-primary" onClick={scrollToSim} style={{ fontSize: '1.0625rem', padding: '1.125rem 2.25rem' }}>
              {t.finalCta.cta}
            </button>
            <a href={t.contact.phoneHref} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1.125rem 1.75rem', border: '2px solid rgba(255,255,255,.3)', borderRadius: 'var(--radius)', color: 'white', fontFamily: 'var(--font-sora)', fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none', transition: 'border-color 0.2s, background 0.2s' }}>
              📞 {t.finalCta.callNow}
            </a>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
            {t.finalCta.trustItems.map((item) => (
              <span key={item} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,.65)' }}>{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
