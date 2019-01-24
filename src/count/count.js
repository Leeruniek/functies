import { byMatch } from "../is-match/is-match"
import { prop } from "../prop/prop"
import { pipe } from "../pipe/pipe"
import { filter } from "../filter/filter"

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
const count = arg =>
  Array.isArray(arg)
    ? arg.length
    : pipe(
        filter(arg),
        prop("length")
      )

const countBy = byMatch(count)

export { count, countBy }
