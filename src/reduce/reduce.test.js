import test from "tape"
import { reduce } from ".."

/**
 * Apply a function against an accumulator and each  element in the array (from
 * left to right) to reduce it to a single value.
 *
 * @param  {Function}  fn          Reduce function
 * @param  {Object}    defaultAcc  The default acc
 * @param  {Array}     source      Source input
 *
 * @return {Array}
 *
 * @tag Array
 * @signature (fn: Function, defaultAcc: mixed) => (source: Array): Array
 */
test("reduce", t => {
  t.equals(reduce((acc, next) => acc + next, 0)([1, 2, 3]), 6, "Sum an array")

  t.equals(
    reduce((acc, next) => acc + next, 0)(12),
    12,
    "Run even if input is not array, treat it as array of one"
  )

  t.equals(
    reduce((acc = 0, next) => acc + next)([1, 2, 3]),
    6,
    "Sum an array with the initial acc left undefined in the reduce function but set as default value in the param"
  )

  t.deepEquals(
    reduce((acc, next) => ({ ...acc, [next]: next }), {})([1, 2, 3]),
    { 1: 1, 2: 2, 3: 3 },
    "From array to object with default acc"
  )

  t.equals(
    reduce((a, b) => a + b)([1, 2, 3]),
    6,
    "First value used as initial accumulator if not provided"
  )

  // Probably something in map or in pipe that gets called in map if multiple
  // transform functions provided
  //
  // t.deepEquals(
  //   map(
  //     item => {
  //       return Object.entries(item)
  //     },

  //     reduce((acc, [key, value]) => {
  //       acc[key] = value

  //       return acc
  //     }, {})
  //   )([
  //     { id: "781" },
  //     { id: "780" },
  //     { id: "779" },
  //     { id: "778" },
  //     { id: "777" },
  //     { id: "776" },
  //     { id: "775" },
  //     { id: "774" },
  //     { id: "773" },
  //     { id: "772" },
  //   ]),
  //   [
  //     { id: "781" },
  //     { id: "780" },
  //     { id: "779" },
  //     { id: "778" },
  //     { id: "777" },
  //     { id: "776" },
  //     { id: "775" },
  //     { id: "774" },
  //     { id: "773" },
  //     { id: "772" },
  //   ]
  // )

  t.end()
})
