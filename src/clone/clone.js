import { i, map, reduce, type } from ".."

/**
 * !!! Will not inherit prototype, only own enumerable properties !!!
 *
 * Creates a new instance of the object with same properties than original
 *
 * @param  {any}  source  Input value
 *
 * @return {any}  Cloned value
 *
 * @name clone
 * @tag Core
 * @signature <T>(source: T): T
 *
 * @example
 * let x = {a: [1]}
 *
 * clone(x)
 * // => {a: [1]}
 *
 * close(x) === x
 * // => false
 */
const clone = source => {
  const byType = {
    Date: () => new Date(source.getTime()),
    Array: () => map(clone)(source),
    Object: () =>
      reduce((acc, [key, elm]) => {
        acc[key] = clone(elm)

        return acc
      }, {})(Object.entries(source)),
  }

  const sourceType = type(source)

  return byType[sourceType] ? byType[sourceType](source) : i(source)
}

export { clone }
