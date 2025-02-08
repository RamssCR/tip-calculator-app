import Calculator from "./Calculator"
import Summary from "./Summary"

export default function TipForm() {
    return (
        <form className="w-full max-w-[65em] bg-neutral-light grid grid-cols-1 gap-y-6 rounded-xl py-9 px-8 lg:grid-cols-2 lg:gap-x-8">
            <Calculator />
            <Summary />
        </form>
    )
}