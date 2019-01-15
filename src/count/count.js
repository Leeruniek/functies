const filter = require("../filter/filter")
const get = require("../get/get")
const pipe = require("../pipe/pipe").pipe

/**
 * Count the number of elements that satisfies a function
 *
 * @tag Array
 * @signature (fn: Function)(source: Array|Object): number
 *
 * @param   {Function}        fn      Test function
 * @param   {Array|Object}  source  Source array
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
 * // => 2
 */
module.exports = arg =>
  Array.isArray(arg)
    ? arg.length
    : pipe(
        filter(arg),
        get("length")
      )
