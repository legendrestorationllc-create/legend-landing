'use client'

import { useT } from '@/providers/LanguageProvider'

export function TrustBar() {
  const { t } = useT()

  return (
    <section style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', padding: '1.25rem 1.5rem' }}>
      <div className="container-lg">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(1.25rem, 4vw, 3rem)', alignItems: 'center' }}>
          {t.trustBar.items.map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexShrink: 0 }}>
              <span style={{ fontSize: '1.375rem' }}>{item.emoji}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--navy2)', lineHeight: 1.2 }}>{item.label}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
