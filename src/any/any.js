/* eslint-disable no-unused-vars */
// @flow

import { byMatch } from "../is-match/is-match"
import type { AnyType } from "./any.js.flow"

/**
 * Test if at least one element of array satisfies function
 *
 * @name  any
 * @param {Function}  fn      Function to be satisfied
 * @param {Array}     source  Source array
 *
 * @return {boolean}
 *
 * @tag Core
 * @signature (fn: Function) => (source: Array): boolean
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
 * Test if at least one element of array satisfies function
 *
 * @name   anyBy
 * @param  {Object}    subset  Set of properties that should match
 * @param  {Object[]}  source  Source array
 *
 * @return {boolean}
 *
 * @tag Core
 * @signature (subset: Object)(source: Object[]): boolean
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
