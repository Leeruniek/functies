/**
 * Test if at least one element of array satisfies function
 *
 * @name  all
 * @param {Function}  fn      Function to be satisfied
 * @param {Array}     source  Source array
 *
 * @return {boolean}
 *
 * @tag Core
 * @signature (fn: Function) => (source: Array): boolean
 *
 * @example
 * any(isNumber)([1, "string", NaN])
 * // => true
 * any(is)([null])
 * // => false
 */
module.exports = fn => source =>
  source.some(element => fn(element) && typeof fn(element) === "boolean")
