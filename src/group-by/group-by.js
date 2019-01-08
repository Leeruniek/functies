// @flow

import partition from "../partition/partition"

declare function groupByFn<T>(
  f: (x: T) => (y: T) => boolean
): (input: T[]) => T[][]

function groupByFn<T>(f) {
  return input => {
    if (input.length === 0) {
      return [input]
    }

    const [head, ...tail] = input

    const [sameGroup, otherGroups] = partition<T, _>(f(head))(tail)

    return [[head, ...sameGroup], ...groupByFn(f)(otherGroups)]
  }
}

declare function groupByKey<T, V: { [key: string]: T }>(
  key: string
): (input: T[]) => T[][]

function groupByKey(key) {
  return groupByFn(x => y => x[key] === y[key])
}

/**
 * A grouper is either a binary predicate function or a string.
 */
type GrouperType = (<T>(x: T) => (y: T) => boolean) | string

declare function groupBy<T>(grouper: GrouperType): (input: T[]) => T[][]

/**
 * Group values from a list into a list of lists.
 *
 * @signature
 * <T>(grouper: GrouperType): (input: T[]) => T[][]
 *
 * @param grouper
 * Can either be a curried function taking two values of the same type
 * and returning a `boolean`, or a `string`. If the parameter is a `function`,
 * elements for which the function returns `true` will be in the same
 * group. If the parameter is a `string`, objects in the input list with
 * the same value at that key will be placed in the same group.
 *
 * @return
 * A curried function taking a list of values of type `T`,
 * returning a list of lists of `T`s - each sublist is a single group.
 *
 * @example
 * groupBy(x => y => x % 2 === y % 2)([1,2,3,4,5]) = [[1,3,5], [2,4]]
 *
 * @example
 * groupBy('id')([{ id: 1 }, { id: 2 }, { id: 1 }]) = ([{ id: 1 }, { id: 1 }], [{ id: 2 }]
 */
export default function groupBy<T>(
  grouper: GrouperType
): (input: T[]) => T[][] {
  if (typeof grouper === "string") {
    return groupByKey(grouper)
  }

  return groupByFn(grouper)
}
