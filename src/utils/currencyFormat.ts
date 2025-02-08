/**
 * Returns the given value converted into currency format with 2 decimals
 * 
 * @param {number} value The given value
 * @returns {string} The value converted into currency format with 2 decimals
 * @example
 * ```typescript
 * const price = `$${currencyFormat(310250)}`
 * console.log(price) // $310,250.00
 * ```
 */
export const currencyFormat = (value: number): string => new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value)