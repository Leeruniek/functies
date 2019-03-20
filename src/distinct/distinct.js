import { deepEqual } from "../deep-equal/deep-equal"

/**
 * Remove duplicate values. Will use `deepEqual` for comparison.
 *
 * @name       distinct
 * @tag        Array
 * @signature  (source: Array): Array
 * @see        {@link deepEqual}
 *
 * @param  {Array}  source  Input array
 *
 * @returns  {Array}  Duplicate free array
 *
 * @example
 * distinct([1, 1, 2])
 * // => [1, 2]
 */
const distinct = source => {
  const result = []

  for (let i = 0, length = source.length; i < length; i++) {
    const newElement = source[i]
    let shouldAdd = true

    for (let j = 0, resLength = result.length; j < resLength; j++) {
      const resElement = result[j]

      if (deepEqual(newElement)(resElement)) {
        shouldAdd = false
        break
      }
    }

    shouldAdd && result.push(newElement)
  }

  return result
}

export { distinct }
