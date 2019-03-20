import { byMatch } from "../is-match/is-match"

/**
 * Find the first element that satisfies test function.
 *
 * @name       find
 * @tag        Array
 * @signature  (fn: Function) => (source: Array): mixed
 * @see        {@link findBy}
 * @see        {@link findIndexBy}
 *
 * @param  {Function}  fn      Function applied to each element
 * @param  {Array}     source  Input array
 *
 * @returns {mixed|undefined}  First item that satisfied `fn`
 *
 * @example
 * find(x => x % 2 === 0)([1, 2, 3, 4, 5])
 * // => 2
 */
const find = fn => source => source.find(fn)

/**
 * Find the first element that satisfies test function.
 *
 * @name       findBy
 * @tag        Array
 * @signature  (subset: Object) => (source: Object[]): mixed
 * @see        {@link find}
 * @see        {@link findIndexBy}
 *
 * @param  {Object}    subset  Set of properties that should match
 * @param  {Object[]}  source  Input array
 *
 * @returns {mixed|undefined}  First item that satisfied `fn`
 *
 * @example
 * findBy({
 *   id: 2
 * })([
 *   { id: 1, foo: "bar" },
 *   { id: 2, foo: "ipsum" }
 * ])
 * // => { id: 2, foo: "ipsum" }
 */
const findBy = byMatch(find)

export { find, findBy }
