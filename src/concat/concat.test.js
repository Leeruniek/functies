import test from "tape"
import { concat } from ".."

test("core::concat", t => {
  t.deepEquals(concat([1, 2])([2, 3]), [1, 2, 2, 3], "Concatenate 2 arrays")
  t.deepEquals(concat([])([]), [], "Concatenate 2 empty arrays")
  t.deepEquals(concat(2)([1]), [2, 1], "Concatenate non array with array")
  t.deepEquals(concat([1])(2), [1, 2], "Concatenate array with array non array")
  t.deepEquals(concat(2)(1), [2, 1], "Concatenate non array with non array")

  t.end()
})
