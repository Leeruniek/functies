/* eslint-disable no-unused-vars */
// @flow

import { byMatch } from "../is-match/is-match"
import type { AllType } from "./all.js.flow"

/**
 * Test if all elements of array satisfy function
 *
 * @name  all
 * @param {Function}  fn      Function that all elements need to satisfy
 * @param {Array}     source  Input array
 *
 * @return {boolean} True if all objects satisfy, false otherwise
 *
 * @tag Core
 * @signature (fn: Function) => (source: Array): boolean
 *
 * @example
 * all(isNumber)([1, 2, 3])
 * // => true
 *
 * all(is)([1, "asd", null])
 * // => false
 */
const all: AllType = <A>(fn) => source =>
  (Array.isArray(source) ? source : [source]).every(fn)

export { all }

/**
 * Test if object properties match all objects in input array
 *
 * @name   allBy
 * @param  {Object}  subset  Set of properties that should match
 * @param  {Array}   source  Input array
 *
 * @return {boolean} True if all objects match, false otherwise
 *
 * @tag Core
 * @signature (subset: Object) => (source: Object[]): boolean
 *
 * @example
 * all({
 *   id: isString
 * })([
 *   { id: "uuid1", name: "foo"}
 *   { id: "uuid2", name: "bar"}
 * ])
 * // => true
 */
const allBy = byMatch(all)

export { allBy }
