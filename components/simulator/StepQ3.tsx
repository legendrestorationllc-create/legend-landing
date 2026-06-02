'use client'

import { useState } from 'react'
import { MicroConfirm } from './MicroConfirm'
import { Q3_OPTIONS, MICRO_CONFIRM_Q3 } from '@/lib/constants'
import type { SimState, RoofOption } from '@/types/simulator'

interface Props {
  state: SimState
  setRoof: (value: RoofOption) => void
  goNext: () => void
}

export function StepQ3({ state, setRoof, goNext }: Props) {
  const [confirm, setConfirm] = useState<string | null>(null)
  const [advancing, setAdvancing] = useState(false)

  const handleSelect = (value: RoofOption) => {
    if (advancing) return
    setRoof(value)
    setConfirm(MICRO_CONFIRM_Q3[value])
    setAdvancing(true)
    setTimeout(() => {
      goNext()
    }, 900)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem', fontFamily: 'var(--font-sora)' }}>
          PREGUNTA 3 DE 3
        </p>
        <h3 style={{ fontFamily: 'var(--font-sora)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--navy2)', lineHeight: 1.3 }}>
          ¿Tu techo tiene más de 15 años?
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        {Q3_OPTIONS.map((opt) => {
          const selected = state.roof === opt.value
          return (
            <button
              key={opt.value}
              className={`step-option${selected ? ' selected' : ''}`}
              onClick={() => handleSelect(opt.value)}
              type="button"
              disabled={advancing && !selected}
            >
              <span className="emoji">{opt.emoji}</span>
              <span style={{ flex: 1, fontWeight: selected ? 600 : 400 }}>{opt.label}</span>
              {selected && <span style={{ color: 'var(--navy)', fontSize: '1.1rem' }}>✓</span>}
            </button>
          )
        })}
      </div>

      <MicroConfirm message={confirm} />
    </div>
  )
}
