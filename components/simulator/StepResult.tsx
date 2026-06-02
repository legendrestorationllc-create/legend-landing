'use client'

import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { sendLead } from '@/lib/webhook'
import { toast } from 'sonner'
import { useT } from '@/providers/LanguageProvider'
import type { SimState } from '@/types/simulator'

interface Props {
  state: SimState
  setResult: (r: SimState['result']) => void
}

const CONFETTI_COLORS = ['#C9A84C', '#E8401C', '#ffffff', '#1B2A6B', '#059669']

function randBetween(min: number, max: number) { return Math.floor(Math.random() * (max - min + 1)) + min }

export function StepResult({ state, setResult }: Props) {
  const { t, lang } = useT()
  const r = t.stepResult
  const probability = state.roof === 'yes' ? '97%' : '93%'
  const resultType = 'high'
  const firstName = state.name.trim().split(' ')[0] || 'Amigo'
  const [social, setSocial] = useState(0)
  const [spots, setSpots] = useState(7)

  useEffect(() => {
    setSocial(randBetween(12, 31))
  }, [])

  useEffect(() => {
    setResult(resultType)
    sendLead({ ...state, result: resultType }).catch(() => {
      toast.error('No pudimos guardar tu resultado. Por favor llámanos directamente.')
    })
    confetti({ particleCount: 160, spread: 80, colors: CONFETTI_COLORS, origin: { y: 0.55 } })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const t1 = setTimeout(() => setSpots(s => Math.max(s - 1, 5)), 35000)
    const t2 = setTimeout(() => setSpots(s => Math.max(s - 1, 5)), 75000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingBottom: '0.5rem' }}>
      <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(201,168,76,.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,.4)', borderRadius: 999, padding: '0.4rem 1rem', fontSize: '0.6875rem', fontWeight: 700, fontFamily: 'var(--font-sora)', letterSpacing: '0.06em', marginBottom: '0.875rem', textTransform: 'uppercase' }}>
          {r.badge}
        </div>

        <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>🎉</div>

        <h3 style={{ fontFamily: 'var(--font-sora)', fontWeight: 800, fontSize: '1.375rem', color: 'var(--white)', lineHeight: 1.2, marginBottom: '0.5rem' }}>
          ¡{firstName}, {r.titleSuffix}
        </h3>

        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.3)', borderRadius: 'var(--radius)', padding: '0.875rem 2rem', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '3rem', fontFamily: 'var(--font-sora)', fontWeight: 900, color: '#C9A84C', lineHeight: 1 }}>🏆 {probability}</span>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,.7)', fontWeight: 500, marginTop: '0.25rem' }}>{r.probabilityLabel}</span>
        </div>

        {/* Spot counter */}
        <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,.8)', marginBottom: '0.5rem', lineHeight: 1.7, padding: '0 0.5rem' }}>
          ✅ <span style={{ color: '#059669', fontWeight: 700 }}>23</span>{' '}
          {lang === 'en' ? (
            <>homeowners in your zip code already have a new roof this year — only 🔴 <span style={{ fontFamily: 'var(--font-sora)', fontWeight: 700 }}>{spots}</span> free inspections left this week</>
          ) : (
            <>propietarios en tu código postal ya tienen techo nuevo este año — quedan 🔴 <span style={{ fontFamily: 'var(--font-sora)', fontWeight: 700 }}>{spots}</span> inspecciones gratuitas esta semana</>
          )}
        </div>

        {/* Social proof */}
        {social > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem', fontSize: '0.8125rem', color: 'rgba(255,255,255,.65)' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#2563EB', flexShrink: 0, display: 'inline-block', boxShadow: '0 0 6px #2563EB' }} />
            <span>{lang === 'en' ? `${social} people in your area are also verifying` : `${social} personas en tu área también están verificando`}</span>
          </div>
        )}
      </div>

      <div style={{ background: 'rgba(255,255,255,.06)', borderRadius: 'var(--radius)', padding: '1rem', border: '1px solid rgba(255,255,255,.1)' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem', fontFamily: 'var(--font-sora)' }}>
          {r.nextStepsTitle}
        </p>
        {r.nextSteps.map((step, i) => (
          <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: i < r.nextSteps.length - 1 ? '0.625rem' : 0 }}>
            <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--orange)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6875rem', fontWeight: 700, flexShrink: 0, fontFamily: 'var(--font-sora)', marginTop: 1 }}>{i + 1}</span>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,.85)', lineHeight: 1.5 }}>
              {step}
            </p>
          </div>
        ))}
      </div>

      <div style={{ background: 'linear-gradient(135deg, #E8401C 0%, #C9A84C 100%)', borderRadius: 'var(--radius)', padding: '0.625rem 0.875rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.875rem', color: 'white', lineHeight: 1.4, fontWeight: 700 }}>{r.contactMessage}</p>
      </div>

      <a
        href="https://wa.me/18633815735"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: '#059669',
          border: 'none',
          color: 'white',
          borderRadius: 'var(--radius)',
          padding: '1rem 1.25rem',
          fontSize: '1rem',
          fontWeight: 800,
          textAlign: 'center',
          textDecoration: 'none',
          fontFamily: 'var(--font-sora)',
          boxShadow: '0 6px 20px rgba(5,150,105,0.35)',
          transition: 'all 0.2s',
        }}
      >
        {r.startOver}
      </a>
    </div>
  )
}
