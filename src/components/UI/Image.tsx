import { classMerger } from '@/utils/classMerger'
import { ImgHTMLAttributes } from 'react'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src?: string
    alt?: string
    size?: string
}

export default function Image({src, alt, size = 'w-4 h-5', className, ...props}: ImageProps) {
    return (
        <img
            src={src}
            alt={alt}
            className={classMerger(size, className)}
            {...props} 
        />
    )
}