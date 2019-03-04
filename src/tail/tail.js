// @flow

/**
 * Return last element in array
 *
 * @name      tail
 * @tag       Array
 * @signature T[] => T[]
 * @see       top, head, last
 *
 * @param {Array}  source  Source array
 *
 * @returns {Array} All but first elements in array
 *
 * @example
 * tail([1, 2, 3])
 * // => [2, 3]
 */
function tail<T>([, ...rest]: T[]): T[] {
  return rest
}

export { tail }
