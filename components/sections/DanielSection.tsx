'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useT } from '@/providers/LanguageProvider'

export function DanielSection() {
  const { t } = useT()
  const d = t.daniel

  return (
    <section style={{ background: 'var(--off)', padding: 'clamp(3.5rem, 7vw, 5rem) 1.5rem' }}>
      <div className="container-lg" style={{ maxWidth: 820 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '3rem', alignItems: 'center' }}
        >
          <div style={{ position: 'relative', width: '100%', height: 280, borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <Image
              src="/daniel.jpg"
              alt="Daniel - Founder of Legend Restoration"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          <div>
            <div className="badge badge-navy" style={{ marginBottom: '1rem' }}>🏠 Fundador</div>
            <h2 style={{ fontFamily: 'var(--font-sora)', fontWeight: 800, fontSize: 'clamp(1.375rem, 3vw, 1.875rem)', color: 'var(--navy2)', lineHeight: 1.25, marginBottom: '1.25rem' }}>
              {d.title}
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--muted)', lineHeight: 1.75 }}>
              {d.text}
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              {['✅ CT Licensed', '⭐ 4.9/5 Google', '🏆 500+ Roofs'].map(item => (
                <span key={item} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 999, padding: '0.375rem 0.875rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--navy2)', fontFamily: 'var(--font-sora)' }}>{item}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
