'use client'

import { motion } from 'framer-motion'
import { useT } from '@/providers/LanguageProvider'

export function HowItWorks() {
  const { t } = useT()
  const hw = t.howItWorks

  return (
    <section style={{ background: 'var(--white)', padding: 'clamp(3.5rem, 7vw, 5.5rem) 1.5rem' }}>
      <div className="container-lg">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge badge-navy" style={{ marginBottom: '1rem' }}>{hw.badge}</div>
          <h2 className="section-title" style={{ marginBottom: '0.875rem' }}>{hw.title}</h2>
          <p className="section-sub" style={{ maxWidth: 540, margin: '0 auto' }}>{hw.sub}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem', position: 'relative' }}>
          {hw.steps.map((item, i) => (
            <motion.div key={item.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.55 }} style={{ position: 'relative', textAlign: 'center' }}>
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy3) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', margin: '0 auto 1.25rem', boxShadow: '0 8px 24px rgba(27,42,107,.25)', position: 'relative', zIndex: 2 }}>
                {item.icon}
                <span style={{ position: 'absolute', top: -6, right: -6, width: 22, height: 22, borderRadius: '50%', background: 'var(--orange)', color: 'white', fontSize: '0.7rem', fontWeight: 800, fontFamily: 'var(--font-sora)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white' }}>
                  {item.step}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--navy2)', marginBottom: '0.625rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.65, maxWidth: 260, margin: '0 auto' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
