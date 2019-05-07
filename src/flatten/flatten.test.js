import test from "tape"
import { flatten, flattenBranches } from ".."

test("array::flatten", t => {
  t.deepEqual(flatten([]), [], "[] should equal []")

  t.deepEqual(flatten([[[]]]), [], "[ [ [] ] ] should equal []")

  t.deepEqual(flatten([[[1]]]), [1], "[ [ [1] ] ] should equal [ 1 ]")

  t.deepEqual(
    flatten([1, [2], [3, [4]]]),
    [1, 2, 3, 4],
    "[ 1, [2], [3, [4]], [] ] should equal [ 1, 2, 3, 4 ]"
  )

  t.end()
})

test("array:flattenBranches", t => {
  t.deepEqual(
    flattenBranches([1, 2, [3, 4]]),
    [[1, 2, 3], [1, 2, 4]],
    "should flatten a single branch"
  )

  t.deepEqual(
    flattenBranches([1, [2, 3], [4, 5]]),
    [[1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5]],
    "should return all permutations of given branches"
  )

  t.end()
})
