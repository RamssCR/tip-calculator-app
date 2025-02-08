import { ReactNode, useState } from 'react'
import { Calculator } from '@/types/calculator'
import { tipContext } from '@/context/tipContext'

/**
 * TipProvider component that provides the tip calculation context to its children.
 * It manages the state of the calculator and provides functions to update the bill amount,
 * tip percentage, number of people, and to reset the calculator.
 *
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child components that will have access to the tip context.
 *
 * @returns The provider component that wraps its children with the tip context.
 *
 * @example
 * // Wrap your application with the TipProvider to provide the context to all components
 * import TipProvider from '@/providers/TipProvider';
 * 
 * function App() {
 *   return (
 *     <TipProvider>
 *       <YourComponent />
 *     </TipProvider>
 *   );
 * }
 *
 * @example
 * // Access the context in a child component
 * import { useContext } from 'react';
 * import { tipContext } from '@/context/tipContext';
 * 
 * function YourComponent() {
 *   const { calculator, setBill, setPercentage, setPeopleAmount, reset } = useContext(tipContext);
 *   
 *   // Use the context values and functions as needed
 *   return (
 *     <div>
 *       <input type="number" onChange={(e) => setBill(Number(e.target.value))} />
 *       <input type="number" onChange={(e) => setPercentage(Number(e.target.value))} />
 *       <input type="number" onChange={(e) => setPeopleAmount(Number(e.target.value))} />
 *       <button onClick={reset}>Reset</button>
 *       <div>Tip Amount: {calculator.tipAmount}</div>
 *       <div>Total Per Person: {calculator.totalPerPerson}</div>
 *     </div>
 *   );
 * }
 */
export default function TipProvider({ children }: { children: ReactNode }) {
    const [calculator, setCalculator] = useState<Calculator>({
        billAmount: 0,
        tipPercentage: 0,
        numberPeople: 0,
        tipAmount: 0,
        totalPerPerson: 0
    })

    const calculate = (bill: number, tip: number, people: number) => {
        if (people === 0) return { tipAmount: 0, totalPerPerson: 0 }
        const tipAmount = (bill * (tip / 100)) / people
        const totalPerPerson = (bill + (bill * (tip / 100))) / people

        return { tipAmount, totalPerPerson }
    }

    const setBill = (value: number) => {
        setCalculator(prev => ({
            ...prev,
            billAmount: value,
            ...calculate(value, prev.tipPercentage, prev.numberPeople)
        }))
    }

    const setPercentage = (value: number) => {
        setCalculator(prev => ({
            ...prev,
            tipPercentage: value,
            ...calculate(prev.billAmount, value, prev.numberPeople)
        }))
    }

    const setPeopleAmount = (value: number) => {
        setCalculator(prev => ({
            ...prev,
            numberPeople: value,
            ...calculate(prev.billAmount, prev.tipPercentage, value)
        }))
    }

    const reset = () => {
        setCalculator({
            billAmount: 0,
            tipPercentage: 0,
            numberPeople: 0,
            tipAmount: 0,
            totalPerPerson: 0
        })
    }

    return (
        <tipContext.Provider value={{
            calculator,
            setBill,
            setPercentage,
            setPeopleAmount,
            reset
        }}>
            {children}
        </tipContext.Provider>
    )
}