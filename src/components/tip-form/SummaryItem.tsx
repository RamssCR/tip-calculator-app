interface SummaryItemProps {
    title: string
    value: string
}

export default function SummaryItem({ title, value }: SummaryItemProps) {
    return (
        <article className="w-full flex items-center justify-between">
            <div className="flex flex-col font-semibold">
                <h3 className="text-neutral-light text-base">{title}</h3>
                <p className="text-neutral-primary-grayish">/ person</p>
            </div>
            <h2 className="text-3xl font-bold text-primary-default lg:text-4xl">${value}</h2>
        </article>
    )
}