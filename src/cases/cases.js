/* eslint-disable no-unused-vars, no-negated-condition */

import { ifThen } from "../if-then/if-then"
import { i } from "../i/i"

/**
 * Functional case statement.
 *
 * @signature
 * <A, B>(
 *   conditions: [(A) => boolean, (A) => B][],
 *   otherwise: (A) => B
 * ) => A => B
 *
 * @param conditions
 * List of 2-tuples of functions (if, then)
 * @param otherwise
 * Function to call if no condition matches. Defaults to identity.
 * @param input
 * Value to check
 *
 * @returns
 * The result of calling the first matching then function or the
 * otherwise function on the input.
 *
 * @example
 * cases([
 *  [x === 0, x => x * 2],
 *  [x === 1, x => x],
 * ], x => x + 1)(2) = 3
 */
const cases = ([[conditionFn, thenFn], ...rest], otherwise = i) => input =>
  ifThen(
    conditionFn,
    thenFn,
    rest.length !== 0 ? cases(rest, otherwise) : otherwise
  )(input)

export { cases }
