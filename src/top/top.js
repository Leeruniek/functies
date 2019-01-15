/**
 * Extract top elements from array
 *
 * @name   top
 *
 * @tag Array
 * @signature (count: number) => (source: Array): Array
 *
 * @param  {number}  count   Number of elements to extract
 * @param  {Array}   source  Source array
 *
 * @returns {Array}
 *
 * @example
 * top(2)([ 1, 2, 3 ])
 * // => [1, 2]
 */
module.exports = (count = 1) => source => source.slice(0, count)
