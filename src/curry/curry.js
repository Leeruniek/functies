/* eslint-disable no-unused-vars*/

// @flow

import type { CurryType } from "./curry.js.flow"

/**
 * Partially apply a function.
 *
 * @signature
 * <A>(fn: Function) => (args: mixed[]) => A
 *
 * @param fn
 * The function to apply.
 *
 * @param args
 * The arguments to apply, in order.
 *
 * @return
 * If the number of arguments provided is sufficient to call the function,
 * call the function and return the result. Otherwise, return a new function
 * which takes additional parameters, returning the result of calling `curry` on the function with the original parameters and the additional parameters.
 *
 * @example
 * curry((a, b) => a + b)(1)(2) = 3
 */
const curry: CurryType = <A>(fn) => (...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (...rest) => curry(fn)(...args, ...rest)

export { curry }
