import test from "tape"
import { toggle } from ".."

/**
 * Add if not exists, remove otherwise
 *
 * @name   toggle
 *
 * @param  {mixed}  item  Toggable value
 *
 * @return {Array}
 *
 * @tag Array
 * @signature (item: mixed) => (input: Array): Array
 *
 * @example
 * toggle(1)([1, 2])
 * // => [2]
 * toggle(1)([2])
 * // => [1, 2]
 */
test("array::toggle", t => {
  t.deepEqual(
    toggle(2)([1, 2, 3]),
    [1, 3],
    "(2)([1,2,3]) // should remove element"
  )

  t.deepEqual(
    toggle(2)([1, "2", 3]),
    [1, "2", 3, 2],
    '(2)([1,"2",3]) // should push element'
  )

  t.end()
})
