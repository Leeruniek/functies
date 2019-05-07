import test from "tape"
import { min } from ".."

test("array::min", t => {
  t.deepEqual(min([-1, 1, 10, 3]), -1, "min([-1, 1, 10, 3]) // => -1")

  t.deepEqual(min([]), 0, "min([]) // => 0 (neutral element)")

  t.end()
})
