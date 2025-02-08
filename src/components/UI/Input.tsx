import { InputHTMLAttributes, forwardRef } from 'react'
import { classMerger } from '@/utils/classMerger'
import InputError from '@/components/tip-form/InputError'
import Image from './Image'
import Label from './Label'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    readonly id?: string
    label?: string
    error?: string
    icon?: string
    alt?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type = 'text', id, label, className, error, icon, alt, ...props }, ref) => {
        return (
            <article className="w-full flex flex-col gap-2 rounded-md">
                <section className="flex items-center justify-between w-full">
                    {label && <Label id={id}>{label}</Label>}
                    {error && <InputError message={error} />}
                </section>
                <div className="w-full flex items-center gap-3 bg-neutral-primary-very-light-grayish py-1 px-4 rounded-md">
                    {icon && <Image src={icon} alt={alt} />}
                    <input 
                        type={type}
                        ref={ref}
                        id={id}
                        className={classMerger(
                            'w-full py-2 px-4 text-neutral-primary-dark font-bold rounded-md text-xl text-right outline-none',
                            'disabled:opacity-50 disabled:cursor-not-allowed',
                            className
                        )}
                        {...props}
                    />
                </div>
            </article>
        )
    }
)