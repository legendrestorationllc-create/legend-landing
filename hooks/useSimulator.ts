'use client'

import { useReducer } from 'react'
import type { SimState, SimAction, SimStep } from '@/types/simulator'

const initialState: SimState = {
  step: 'q1',
  signs: [],
  knew: null,
  roof: null,
  name: '',
  phone: '',
  address: '',
  lat: null,
  lng: null,
  analyzeStep: 0,
  result: null,
}

function simReducer(state: SimState, action: SimAction): SimState {
  switch (action.type) {
    case 'TOGGLE_SIGN': {
      const already = state.signs.includes(action.id)
      return {
        ...state,
        signs: already ? state.signs.filter((s) => s !== action.id) : [...state.signs, action.id],
      }
    }
    case 'SET_KNEW':
      return { ...state, knew: action.value }
    case 'SET_ROOF':
      return { ...state, roof: action.value }
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value }
    case 'SET_ADDRESS':
      return { ...state, address: action.address, lat: action.lat, lng: action.lng }
    case 'GO_STEP':
      return { ...state, step: action.step }
    case 'ADVANCE_ANALYZE':
      return { ...state, analyzeStep: state.analyzeStep + 1 }
    case 'SET_RESULT':
      return { ...state, result: action.result }
    default:
      return state
  }
}

export function useSimulator() {
  const [state, dispatch] = useReducer(simReducer, initialState)

  const goStep = (step: SimStep) => dispatch({ type: 'GO_STEP', step })
  const toggleSign = (id: string) => dispatch({ type: 'TOGGLE_SIGN', id })
  const setKnew = (value: SimState['knew']) => {
    if (value) dispatch({ type: 'SET_KNEW', value })
  }
  const setRoof = (value: SimState['roof']) => {
    if (value) dispatch({ type: 'SET_ROOF', value })
  }
  const setField = (field: 'name' | 'phone', value: string) =>
    dispatch({ type: 'SET_FIELD', field, value })
  const setAddress = (address: string, lat: number, lng: number) =>
    dispatch({ type: 'SET_ADDRESS', address, lat, lng })
  const advanceAnalyze = () => dispatch({ type: 'ADVANCE_ANALYZE' })
  const setResult = (result: SimState['result']) => {
    if (result) dispatch({ type: 'SET_RESULT', result })
  }

  return { state, goStep, toggleSign, setKnew, setRoof, setField, setAddress, advanceAnalyze, setResult }
}
