import test from "tape"
import { zipWith, zip } from "./zip"

test("array::zip", t => {
  t.deepEqual(zip([1,2])([3,4]), [[1,3],[2,4]])

  t.deepEqual(zipWith(a => b => a + b)([1,2])([3,4]), [4, 6])

  t.end()
})
