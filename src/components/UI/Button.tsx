import { classMerger } from '@/utils/classMerger'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outlined'
    selected?: boolean
}

export default function Button ({ children, className, disabled, selected = false, variant = 'primary', ...props }: ButtonProps) {
    const variantStyles = {
        primary: 'bg-neutral-primary-dark text-neutral-light',
        secondary: 'bg-primary-default text-neutral-primary-dark',
        outlined: 'bg-transparent border-2 border-neutral-primary-dark text-neutral-primary-dark hover:bg-neutral-primary-dark hover:text-primary-default'
    }

    return (
        <button
            className={classMerger(
                'flex items-center text-center gap-3 py-3 w-full rounded-md transition-all duration-200 hover:cursor-pointer hover:brightness-110',
                variantStyles[variant],
                selected && variantStyles.secondary,
                disabled && 'bg-gray-300 text-white',
                className
            )}
            disabled={disabled}
            aria-disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}