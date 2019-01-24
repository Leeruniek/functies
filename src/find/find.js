import { byMatch } from "../is-match/is-match"

/**
 * Find the first element that satisfies the matchFn
 *
 * @name   find
 *
 * @param  {Function}    matchFn Function applied to each element
 * @param  {Array}       source  Source array
 *
 * @return {mixed|undefined}  First element
 *
 * @example
 * find(x => x % 2 === 0)([1,2,3,4,5]) = 2
 */
const find = fn => source => source.find(fn)

const findBy = byMatch(find)

export { find, findBy }
