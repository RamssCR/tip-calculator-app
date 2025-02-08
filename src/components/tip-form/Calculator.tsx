import { Input } from "@/components/UI/Input"
import { percentages } from '@/utils/constants'
import Button from "../UI/Button"
import billIcon from '@/assets/images/icon-dollar.svg'
import personIcon from '@/assets/images/icon-person.svg'
import { useTipContext } from "@/hooks/useTipContext"

export default function Calculator() {
    const {
        calculator: {tipPercentage, billAmount, numberPeople}, 
        setBill, 
        setPercentage, 
        setPeopleAmount
    } = useTipContext()

    return (
        <section className="w-full flex flex-col justify-between gap-8">
            <Input 
                type="number" 
                placeholder="0" 
                id="bill" 
                name="bill" 
                label="Bill" 
                min={0} 
                icon={billIcon} 
                alt="Bill"
                value={billAmount !== 0 ? billAmount : ''}
                onChange={(e) => setBill(Number(e.target.value))}
            />
            <section className="w-full flex flex-col items-start gap-3">
                <p className="text-neutral-primary-dark-grayish font-semibold">Select Tip %</p>
                <article className="w-full grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3">
                    {percentages.map((percentage, index) => (
                        <Button
                            key={index}
                            variant="primary"
                            selected={percentage === tipPercentage}
                            onClick={(e) => {
                                e.preventDefault()
                                setPercentage(percentage)
                            }}
                        >
                            <span className="block w-full text-center font-bold text-xl">{percentage}%</span>
                        </Button>
                    ))}
                    <Input 
                        type="number" 
                        placeholder="Custom" 
                        id="percentage" 
                        name="percentage" 
                        className="gap-0 text-center" 
                        onChange={(e) => setPercentage(Number(e.target.value))}
                    />
                </article>
            </section>
            <Input 
                type="number" 
                placeholder="0" 
                id="amount" 
                name="amount" 
                label="Number of People" 
                min={0} 
                icon={personIcon} 
                alt="Amount" 
                value={numberPeople !== 0 ? numberPeople : ''}
                onChange={(e) => setPeopleAmount(Number(e.target.value))}
            />
        </section>
    )
}