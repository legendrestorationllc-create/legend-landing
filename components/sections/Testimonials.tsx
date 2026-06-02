'use client'

import { motion } from 'framer-motion'
import { useT } from '@/providers/LanguageProvider'

export function Testimonials() {
  const { t } = useT()
  const T = t.testimonials

  return (
    <section style={{ background: 'var(--white)', padding: 'clamp(3.5rem, 7vw, 5.5rem) 1.5rem' }}>
      <div className="container-lg">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge badge-orange" style={{ marginBottom: '1rem' }}>{T.badge}</div>
          <h2 className="section-title" style={{ marginBottom: '0.875rem' }}>
            {T.title}<br />
            <span style={{ color: 'var(--orange)' }}>{T.titleHighlight}</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
          {T.items.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si} style={{ color: '#f59e0b', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--navy2)', lineHeight: 1.7, marginBottom: '1.25rem', fontStyle: 'italic' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy3) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: '0.875rem', flexShrink: 0 }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--navy2)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{t.location}</div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <div className="badge badge-green" style={{ fontSize: '0.625rem' }}>{T.verified}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
