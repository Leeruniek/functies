const test = require( "tape" )
const max = require( "./max" )

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
test( "array::max( source: Number[] ): Number", t => {
  t.deepEqual(
    max( [ -1, 1, 10, 3 ] ), 10,
    "max([-1, 1, 10, 3]) // => 10" )

  t.deepEqual(
    max( [] ), 0,
    "max([]) // => 0 (neutral element)" )

  t.end()
} )
