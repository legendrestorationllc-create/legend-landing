'use client'

import { useState, useEffect } from 'react'
import { MicroConfirm } from './MicroConfirm'
import { useT } from '@/providers/LanguageProvider'
import type { SimState } from '@/types/simulator'

interface Props {
  state: SimState
  toggleSign: (id: string) => void
  goNext: () => void
}

export function StepQ1({ state, toggleSign, goNext }: Props) {
  const { t } = useT()
  const q = t.stepQ1
  const [confirm, setConfirm] = useState<string | null>(null)

  useEffect(() => {
    setConfirm(state.signs.length > 0 ? q.confirm : null)
  }, [state.signs, q.confirm])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
      <div>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem', fontFamily: 'var(--font-sora)' }}>
          {q.label}
        </p>
        <h3 style={{ fontFamily: 'var(--font-sora)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--navy2)', lineHeight: 1.3, marginBottom: '0.375rem' }}>
          {q.title}
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>{q.sub}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        {q.signOptions.map((opt) => {
          const selected = state.signs.includes(opt.id)
          return (
            <button key={opt.id} className={`step-option${selected ? ' selected' : ''}`} onClick={() => toggleSign(opt.id)} type="button">
              <span className="emoji">{opt.emoji}</span>
              <span style={{ flex: 1, fontWeight: selected ? 600 : 400 }}>{opt.label}</span>
              <span style={{ width: 20, height: 20, borderRadius: 4, border: `2px solid ${selected ? 'var(--navy)' : 'var(--border)'}`, background: selected ? 'var(--navy)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.7rem', color: 'white', transition: 'all 0.15s' }}>
                {selected && '✓'}
              </span>
            </button>
          )
        })}
      </div>

      <MicroConfirm message={confirm} />

      <button className="btn-primary" onClick={goNext} disabled={state.signs.length === 0} style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', position: 'relative', zIndex: 2 }}>
        {q.continue}
      </button>
    </div>
  )
}
