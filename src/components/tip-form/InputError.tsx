import { classMerger } from '@/utils/classMerger'

interface InputErrorProps {
    message: string
    className?: string
}

export default function InputError({ message, className }: InputErrorProps) {
    return (
        <p className={classMerger("text-red-500 font-semibold text-base", className)}>
            {message}
        </p>
    )
}