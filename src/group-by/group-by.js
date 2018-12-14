const partition = require("../partition/partition")

const groupByFn = f => input => {
  if (input.length === 0) {
    return input
  }

  const [head, ...tail] = input

  const [sameGroup, otherGroup] = partition(f(head))(tail)

  return [[head, ...sameGroup], ...groupByFn(f)(otherGroup)]
}

const groupByKey = key => {
  return groupByFn(x => y => x[key] === y[key])
}

/**
 * groupBy groups values from a list into a list of lists.
 *
 * @param   {Function|Object} grouper   A *curried* function which takes two
 *                                      values, returning a boolean (true if
 *                                      they should be grouped, false
 *                                      otherwise.) The default behavior.
 *                                      See `groupByFn`.
 *
 *                                      If the input is a string, groups
 *                                      a list of objects by the value of the
 *                                      corresponding key. See `groupByKey`.
 * @param   {[]}              implicit  List of values to be grouped
 *
 * @return {[[]]}                       List of lists of values in the same
 *                                      group
 *
 * @example
 * groupBy(x => y => x % 2 === y % 2)([1,2,3,4,5]) = [[1,3,5], [2,4]]
 */
module.exports = grouper => {
  if (typeof grouper === "string") {
    return groupByKey(grouper)
  }

  return groupByFn(grouper)
}
