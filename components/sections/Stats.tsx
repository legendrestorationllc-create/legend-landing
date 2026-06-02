'use client'

import { motion } from 'framer-motion'
import { useT } from '@/providers/LanguageProvider'

export function Stats() {
  const { t } = useT()

  return (
    <section style={{ background: 'linear-gradient(135deg, var(--navy2) 0%, var(--navy) 100%)', padding: 'clamp(3rem, 6vw, 4.5rem) 1.5rem' }}>
      <div className="container-lg">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '2rem', textAlign: 'center' }}>
          {t.stats.items.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
              <div style={{ fontFamily: 'var(--font-sora)', fontWeight: 900, fontSize: 'clamp(2.25rem, 5vw, 3rem)', color: 'var(--orange)', lineHeight: 1, marginBottom: '0.5rem' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,.7)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
