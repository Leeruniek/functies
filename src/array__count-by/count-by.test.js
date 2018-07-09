const test = require( "tape" )
const countBy = require( "./count-by" )

/**
 * Index an array by a field but instead of returning an array for each
 * distinct value, just count them
 *
 * @tag Array
 * @signature ( field: string )( source: Object[] ): Object
 *
 * @param   {string}  field  Field name by with to count
 * @param   {Object[]}  source  Array of objects
 *
 * @return  {Object}
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
 * countBy( "score" )( scores )
 * // => { "1": 1, "10": 2 }
 */
test( "array::countBy( field: string )( source: Object[] ): Object", t => {
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
    countBy( "score" )( scores ), { 1: 1, 10: 2 },
    "object with distinct values and their occurrence" )

  t.deepEqual(
    countBy( "subject" )( scores ), { Math: 2 },
    "object with occurrences even if field is not defined on some elements" )

  t.end()
} )
