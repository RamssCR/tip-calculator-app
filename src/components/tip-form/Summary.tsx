import { useTipContext } from "@/hooks/useTipContext"
import { currencyFormat } from "@/utils/currencyFormat"
import Button from "../UI/Button"
import SummaryItem from "./SummaryItem"

export default function Summary() {
    const { calculator: { 
        tipAmount, 
        totalPerPerson 
    }, reset } = useTipContext()

    return (
        <article className="w-full flex flex-col justify-between bg-neutral-primary-dark rounded-md py-5 px-6 lg:py-9 lg:px-10">
            <section className="w-full flex flex-col gap-4 lg:gap-7">
                <SummaryItem title="Tip Amount" value={currencyFormat(tipAmount)} />
                <SummaryItem title="Total" value={currencyFormat(totalPerPerson)} />
            </section>
            <Button variant="secondary" className="mt-10 lg:mt-0" onClick={(e) => {
                e.preventDefault()
                reset()
            }}>
                <span className="block w-full font-semibold text-center text-lg">RESET</span>
            </Button>
        </article>
    )
}