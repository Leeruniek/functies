/**
 * Merge two arrays/values into one array
 *
 * @param {Array|mixed}  source1  First input source
 * @param {Array|mixed}  source2  Second input source
 *
 * @returns {Array} Array with concatenated values
 *
 * @name concat
 * @tag Array
 * @signature (source1: Array|mixed) => (source2: Array|mixed): Array
 *
 * @example
 * concat([1])([4, 5])
 * // => [1, 4, 5]
 *
 * concat(1)(4)
 * // => [1, 4]
 */
const concat = source1 => source2 =>
  (Array.isArray(source1) ? source1 : [source1]).concat(source2)

export { concat }
