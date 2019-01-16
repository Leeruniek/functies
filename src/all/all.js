/* eslint-disable no-unused-vars */
// @flow

import type { AllType } from "./all.js.flow"

/**
 * Test if all elements of array satisfy function
 *
 * @name  all
 * @param {Function}  fn      Function that all elements need to satisfy
 * @param {Array}     source  Source array
 *
 * @return {boolean}
 *
 * @tag Core
 * @signature (fn: Function) => (source: Array): boolean
 *
 * @example
 * all(isNumber)([1, 2, 3])
 * // => true
 * all(is)([1, "asd", null])
 * // => false
 */
const all: AllType = <A>(fn) => source => source.every(fn)

export { all }
