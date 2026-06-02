'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useT } from '@/providers/LanguageProvider'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

function randBetween(min: number, max: number) { return Math.floor(Math.random() * (max - min + 1)) + min }

export function Hero() {
  const { t } = useT()
  const [visitors, setVisitors] = useState(0)

  useEffect(() => {
    setVisitors(randBetween(8, 24))
    const interval = setInterval(() => setVisitors(randBetween(8, 24)), 45000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSim = () => {
    document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{
      background: 'linear-gradient(160deg, var(--navy2) 0%, var(--navy) 60%, var(--navy3) 100%)',
      padding: 'clamp(3rem, 8vw, 6rem) 1.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,64,28,.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,54,144,.4) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-lg">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', gap: '3rem', alignItems: 'center' }}>
          <motion.div {...fadeUp}>
            <div style={{ display: 'inline-block', background: 'rgba(232, 64, 28, 0.2)', backdropFilter: 'blur(8px)', border: 'none', color: '#FFFFFF', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.08em', padding: '0.375rem 0.875rem', borderRadius: 999, marginBottom: '2rem' }}>
              {t.hero.badge}
            </div>
            <h1 style={{ fontFamily: 'var(--font-sora)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: 'white', lineHeight: 1.15, marginBottom: '1.75rem' }}>
              {t.hero.h1}
              <span style={{ background: 'linear-gradient(135deg, var(--orange) 0%, #f5a623 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {t.hero.h1Highlight}
              </span>
            </h1>
            {/* Urgency badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(232,64,28,.18)', border: '1px solid rgba(232,64,28,.4)', borderRadius: 999, padding: '0.375rem 1rem', marginBottom: '1.75rem', fontSize: '0.8125rem', fontWeight: 700, color: '#ffa07a', fontFamily: 'var(--font-sora)' }}>
              {t.hero.urgency}
            </div>
            {/* Visitor counter */}
            {visitors > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 6px #4ade80' }} />
                <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,.65)', fontFamily: 'var(--font-dm)' }}>{t.hero.visitorText(visitors)}</span>
              </div>
            )}
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: 'rgba(255,255,255,.75)', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: 500 }}>
              {t.hero.sub}
              <strong style={{ color: 'white' }}>{t.hero.subStrong}</strong>
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginBottom: '2.5rem' }}>
              <button className="btn-primary" onClick={scrollToSim} style={{ fontSize: '1.0625rem', padding: '1rem 2rem' }}>
                {t.hero.cta}
              </button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
              {t.hero.trustItems.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'rgba(255,255,255,.7)', fontSize: '0.875rem' }}>
                  <span>✅</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
            <div style={{ background: 'rgba(255,255,255,.06)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--radius-xl)', padding: '2rem', boxShadow: '0 20px 60px rgba(0,0,0,.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.25rem' }}>💰</span>
                <span style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, color: 'white', fontSize: '0.9375rem' }}>{t.hero.savingsTitle}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                {t.hero.savingsRows.map((row, i) => (
                  <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,.08)', paddingBottom: '0.875rem' }}>
                    <span style={{ fontSize: i === 2 ? '0.9375rem' : '0.875rem', fontWeight: i === 2 ? 700 : 400, color: i === 1 ? '#C9A84C' : i === 2 ? '#059669' : 'rgba(255,255,255,.6)' }}>{row.label}</span>
                    <span style={{ fontFamily: 'var(--font-sora)', fontWeight: i === 1 ? 800 : i === 2 ? 900 : 700, fontSize: i === 2 ? '1.125rem' : '0.9375rem', color: i === 0 ? '#DC2626' : i === 1 ? '#FFFFFF' : '#00D084', background: i === 1 ? '#E8401C' : undefined, padding: i === 1 ? '2px 10px' : undefined, borderRadius: i === 1 ? 999 : undefined, textDecoration: i === 0 ? 'line-through' : 'none', textDecorationThickness: i === 0 ? '1px' : undefined }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ background: 'rgba(5,150,105,.15)', border: '1px solid rgba(5,150,105,.3)', borderRadius: 'var(--radius)', padding: '0.875rem', textAlign: 'center' }}>
                <p style={{ fontSize: '0.9375rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '0.375rem', textShadow: '0 0 24px rgba(201,168,76,0.8)' }}>{t.hero.roofsBadge}</p>
                <div style={{ fontFamily: 'var(--font-sora)', fontWeight: 900, fontSize: '1.75rem', color: '#00D084', textShadow: '0 0 24px rgba(201,168,76,0.8)' }}>{t.hero.roofsCount}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
