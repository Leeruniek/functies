// @flow

/**
 * partition splits a list based on a predicate function.
 *
 * @sig (fn: (T: boolean)) => (input: T[]): [T[], T[]]
 *
 * **`(fn: (T: boolean)) => (input: T[]): [T[], T[]]`**
 */
module.exports = function partition<T>(
  fn: (x: T) => boolean
): (T[]) => [T[], T[]] {
  return (input: T[]): [T[], T[]] => {
    const result = input.reduce(
      (acc, val) => {
        if (fn(val)) {
          acc.pass = [...acc.pass, val]
        }

        acc.fail = [...acc.fail, val]

        return acc
      },
      { pass: [], fail: [] }
    )

    return [result.pass, result.fail]
  }
}
