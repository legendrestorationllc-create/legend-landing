'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useT } from '@/providers/LanguageProvider'

export function FAQ() {
  const { t } = useT()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section style={{ background: 'var(--off)', padding: 'clamp(3.5rem, 7vw, 5.5rem) 1.5rem' }}>
      <div className="container-lg" style={{ maxWidth: 760 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge badge-navy" style={{ marginBottom: '1rem' }}>{t.faq.badge}</div>
          <h2 className="section-title">{t.faq.title}</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {t.faq.items.map((faq, i) => (
            <div key={i} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', border: `1px solid ${open === i ? 'var(--navy)' : 'var(--border)'}`, overflow: 'hidden', boxShadow: open === i ? 'var(--shadow)' : 'var(--shadow-sm)', transition: 'border-color 0.2s, box-shadow 0.2s' }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', padding: '1.25rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                <span style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--navy2)', lineHeight: 1.4 }}>{faq.q}</span>
                <span style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, background: open === i ? 'var(--navy)' : 'var(--light)', color: open === i ? 'white' : 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 700, transition: 'all 0.2s', transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }} className="accordion-content">
                    <div style={{ padding: '0 1.5rem 1.25rem', fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.7 }}>{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
