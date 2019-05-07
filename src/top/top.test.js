import test from "tape"
import { top } from ".."

test("array::top", t => {
  t.deepEqual(
    top(2)([1, 2, 3]),
    [1, 2],
    "Return the first 2 elements from a 3 length array"
  )

  t.deepEqual(
    top(2)([1, 2]),
    [1, 2],
    "Return the first 2 elements from a 2 length array"
  )

  t.deepEqual(
    top(5)([1, 2, 3]),
    [1, 2, 3],
    "Return all elements if count grater than source length"
  )

  t.deepEqual(top(0)([1, 2, 3]), [], "Return empty array if count is 0")

  t.deepEqual(top(-3)([1, 2, 3]), [], "Return empty array if count is negative")

  t.deepEqual(top(2)(top(2)([1, 2, 3])), [1, 2], "Idempotent")

  const source = [1, 2]

  t.notEqual(top(2)(source), source, "Imutable")

  t.end()
})
