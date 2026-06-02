export type SimStep = 'q1' | 'q2' | 'address' | 'lead' | 'analyzing' | 'result'

export type KnewOption = 'no' | 'heard' | 'yes'
export type RoofOption = 'yes' | 'no' | 'ns'
export type ResultType = 'high' | 'medium'

export interface SimState {
  step: SimStep
  signs: string[]
  knew: KnewOption | null
  roof: RoofOption | null
  name: string
  phone: string
  address: string
  lat: number | null
  lng: number | null
  analyzeStep: number
  result: ResultType | null
}

export type SimAction =
  | { type: 'TOGGLE_SIGN'; id: string }
  | { type: 'SET_KNEW'; value: KnewOption }
  | { type: 'SET_ROOF'; value: RoofOption }
  | { type: 'SET_FIELD'; field: 'name' | 'phone'; value: string }
  | { type: 'SET_ADDRESS'; address: string; lat: number; lng: number }
  | { type: 'GO_STEP'; step: SimStep }
  | { type: 'ADVANCE_ANALYZE' }
  | { type: 'SET_RESULT'; result: ResultType }

export interface SignOption {
  id: string
  emoji: string
  label: string
  exclusive?: boolean
}

export interface Q2Option {
  value: KnewOption
  emoji: string
  label: string
}

export interface Q3Option {
  value: RoofOption
  emoji: string
  label: string
}
