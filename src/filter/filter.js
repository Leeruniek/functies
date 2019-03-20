/* eslint-disable no-unused-vars */
// @flow

import { curry } from "../curry/curry"
import { byMatch } from "../is-match/is-match"
import type { FilterType } from "./filter.js.flow"

/**
 * Filter items in array that satisfies test function
 *
 * @name       filter
 * @tag        Array
 * @signature  (fn: Function) => (source: Array): Array
 *
 * @param  {Function}  fn      Filter test function
 * @param  {Array}     source  Input array
 *
 * @returns  {Array}
 *
 * @example
 * filter(is)([1, 2, null, 3, undefined])
 * // => [1, 2, 3]
 */
const filter: FilterType = <A>(fn) => source => source.filter(fn)

export { filter }

/**
 * Filter items in array that match subset
 *
 * @name       filterBy
 * @tag        Array
 * @signature  (subset: Object) => (source: Object[]): Object[]
 *
 * @param  {Object}    subset  Set of properties that should match
 * @param  {Object[]}  source  Input array
 *
 * @returns  {Object[]}
 *
 * @example
 * filterBy({
 *   id: is,
 * })([
 *   { id: 1 },
 *   { id: null, name: "test" },
 *   { id: 3, foo: "bar" },
 *   { name: "test" },
 * ])
 * // => [{ id: 1 }, { id: 3, foo: "bar" }]
 */
const filterBy = byMatch(filter)

export { filterBy }
