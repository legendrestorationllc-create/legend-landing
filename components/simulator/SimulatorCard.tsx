'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ProgressBar } from './ProgressBar'
import { StepQ1 } from './StepQ1'
import { StepQ2 } from './StepQ2'
import { StepAddress } from './StepAddress'
import { StepLead } from './StepLead'
import { StepAnalyzing } from './StepAnalyzing'
import { StepResult } from './StepResult'
import { useT } from '@/providers/LanguageProvider'
import type { SimState } from '@/types/simulator'

interface Props {
  state: SimState
  toggleSign: (id: string) => void
  setKnew: (v: SimState['knew']) => void
  setField: (f: 'name' | 'phone', v: string) => void
  setAddress: (a: string, lat: number, lng: number) => void
  goStep: (s: SimState['step']) => void
  advanceAnalyze: () => void
  setResult: (r: SimState['result']) => void
}

const isNavyBg = (step: SimState['step']) => step === 'analyzing' || step === 'result'
const isGreenBg = (_step: SimState['step']) => false
const PROGRESS_STEPS: SimState['step'][] = ['q1', 'q2', 'address', 'lead']

export function SimulatorCard({
  state, toggleSign, setKnew,
  setField, setAddress, goStep, advanceAnalyze, setResult,
}: Props) {
  const { t } = useT()
  const darkBg = isNavyBg(state.step)
  const greenBg = isGreenBg(state.step)
  const showProgress = PROGRESS_STEPS.includes(state.step)

  const bodyBg = darkBg ? 'var(--navy2)' : 'var(--white)'

  return (
    <div
      id="simulador"
      style={{
        background: darkBg ? 'var(--navy2)' : 'var(--white)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden',
        transition: 'background 0.4s',
        maxWidth: 520,
        width: '100%',
        margin: '0 auto',
      }}
    >
      <div style={{ background: 'linear-gradient(135deg, var(--navy2) 0%, var(--navy) 100%)', padding: '1.25rem 1.5rem 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.875rem' }}>
          <span style={{ fontSize: '1.1rem' }}>🏠</span>
          <span style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: '0.875rem', color: 'rgba(255,255,255,.9)' }}>
            {t.simulator.headerLabel}
          </span>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.375rem', background: 'rgba(5,150,105,.2)', borderRadius: 999, padding: '0.25rem 0.625rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'block' }} />
            <span style={{ fontSize: '0.6875rem', color: 'var(--green)', fontWeight: 600, fontFamily: 'var(--font-sora)' }}>{t.simulator.live}</span>
          </div>
        </div>
        {showProgress && <ProgressBar current={state.step} />}
      </div>

      <div style={{ padding: '1.5rem', background: bodyBg, minHeight: 320 }}>
        <AnimatePresence mode="wait">
          <motion.div key={state.step} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }}>
            {state.step === 'q1' && <StepQ1 state={state} toggleSign={toggleSign} goNext={() => goStep('q2')} />}
            {state.step === 'q2' && <StepQ2 state={state} setKnew={setKnew} goNext={() => goStep('address')} />}
            {state.step === 'address' && <StepAddress state={state} setAddress={setAddress} goNext={() => goStep('lead')} />}
            {state.step === 'lead' && <StepLead state={state} setField={setField} goNext={() => goStep('analyzing')} />}
            {state.step === 'analyzing' && <StepAnalyzing state={state} advanceAnalyze={advanceAnalyze} goNext={() => goStep('result')} />}
            {state.step === 'result' && <StepResult state={state} setResult={setResult} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
