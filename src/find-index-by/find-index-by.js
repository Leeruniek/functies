import { isMatch } from "../is-match/is-match"
import { curry } from "../curry/curry"

/**
 * Find the position of first element that matches the subset criteria
 *
 * @name       findIndexBy
 * @tag        Array
 * @signature  (subset: Object) => (source: Object[]): number
 *
 * @param  {Object}    subset  Object containing one or more fields
 * @param  {Object[]}  source  Source input
 *
 * @return {number}
 *
 * @example
 * const comments = [{id: 1, body: ""}, {id: 2, body: "dolor"}]
 *
 * findIndexBy({id: 2})(comments)
 * // => 1
 *
 * findIndexBy({id: 3})(comments)
 * // => -1
 */
const findIndexBy = curry((subset, source) => {
  for (let i = 0, length = source.length - 1; i <= length; i++) {
    if (isMatch(subset)(source[i])) {
      return i
    }
  }

  return -1
})

export { findIndexBy }
