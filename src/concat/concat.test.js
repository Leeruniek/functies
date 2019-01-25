import test from "tape"
import { concat } from ".."

/**
 * Merge two or more arrays into one
 *
 * @param {Array}  source1  First array
 * @param {Array}  source2  Second array
 *
 * @returns {Array}
 *
 * @tag Array
 * @signature (source1: Array) => (source2: Array) => Array
 *
 * @example
 * concat([1])([4, 5])
 * // => [1, 4, 5]
 */
test("core::concat", t => {
  t.deepEquals(concat([1, 2])([2, 3]), [1, 2, 2, 3], "Concatenate 2 arrays")
  t.deepEquals(concat([])([]), [], "Concatenate 2 empty arrays")
  t.deepEquals(concat(2)([1]), [2, 1], "Concatenate non array with array")
  t.deepEquals(concat([1])(2), [1, 2], "Concatenate array with array non array")

  t.end()
})
