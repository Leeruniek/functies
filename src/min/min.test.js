import test from "tape"
import { min } from ".."

/**
 * Find the minimum value in a source array
 *
 * @param  {number[]}  source  Array of numbers
 *
 * @return {number}
 *
 * @tag Array
 * @signature ( source: Number[] ): Number
 *
 * @example
 * min([-1, 1, 10, 3])
 * // => -1
 */
test("array::min", t => {
  t.deepEqual(min([-1, 1, 10, 3]), -1, "min([-1, 1, 10, 3]) // => -1")

  t.deepEqual(min([]), 0, "min([]) // => 0 (neutral element)")

  t.end()
})
