'use client'

import { motion } from 'framer-motion'
import { useT } from '@/providers/LanguageProvider'

export function WhyLegend() {
  const { t } = useT()
  const w = t.whyLegend

  return (
    <section style={{ background: 'var(--off)', padding: 'clamp(3.5rem, 7vw, 5.5rem) 1.5rem' }}>
      <div className="container-lg">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <div className="badge badge-navy" style={{ marginBottom: '1rem' }}>{w.badge}</div>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              {w.title}<span style={{ color: 'var(--orange)' }}>{w.titleHighlight}</span>
            </h2>
            <p className="section-sub" style={{ marginBottom: '2rem' }}>{w.sub}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {w.features.map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.45 }} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', padding: '1rem', background: 'var(--white)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--navy2)', marginBottom: '0.25rem' }}>{f.title}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.5 }}>{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ background: 'linear-gradient(160deg, var(--navy2) 0%, var(--navy3) 100%)', borderRadius: 'var(--radius-xl)', padding: '2.5rem', boxShadow: 'var(--shadow-lg)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-30%', right: '-20%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,64,28,.2) 0%, transparent 70%)' }} />

              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🏠</div>
                <h3 style={{ fontFamily: 'var(--font-sora)', fontWeight: 800, fontSize: '1.5rem', color: 'white', marginBottom: '0.5rem' }}>
                  {w.roofTitle.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,.65)', lineHeight: 1.6 }}>{w.roofSub}</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,.08)', borderRadius: 'var(--radius)', padding: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-sora)', fontWeight: 900, fontSize: '3rem', color: 'var(--orange)', textAlign: 'center', lineHeight: 1 }}>{w.savingsAmount}</div>
                <div style={{ textAlign: 'center', color: 'rgba(255,255,255,.6)', fontSize: '0.875rem', marginTop: '0.375rem' }}>{w.savingsSub}</div>
              </div>

              {w.rows.map((row) => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.625rem 0', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
                  <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,.6)' }}>{row.label}</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'white', fontFamily: 'var(--font-sora)' }}>{row.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
