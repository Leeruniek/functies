import { reduce } from "../reduce/reduce"
import { pick } from "../pick/pick"

/**
 * Merge two objects.
 * Keys from the second object corresponding to undefined values will be
 * ignored, otherwise same-named keys from the second object will take
 * priority.
 *
 * @signature
 * Object => Object => Object
 *
 * @param a
 * The first object
 *
 * @param b
 * The second object
 *
 * @return
 * An object with the props from both input objects merged together
 *
 * @example
 * mergeTwo({ id: 1, name: "test" })(
 *   { id: undefined, name: "test2", error: "Error" }
 * ) = { id: 1, name: "test2", error: "Error" }
 */
const mergeTwo = a => b => ({
  ...a,
  ...pick(() => value => value !== undefined)(b),
})

/**
 * Combine from left to right, 2 or more objects into a new single one.
 * Properties will be shallow copied. Those with the same name will be
 * overwriten by right most object.
 *
 * @name    merge
 *
 * @signature ( ...source: Object[] ): Object
 *
 * @param   {Object[]}  source
 * Array of objects
 *
 * @return  {Object}
 *
 * @example
 * merge({a: "lorem"}, {b: "ipsum", c: 41}, {c: 42, b: undefined})
 * // => { a: "lorem", b: "ipsum", c: 42 }
 */
const merge = (...sources) => reduce((a, b) => mergeTwo(a)(b), {})(sources)

export { mergeTwo, merge }
