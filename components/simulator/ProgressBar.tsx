'use client'

import type { SimStep } from '@/types/simulator'
import { useT } from '@/providers/LanguageProvider'

const STEPS: SimStep[] = ['q1', 'q2', 'address', 'lead']

interface Props { current: SimStep }

export function ProgressBar({ current }: Props) {
  const { t } = useT()
  const labels = t.progressBar.labels
  const idx = STEPS.indexOf(current)

  return (
    <div style={{ padding: '0 1.5rem 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: '0.5rem' }}>
        {STEPS.map((s, i) => {
          const done = i < idx
          const active = i === idx
          return (
            <div key={s} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                {i > 0 && <div style={{ flex: 1, height: 3, background: done || active ? 'var(--orange)' : 'rgba(255,255,255,.2)', transition: 'background 0.4s' }} />}
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: done ? 'var(--orange)' : active ? 'var(--white)' : 'rgba(255,255,255,.15)', border: active ? '2px solid var(--orange)' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.3s', fontSize: '0.75rem', fontWeight: 700, color: done ? 'white' : active ? 'var(--navy)' : 'rgba(255,255,255,.4)', fontFamily: 'var(--font-sora)' }}>
                  {done ? '✓' : i + 1}
                </div>
                {i < STEPS.length - 1 && <div style={{ flex: 1, height: 3, background: done ? 'var(--orange)' : 'rgba(255,255,255,.2)', transition: 'background 0.4s' }} />}
              </div>
              <span style={{ fontSize: '0.625rem', marginTop: '0.25rem', color: active ? 'var(--white)' : done ? 'rgba(255,255,255,.7)' : 'rgba(255,255,255,.3)', fontFamily: 'var(--font-sora)', fontWeight: active ? 700 : 400, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {labels[i]}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
