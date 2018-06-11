/**
 * Find the maximum value in a source array
 *
 * @param  {number[]}  source  Array of numbers
 *
 * @return {number}
 *
 * @tag Array
 * @signature ( source: Number[] ): Number
 *
 * @example
 * max([-1, 1, 10, 3])
 * // => 10
 */
module.exports = source => {
  let maxValue = 0

  if ( source.length === 0 ) {
    return 0
  }

  for ( let i = 0, length = source.length; i < length; i++ ) {
    if ( maxValue < source[ i ] ) {
      maxValue = source[ i ]
    }
  }

  return maxValue
}

