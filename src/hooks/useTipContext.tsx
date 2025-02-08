import { useContext } from 'react'
import { tipContext } from '@/context/tipContext'

export const useTipContext = () => {
    const context = useContext(tipContext)
    if (!context) {
        throw new Error('TipProvider must be inside a tipContext')
    }
    return context
}