import { ReactNode } from "react"
import { classMerger } from "@/utils/classMerger"

interface LabelProps {
    readonly id?: string
    label?: ReactNode
    children?: ReactNode
    className?: string
}

export default function Label({ id, label, children, className }: LabelProps) {
    return (
        <label 
            htmlFor={id} 
            className={classMerger(
                'text-neutral-primary-dark-grayish font-semibold', 
                className
            )}>
            {label ?? children}
        </label>
    )
}