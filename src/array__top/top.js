/**
 * Return top elements from array
 *
 * @tag Array
 * @signature (count: number) => (source: Array): Array
 *
 * @param  {number}  count   Number of elements to return
 * @param  {Array}   source  Source array
 *
 * @returns {Array}
 *
 * @example
 * top(2)([ 1, 2, 3 ])
 * // => [1, 2]
 */
module.exports = ( count = 1 ) => source => {
  const result = []

  // dont go under 0, dont go over source length
  const elmCount = Math.max( 0, Math.min( count, source.length ) )

  for ( let i = 0; i < elmCount; i++ ) {
    result.push( source[ i ] )
  }

  return result
}
