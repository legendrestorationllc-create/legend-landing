'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useT } from '@/providers/LanguageProvider'

const NAMES = ['Carlos M.', 'Ana G.', 'Roberto S.', 'María L.', 'José R.', 'Carmen T.', 'Luis H.', 'Diana P.', 'Miguel R.', 'Sofia V.']
const CITIES = ['Hartford', 'Bridgeport', 'New Haven', 'Stamford', 'Waterbury', 'Norwalk', 'Danbury', 'Greenwich']

function rand<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)] }
function randN(min: number, max: number) { return Math.floor(Math.random() * (max - min + 1)) + min }

export function LiveFeed() {
  const { t } = useT()
  const [notification, setNotification] = useState<{ id: number; text: string } | null>(null)
  const [counter, setCounter] = useState(0)

  const show = useCallback(() => {
    const msg = rand(t.liveFeed.messages)
    const text = msg(rand(NAMES), rand(CITIES), randN(2, 18))
    setCounter(c => c + 1)
    setNotification(prev => ({ id: (prev?.id ?? 0) + 1, text }))
    setTimeout(() => setNotification(null), 5000)
  }, [t])

  useEffect(() => {
    const first = setTimeout(show, 4000)
    return () => clearTimeout(first)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (notification === null) {
      const delay = randN(15000, 20000)
      const timer = setTimeout(show, delay)
      return () => clearTimeout(timer)
    }
  }, [notification, show])

  return (
    <div style={{ position: 'fixed', bottom: 80, left: 16, zIndex: 200, maxWidth: 300 }}>
      <AnimatePresence>
        {notification && (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: -60, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            style={{
              background: 'white',
              borderRadius: 'var(--radius)',
              boxShadow: '0 4px 20px rgba(0,0,0,.15)',
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              border: '1px solid var(--border)',
            }}
          >
            <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>✅</span>
            <p style={{ fontSize: '0.8125rem', color: 'var(--navy2)', lineHeight: 1.4, fontFamily: 'var(--font-dm)' }}>
              {notification.text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
