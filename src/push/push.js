/**
 * Add element at end of array
 *
 * @name   push
 *
 * @param  {mixed}  element  Element to be added
 * @param  {Array}  input    Array to add to
 *
 * @return {Array}
 *
 * @tag Array
 * @signature ( ...elements: mixed ) => ( input: Array ): Array
 *
 * @example
 * push( 2 )( [ 1 ] ) // => [ 1, 2 ]
 * push( 2, 4 )( [ 1 ] ) // => [ 1, 2, 4 ]
 */
const push = (...elements) => input => [...input, ...elements]

export { push }
