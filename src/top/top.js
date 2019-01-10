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
module.exports = (count = 1) => source => {
  const result = []

  // dont go under 0, dont go over source length
  const resultCount = Math.max(0, Math.min(count, source.length))

  for (let i = 0; i < resultCount; i++) {
    result.push(source[i])
  }

  return result
}
