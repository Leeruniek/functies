// @flow

declare function partition<V, T: $ReadOnlyArray<V>>(
  fn: (x: V) => boolean
): T => [T, T]

type AccType<T> = {|
  pass: $ReadOnlyArray<T>,
  fail: $ReadOnlyArray<T>,
|}

/**
 * Split a list based on a predicate function.
 *
 * @signature
 * <V, T: $ReadOnlyArray<T>>(fn: (x: V) => boolean): T => [T, T]
 *
 * @param fn
 * A predicate function.
 *
 * @example
 * partition(x => x % 2 === 0)([1,2,3,4,5]) = [[2,4],[1,3,5]]
 *
 * @returns
 * A curried function taking a value of type `T`,
 * returning a two-tuple (list) of `T`s - the first element consists
 * of elements for which the predicate returned `true`, the second
 * of elements for which it returned `false`.
 */
export default function partition<V, T: $ReadOnlyArray<V>>(
  fn: (x: V) => boolean
): T => [T, T] {
  return (input: T): [T, T] => {
    const startingAcc: AccType<V> = { pass: [], fail: [] }

    const result = input.reduce((acc, val) => {
      if (fn(val)) {
        acc.pass = [...acc.pass, val]
      }

      acc.fail = [...acc.fail, val]

      return acc
    }, startingAcc)

    return [result.pass, result.fail]
  }
}
