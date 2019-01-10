/* eslint-disable no-unused-vars*/

// @flow

import type { PartitionType } from "./partition.js.flow"

/**
 * Split a list based on a predicate function.
 *
 * @signature
 * <A>(fn: (x: A) => boolean) => (input: A[]) => [A[], A[]]
 *
 * @param fn
 * A predicate function.
 *
 * @return
 * A function taking a `A[]` and returning a two-tuple of `A[]`s.
 * The first element of the tuple consists of elements for which
 * the predicate returned `true`, the second of elements for which
 * it returned `false`.
 *
 * @example
 * partition(x => x % 2 === 0)([1,2,3,4,5]) = [[2,4],[1,3,5]]
 */
const partition: PartitionType = <A>(fn) => input =>
  input.reduce(
    (acc, val) => {
      const [pass, fail] = acc

      return fn(val) ? [[...pass, val], fail] : [pass, [...fail, val]]
    },
    [[], []]
  )

export { partition }
