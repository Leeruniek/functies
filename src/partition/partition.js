// @flow

/**
 * partition splits a list based on a predicate function.
 *
 * (a -> Bool) -> a -> ([a], [a])
 *
 * @name    partition
 *
 * @param   p       The predicate function, which returns a
 *                              truthy or falsy value for every value given
 *                              an input
 *
 * @param   input   List of values to test
 *
 * @return        2-tuple of arrays. The first array consists
 *                              of values for which the predicate returned
 *                              a truthy value, the second of values for
 *                              which it returned a falsy value.
 */

declare type UnaryPredicateFn<T> = (x: T) => boolean

const partition = <T>(p: UnaryPredicateFn<T>): ((T[]) => [T[], T[]]) => (
  input: T[]
): [T[], T[]] => {
  const result = input.reduce(
    (acc, val) => {
      if (p(val)) {
        acc.pass = [...acc.pass, val]
      }

      acc.fail = [...acc.fail, val]

      return acc
    },
    { pass: [], fail: [] }
  )

  return [result.pass, result.fail]
}

const arr: number[] = [1, 2, 3, 4, 5]

partition<number>(x => x % 2 === 0)(arr)

module.exports = partition
