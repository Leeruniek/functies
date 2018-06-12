const sortNumeric = source => {
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

const sortFn = fn => source => {
  let maxValue = 0

  if ( source.length === 0 ) {
    return 0
  }

  for ( let i = 0, length = source.length; i < length; i++ ) {
    if ( maxValue < fn.call( null, source[ i ] ) ) {
      maxValue = source[ i ]
    }
  }

  return maxValue
}

/**
 * Find the maximum value in a source array
 *
 * @param  {Array|Function} arg1    Custom transform function or source array
 * @param  {number[]}       source  Array of numbers
 *
 * @return {number}
 *
 * @tag Array
 * @signature ( source: Number[] ): Number
 * @signature ( fn: Function ) => ( source: Number[] ): Number
 *
 * @example
 * max([-1, 1, 10, 3])
 * // => 10
 *
 * const fn = element => ( new Date( element.time ) ).getTime()
 * const source = [
 *  {time: "2018-06-11T09:01:54.337344Z"},
 *  {time: "2018-06-08T08:26:12.711071Z"}
 * ]
 * max(fn)(source)
 * // => {time: "2018-06-08T08:26:12.711071Z"}
 */
module.exports = arg1 =>
  Array.isArray( arg1 )
    ? sortNumeric( arg1 )
    : sortFn( arg1 )
