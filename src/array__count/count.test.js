const test = require( "tape" )
const count = require( "./count" )

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
test( "array::count( fn: Function )( source: Object[] ): number", t => {
  const scores = [ {
    name : "Bob",
    score: 1,
  }, {
    name   : "Alice",
    score  : 10,
    subject: "Math",
  }, {
    name   : "Hatter",
    score  : 10,
    subject: "Math",
  } ]

  t.deepEqual(
    count( element => element.score === 10 )( scores ), 2,
    "count elements that satisfy function" )

  t.end()
} )
