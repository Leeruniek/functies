// @flow

import type {
  GroupByFnType,
  GroupByKeyType,
  GroupByType,
} from "./group-by.js.flow"
import { partition } from "../partition/partition"

const groupByFn: GroupByFnType = <A>(fn) => input => {
  if (input.length === 0) {
    return []
  }

  const [head, ...tail] = input

  const [sameGroup, otherGroups] = partition(fn(head))(tail)

  return [[head, ...sameGroup], ...groupByFn(fn)(otherGroups)]
}

const groupByKey: GroupByKeyType = <A>(key) =>
  groupByFn(x => y => x[key] === y[key])

/**
 * Group values from a list into a list of lists.
 *
 * @signature
 * <A>(grouper: ((x: A) => (y: A) => boolean) | string): (input: A[]) => A[][]
 *
 * @param grouper
 * One of:
 *   - A curried function taking two `A`s and returning a boolean.
 *   - A string, representing a key of objects in the list. In this case `A` is the type of the value at the given key.
 *
 * @return
 * A function taking a `A[]`, and returning a `A[][]`.
 * Alternatively, a function taking a `Object[]` where the value at `grouper`
 * is an `A` (if `grouper` is a string), and returning a `Object[][]`.
 *
 * If `grouper` was passed as a string, each sublist of the result will contain
 * objects where the value at key `grouper` is equal (`===`).
 *
 * Otherwise, each sublist of the result will contain `A`s which return
 * `true` when passed pairwise to `grouper`.
 *
 * @example
 * groupBy(x => y => x % 2 === y % 2)([1,2,3,4,5]) = [[1,3,5], [2,4]]
 *
 * groupBy('id')([{ id: 1 }, { id: 2 }, { id: 1 }]) = [[{ id: 1 }, { id: 1 }], [{ id: 2 }]]
 */
const groupBy: GroupByType = <A>(grouper) => {
  if (typeof grouper === "string") {
    return groupByKey(grouper)
  }

  return groupByFn(grouper)
}

export { groupBy }
