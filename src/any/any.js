/* eslint-disable no-unused-vars */
// @flow

import { byMatch } from "../is-match/is-match"
import type { AnyType } from "./any.js.flow"

/**
 * Test if at least one element of array satisfies function
 *
 * @name       any
 * @tag        Core
 * @signature  (fn: Function) => (source: Array): boolean
 * @see        {@link all}
 *
 * @param  {Function}  fn      Function to be satisfied
 * @param  {Array}     source  Input array
 *
 * @returns  {boolean}  True if at least one object passes, false otherwise
 *
 * @example
 * any(isNumber)([1, "string", NaN])
 * // => true
 *
 * any(is)([null])
 * // => false
 */
const any: AnyType = <A>(fn) => source =>
  (Array.isArray(source) ? source : [source]).some(element => {
    const testResult = fn(element)

    return testResult && typeof testResult === "boolean"
  })

export { any }

/**
 * Test if object properties match any object in input array
 *
 * @name       anyBy
 * @tag        Core
 * @signature  (subset: Object) => (source: Object[]): boolean
 * @see        {@link isMatch}
 * @see        {@link allBy}
 *
 * @param  {Object}    subset  Set of properties that should match
 * @param  {Object[]}  source  Input array
 *
 * @returns  {boolean}  True if at least one object matches, false otherwise
 *
 * @example
 * anyBy({
 *   id: isNumber,
 *   name: "lorem",
 * })([
 *   { id: "uuid", name: "lorem" },
 *   { id: 2, name: "foo" },
 *   { id: 3, name: "lorem", foo: "bar" },
 * ])
 * // => true
 */
const anyBy = byMatch(any)

export { anyBy }
