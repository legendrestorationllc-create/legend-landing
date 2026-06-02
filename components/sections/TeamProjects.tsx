'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useT } from '@/providers/LanguageProvider'

function CyclePhoto({ photos, alt, caption, icon, badge }: {
  photos: string[]
  alt: string
  caption: string
  icon: string
  badge?: React.ReactNode
}) {
  const [idx, setIdx] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const onEnter = () => {
    intervalRef.current = setInterval(() => {
      setIdx(i => (i + 1) % photos.length)
    }, 900)
  }

  const onLeave = () => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null }
    setIdx(0)
  }

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current) }, [])

  return (
    <div
      style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
        {photos.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={alt}
            fill
            style={{ objectFit: 'cover', transition: 'opacity 0.4s ease', opacity: i === idx ? 1 : 0 }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ))}
        {badge}
      </div>
      <div style={{ background: 'var(--navy2)', padding: '0.875rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1rem' }}>{icon}</span>
        <span style={{ fontFamily: 'var(--font-sora)', fontWeight: 600, fontSize: '0.875rem', color: 'white' }}>{caption}</span>
      </div>
    </div>
  )
}

export function TeamProjects() {
  const { t } = useT()
  const tp = t.teamProjects

  return (
    <section style={{ background: 'var(--white)', padding: 'clamp(2rem, 5vw, 4rem) 1.5rem' }}>
      <div className="container-lg">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: '2rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <CyclePhoto
              photos={['/worker1.jpg', '/worker2.jpg', '/worker3.jpg']}
              alt="Legend Restoration Team"
              caption={tp.teamCaption}
              icon="👷"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}>
            <CyclePhoto
              photos={['/project1.jpg', '/project2.jpg', '/project3.jpg']}
              alt="Roof Project"
              caption={tp.projectCaption}
              icon="🏠"
              badge={
                <div style={{ position: 'absolute', top: 12, left: 12, background: 'var(--green)', color: 'white', borderRadius: 999, padding: '0.3rem 0.75rem', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-sora)', zIndex: 1 }}>✓ {tp.projectTitle}</div>
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
