'use client'

import { useState, useEffect } from 'react'
import { SatelliteMap } from '@/components/map/SatelliteMap'
import { useT } from '@/providers/LanguageProvider'
import type { SimState } from '@/types/simulator'

interface Props {
  state: SimState
  setAddress: (address: string, lat: number, lng: number) => void
  goNext: () => void
}

export function StepAddress({ state, setAddress, goNext }: Props) {
  const { t } = useT()
  const q = t.stepAddress
  const [addressInput, setAddressInput] = useState(state.address)

  useEffect(() => {
    const id = window.setTimeout(() => {
      const el = document.getElementById('simulador')
      if (!el) return
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }, 100)
    return () => window.clearTimeout(id)
  }, [])

  const handleAddressSelect = (address: string, lat: number, lng: number) => {
    setAddress(address, lat, lng)
    setAddressInput(address)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem', fontFamily: 'var(--font-sora)' }}>
          {q.label}
        </p>
        <h3 style={{ fontFamily: 'var(--font-sora)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--navy2)', lineHeight: 1.3 }}>
          {q.title}
        </h3>
      </div>

      <SatelliteMap
        onAddressSelect={handleAddressSelect}
        inputValue={addressInput}
        onInputChange={setAddressInput}
        placeholder={q.placeholder}
      />

      <button className="btn-primary" onClick={goNext} style={{ width: '100%', justifyContent: 'center', marginTop: '0.25rem' }}>
        {q.continue}
      </button>
    </div>
  )
}
