// @flow

import { reduce } from "../reduce/reduce"
import type { PipeType } from "./pipe.js.flow"

/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity, the remaining functions must be unary.
 *
 * @name    pipe
 *
 * @param   {Array}  fn     Array of functions, call each one in order with the
 *                          input of previous one's result
 * @param   {Array}  input  Arguments array
 *
 * @return  {mixed}
 *
 * @example
 * pipe( inc, inc )( 2 )
 * // => 4
 */
const pipe: PipeType = <A, B>(fn, ...fns) => (...input) =>
  reduce((acc, val) => val(acc), fn(...input))(fns)

export { pipe }
