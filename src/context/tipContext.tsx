import { createContext } from 'react'
import { Calculator } from '@/types/calculator'

type TipCalculatorContextType = {
    calculator: Calculator
    setBill: (value: number) => void
    setPercentage: (value: number) => void
    setPeopleAmount: (value: number) => void
    reset: () => void
}

export const tipContext = createContext<TipCalculatorContextType | null>(null)