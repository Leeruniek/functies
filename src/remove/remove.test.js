import test from "tape"
import { remove } from ".."

test("array::remove", t => {
  t.deepEquals(remove(2)([1, 2, 3]), [1, 3], "Remove existing value from array")

  t.deepEquals(
    remove(13)([1, 2, 3]),
    [1, 2, 3],
    "Remove not-existing value from array"
  )

  t.deepEquals(
    remove(null)([1, null, 2, 3, null]),
    [1, 2, 3],
    "Remove value that exists multiple times in array"
  )

  t.end()
})
