import test from "tape"
import { pluck } from ".."

/**
 * Returns a new list by extracting the same named property off all objects in
 * the source list
 *
 * @param  {string}    field    Field name to extract values from
 * @param  {Object[]}  source   Array of objects
 *
 * @return {number}
 *
 * @tag Array
 * @signature ( field: string ) => ( source: Object[] ): mixed[]
 *
 * @example
 * pluck("position")([{id: 1, position: 3}, {id:2, position: -1}])
 * // => [3, -1]
 */
test("array::pluck", t => {
  const source = [
    {
      id: 1,
      position: 3,
      onlyHere: 1,
    },
    {
      id: 2,
      position: -1,
    },
  ]

  t.deepEqual(pluck("position")(source), [3, -1], "Array with extracted field")

  t.deepEqual(
    pluck("onlyHere")(source),
    [1, undefined],
    "Array with extracted field not available in all source elements"
  )

  t.end()
})
