/**
 * Count the number of elements that satisfy a function (returns true)
 *
 * @tag Array
 * @signature ( fn: Function )( source: Object[] ): number
 *
 * @param   {Function}  fn      Satisfy function
 * @param   {Object[]}  source  Array of objects
 *
 * @return  {number}
 *
 * @example
 * const scores = [{
 *  name   : "Bob",
 *  score  : 1,
 *  subject: "Math"
 * }, {
 *  name   : "Alice",
 *  score  : 10,
 *  subject: "Math"
 * }, {
 *  name   : "Hatter",
 *  score  : 10,
 *  subject: "Math"
 * }]
 *
 * count( element => element.score === 10 )( scores )
 * // 2
 */
module.exports = fn => source => {
  let count = 0

  for ( let i = 0, length = source.length; i < length; i++ ) {
    if ( fn.call( null, source[ i ] ) === true ) {
      count = count + 1
    }
  }

  return count
}
