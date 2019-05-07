import { filter } from "../filter/filter"

/**
 * Remove value from array (strict equality check)
 *
 * @name       remove
 * @tag        Array
 * @signature  (value: any) => (source: Array): Array
 * @see        {@link filter}
 *
 * @param  {mixed}  value   Value to remove
 * @param  {Array}  source  Input array
 *
 * @return {Array}
 *
 * @example
 * remove(2)([1, 2, 3])
 * // => [1, 3]
 *
 * remove(null)([1, null, 2, 3, null])
 * // => [1, 2, 3]
 */
const remove = value => filter(element => element !== value)

export { remove }
