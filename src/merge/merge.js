import { uncurry } from "../curry/curry"
import { pipe } from "../pipe/pipe"
import { groupBy } from "../group-by/group-by"
import { concat } from "../concat/concat"
import { entries, fromEntries } from "../entries/entries"
import { reduce } from "../reduce/reduce"

// Combine values by overwriting, but only if the value to overwrite with
// is not undefined.
const defaultMergeFn = aVal => bVal => (bVal === undefined ? aVal : bVal)

/**
 * Merge two objects, provided a function to decide what to do with
 * overlapping keys.
 *
 * @signature
 * (Object, Function) => Object => Object => Object
 *
 * @param fn
 * An Object of curried functions taking two values, where the function
 * at a key describes how to merge duplicate values at the key.
 *
 * @param defaultFn
 * The merging function to use by default (if a specific function is not
 * provided for a key in the fn object.) By default, the second value
 * overwrites the first value unless the second value is undefined.
 *
 * @param a
 * The first object
 *
 * @param b
 * The second object
 *
 * @return
 * An object with properties merged from a and b
 */
const mergeTwoWith = (fns = {}, defaultFn = defaultMergeFn) => a => b => {
  // Get the function to merge keys by
  const fn = key => (fns[key] ? fns[key] : defaultFn)

  const allEntries = concat(entries(a))(entries(b))

  return pipe(
    groupBy(([aKey]) => ([bKey]) => aKey === bKey),
    reduce(
      (acc, group) => [
        ...acc,
        reduce(([, valAcc], [key, value]) => [key, fn(key)(valAcc)(value)])(
          group
        ),
      ],
      []
    ),
    fromEntries
  )(allEntries)
}

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
const mergeTwo = mergeTwoWith()

/**
 * Merge n objects, provided functions which describe what to do
 * in the case of overlapping keys.
 *
 * @signature
 * (Object, Function) => Object[] => Object
 *
 * @param fn
 * An Object of curried functions taking two values, where the function
 * at a key describes how to merge duplicate values at the key.
 *
 * @param defaultFn
 * The merging function to use by default
 *
 * @param a
 * The first object
 *
 * @param b
 * The second object
 *
 * @return
 * An object with properties merged from all source objects
 */
const mergeWith = (fns, defaultFn) => (...sources) =>
  reduce(uncurry(mergeTwoWith(fns, defaultFn)))(sources)

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
const merge = (...sources) => reduce(uncurry(mergeTwo))(sources)

export { mergeTwoWith, mergeTwo, mergeWith, merge }
