import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges multiple class names into a single string, removing duplicates and handling conditional class names.
 *
 * @param {...ClassValue[]} inputs - An array of class values which can be strings, arrays, or objects.
 * @returns {string} A single string of merged class names.
 *
 * @example
 * ```typescript
 * const className = classMerger('btn', 'btn-primary', { 'btn-disabled': isDisabled });
 * // className could be 'btn btn-primary' or 'btn btn-primary btn-disabled' depending on the value of isDisabled
 * ```
 */
export const classMerger = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))