/* eslint-disable no-unused-vars */
// @flow

import type { IfThenType } from "./if-then.js.flow"
import { i } from "../i/i"

/**
 * Functional if-then-else
 *
 * @name   ifThen
 *
 * @param  {Function}  conditionFn  Condition function
 * @param  {Function}  thenFn       Then function
 * @param  {Function}  elseFn       Else function, defaults to identity
 * @param  {mixed}     input        Input
 *
 * @return {mixed}
 */
const ifThen: IfThenType = <A, B>(conditionFn, thenFn, elseFn = i) => input =>
  conditionFn(input) ? thenFn(input) : elseFn(input)

export { ifThen }
