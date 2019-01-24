import { reduce } from "../reduce/reduce"
import { type } from "../type/type"

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

export { flatten }
