import { byMatch } from "../is-match/is-match"
import { prop } from "../prop/prop"
import { pipe } from "../pipe/pipe"
import { filter } from "../filter/filter"

/**
 * Count items in array that satisfies a function
 *
 * @name       count
 * @tag        Array
 * @signature  (fn: Function) => (source: Array): number
 * @see        {@link countBy}
 *
 * @param  {Function}  fn      Test function
 * @param  {Array}     source  Source array
 *
 * @returns  {number}  Number of items that satisfied `fn`
 *
 * @example
 * count([1, 2, 3])
 * // => 3
 *
 * count(
 *  item => item.score === 10
 * )([
 *   { name: "Bob", score: 1, subject: "CS" },
 *   { name: "Alice", score: 10, subject: "Math" },
 *   { name: "Hatter", score: 10, subject: "Math"}
 * ])
 * // => 2
 */
const count = arg =>
  Array.isArray(arg)
    ? arg.length
    : pipe(
        filter(arg),
        prop("length")
      )

export { count }

/**
 * Count objects that match
 *
 * @name       countBy
 * @tag        Array
 * @signature  (subset: Object) => (source: Object[]): number
 * @see        {@link count}
 *
 * @param  {Object}  subset  Set of properties that should match
 * @param  {Array}   source  Input array
 *
 * @returns  {number}  Number of objects that match `subset`
 *
 * @example
 * countBy({
 *  subject: value => value === "Math"
 *  score: value => value > 5
 * })([
 *   { name: "Bob", score: 1, subject: "CS" },
 *   { name: "Alice", score: 10, subject: "Math" },
 *   { name: "Hatter", score: 10, subject: "Math"}
 * ])
 * // => 2
 */
const countBy = byMatch(count)

export { countBy }
