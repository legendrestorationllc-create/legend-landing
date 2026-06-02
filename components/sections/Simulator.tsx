'use client'

import { useSimulator } from '@/hooks/useSimulator'
import { SimulatorCard } from '@/components/simulator/SimulatorCard'
import { useT } from '@/providers/LanguageProvider'

export function Simulator() {
  const { t } = useT()
  const {
    state, goStep, toggleSign, setKnew,
    setField, setAddress, advanceAnalyze, setResult,
  } = useSimulator()

  return (
    <section style={{ background: 'var(--off)', padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, var(--orange) 0%, var(--navy3) 100%)' }} />

      <div className="container-lg" style={{ maxWidth: 780 }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="badge badge-orange" style={{ marginBottom: '1rem' }}>{t.simulator.badge}</div>
          <h2 className="section-title" style={{ marginBottom: '0.875rem' }}>
            {t.simulator.title}<br />
            <span style={{ color: 'var(--orange)' }}>{t.simulator.titleHighlight}</span>
          </h2>
          <p className="section-sub">{t.simulator.sub}</p>
        </div>

        <SimulatorCard
          state={state}
          toggleSign={toggleSign}
          setKnew={setKnew}
          setField={setField}
          setAddress={setAddress}
          goStep={goStep}
          advanceAnalyze={advanceAnalyze}
          setResult={setResult}
        />
      </div>
    </section>
  )
}
