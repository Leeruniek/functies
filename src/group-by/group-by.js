// @flow

const partition = require("../partition/partition")

type GrouperFnType<T> = (x: T) => (y: T) => boolean
type GrouperFnReturnType<T1> = (input: T1[]) => T1[][]

const groupByFn = <T>(f: GrouperFnType<T>): GrouperFnReturnType<T> => (
  input: T[]
): T[][] => {
  if (input.length === 0) {
    return [input]
  }

  const [head, ...tail] = input

  const [sameGroup, otherGroups] = partition<T>(f(head))(tail)

  return [[head, ...sameGroup], ...groupByFn(f)(otherGroups)]
}

type GroupByKeyType = <T, V: { [key: string]: T }>(
  key: string
) => (x: V) => (y: V) => boolean => (input: T[]) => T[][]

const groupByKey: GroupByKeyType = key => groupByFn(x => y => x[key] === y[key])

/**
 * A grouper is either a function or a string
 */
type GrouperType = (<T>(x: T) => (y: T) => boolean) | string

/**
 * Group values from a list into a list of lists.
 *
 * @param {Function} grouper The function
 *
 * @example
 * groupBy(x => y => x % 2 === y % 2)([1,2,3,4,5]) = [[1,3,5], [2,4]]
 */
/**
 * Group objects from a list into a list of lists, based on the value
 * of the specified key.
 *
 * @param {string} grouper The key
 *
 * @example
 * groupBy('id')([{ id: 1 }, { id: 2 }, { id: 1 }]) = ([{ id: 1 }, { id: 1 }], [{ id: 2 }]
 */
module.exports = <T>(grouper: GrouperType): ((source: T[]) => T[][]) => {
  if (typeof grouper === "string") {
    return groupByKey(grouper)
  }

  return groupByFn(grouper)
}
