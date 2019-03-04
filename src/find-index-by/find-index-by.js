import { isMatch } from "../is-match/is-match"
import { curry } from ".."

/**
 * Find the position of first element that matches the filter criteria
 *
 * @name       findIndexBy
 * @tag        Array
 * @signature  (filter: Object) => (source: Object[]): number
 *
 * @param  {Object}    filter  Object containing one or more fields
 * @param  {Object[]}  source  Source input
 *
 * @return {number}
 *
 * @example
 * const comments = [{id: 1, body: ""}, {id: 2, body: "dolor"}]
 *
 * findIndexBy({id: 2})(comments)
 * // 1
 * findIndexBy({id: 3})(comments)
 * // -1
 */
function findIndexBy(filter, source) {
  for (let i = 0, length = source.length - 1; i <= length; i++) {
    if (isMatch(filter)(source[i])) {
      return i
    }
  }

  return -1
}

const curried = curry(findIndexBy)

export { curried as findIndexBy }
