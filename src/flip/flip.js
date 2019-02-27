// @flow

import { curry } from "../curry/curry"
import type { FlipType, FlipUncurriedType } from "./flip.js.flow"

/**
 * Reverse the first two parameters of a function.
 */
const flip: FlipType = <A, B, C>(f) => a => b => f(b)(a)

/**
 * Reverse the first two parameters of an uncurried function.
 */
const flipUncurried: FlipUncurriedType = <A, B, C, D>(f) => (a, b, ...rest) =>
  f(b, a, ...rest)

export { flip, flipUncurried }
