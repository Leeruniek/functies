import test from "tape"
import { tail } from ".."

test("array::tail", t => {
  t.deepEqual(
    tail([1, 2, 3]),
    [2, 3],
    "array with last elements inside non-empty source array"
  )

  t.deepEqual(tail([]), [], "empty array in empty source array")

  t.deepEqual(tail([1]), [], "empty array in 1 element source array")

  t.end()
})
