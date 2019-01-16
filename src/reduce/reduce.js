/* eslint-disable no-unused-vars */
// @flow

import type { ReduceType } from "./reduce.js.flow"

/**
 * Apply a function against an accumulator and each  element in the array (from
 * left to right) to reduce it to a single value.
 *
 * @name   reduce
 *
 * @param  {Function}  fn          Reduce function
 * @param  {Object}    defaultAcc  The default acc
 * @param  {Array}     source      Source input
 *
 * @return {mixed}
 *
 * @tag Array
 * @signature (fn: Function, defaultAcc: mixed) => (source: Array): mixed
 */
const reduce: ReduceType = <A, B>(fn, defaultAcc) => source =>
  Array.isArray(source) ? source.reduce(fn, defaultAcc) : fn(defaultAcc, source)

export { reduce }
