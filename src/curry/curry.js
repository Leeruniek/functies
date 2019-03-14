/* eslint-disable no-unused-vars*/
// @flow

import { is } from "../is/is"
import type { CurryType, UncurryType } from "./curry.js.flow"

/**
 * Partially apply a function.
 *
 * @signature
 * <A>(fn: (...args: mixed[]) => A) => CurryReturnType<A>
 *
 * where CurryReturnType<A> = (...mixed[]) => A | CurryReturnType<A>
 *
 * @param fn
 * The function to apply
 *
 * @param args
 * The arguments to apply, in order
 *
 * @return
 * If the number of arguments provided is sufficient to call the function,
 * call the function and return the result. Otherwise, return a new function
 * which takes additional parameters, returning the result of calling `curry`
 * on the function with the provided parameters.
 *
 * @example
 * curry((a, b) => a + b)(1)(2) = 3
 */
const curry: CurryType = <A>(fn) => (...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (...rest) => curry(fn)(...args, ...rest)

/**
 * Convert a curried function of arity n to a simple function with n parameters.
 *
 * @param fn
 * The function to apply
 *
 * @param args
 * The arguments to apply, in order
 *
 * @return
 * The result of calling the function on each argument in turn,
 * until a non-function is the return value. If an insufficient number
 * of arguments are provided, return the partially applied function.
 *
 * @example
 * uncurry(a => b => c => a + b * c)(1, 2, 3) = 7
 */
const uncurry: UncurryType = fn => (arg, ...args) => {
  // Return the partially applied function if an insufficient number
  // of arguments are provided.
  if (!is(arg) && args.length === 0) {
    return fn
  }

  // Store the result of `fn(arg)`, because its type could change
  // between each invocation.
  const result = fn(arg)

  return typeof result === "function" ? uncurry(result)(...args) : result
}

export { curry, uncurry }
