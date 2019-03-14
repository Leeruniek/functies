/* eslint-disable no-unused-vars */
// @flow

import { isEmpty } from "../is-empty/is-empty"
import type { ReduceType } from "./reduce.js.flow"

/**
 * Apply a function against an accumulator and each  element in the array (from
 * left to right) to reduce it to a single value.
 *
 * @name   reduce
 *
 * @param  {Function}  fn          Reduce function
 * @param  {Object}    defaultAcc  Default value for the accumulator
 * @param  {Array}     source      Source input
 *
 * @return {mixed}
 *
 * @tag Array
 * @signature (fn: Function, defaultAcc: mixed) => (source: Array): mixed
 */
const reduce: ReduceType = <A, B>(...reduceParams) => source => {
  const [fn, defaultAcc] = reduceParams

  if (!Array.isArray(source)) {
    return fn(defaultAcc, source)
  }

  return source.reduce(...reduceParams)
}

export { reduce }
