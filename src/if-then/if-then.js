/* eslint-disable no-unused-vars */
// @flow

import type { IfThenType } from "./if-then.js.flow"

/**
 * Functional if-then-else
 *
 * @name   ifThen
 *
 * @param  {Function}  conditionFn  Condition function
 * @param  {Function}  thenFn       Then function
 * @param  {Function}  elseFn       Else function, if not specified will return
 *                                  input
 *
 * @return {mixed}
 */
const ifThen: IfThenType = <A, B, C>(conditionFn, thenFn, elseFn) => input =>
  conditionFn(input)
    ? thenFn(input)
    : typeof elseFn === "function"
    ? elseFn(input)
    : input

export { ifThen }
