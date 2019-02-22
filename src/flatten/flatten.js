import { map } from "../map/map"
import { reduce } from "../reduce/reduce"
import { type } from "../type/type"
import { push } from "../push/push"

/**
 * Flatten a single level of an array.
 */
const flattenOne = source => [].concat(...source)

/**
 * Recursively concat all arrays intro a single array
 *
 * @param  {Array}  input  Array with nested arrays
 *
 * @return {Array}  1 level deep array
 *
 * @example
 * flatten([1, [2], [3, [4]]])
 * // => [1, 2, 3, 4]
 */
const flatten = reduce(
  (acc, item) =>
    type(item) === "Array" ? [...acc, ...flatten(item)] : [...acc, item],
  []
)

/**
 * An alternate version of flatten that treats nested arrays as branches,
 * constructing a set of arrays which represent the permutations of
 * concatenations possible when taking a single value from each branch.
 *
 * Unlike flatten, flattenBranches does not recurse on subelements.
 *
 * WARNING:
 * As a permutation function, it's subject to combinatorial explosion.
 *
 * @example
 * flattenBranches([1, 2, [3, 4]]) =
 *   [[1, 2, 3], [1, 2, 4]]
 *
 * flattenBranches([1, [2, 3], [4, 5]]) =
 *   [[1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5]]
 */
const flattenBranches = reduce((acc, val) => {
  if (Array.isArray(val)) {
    const addItems = arr => map(item => push(item)(arr))(val)

    const nextBranches = map(addItems)(acc)

    return flattenOne(nextBranches)
  }

  if (acc.length === 0) {
    return [[val]]
  }

  return map(push(val))(acc)
}, [])

export { flattenOne, flatten, flattenBranches }
