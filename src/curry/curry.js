/* eslint-disable no-unused-vars*/
// @flow

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
 * until a non-function is the return value
 *
 * @example
 * uncurry(a => b => c => a + b * c)(1, 2, 3) = 7
 */
const uncurry: UncurryType = fn => (arg, ...args) => {
  // The one liner version of this function doesn't type check because
  // the type of of `fn(arg)` could change between each invocation. `fn`
  // is not known to be pure because we can't say anything about its type
  // in advance - in fact, we don't even know its arity.
  //
  // If we knew how to type `fn`, we could write:
  // typeof fn(arg) === "function" ? uncurry(fn(arg))(...args) : fn(arg)
  const result = fn(arg)

  typeof result === "function" ? uncurry(result)(...args) : result
}

export { curry, uncurry }
