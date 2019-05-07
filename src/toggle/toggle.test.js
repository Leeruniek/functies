import test from "tape"
import { toggle } from ".."

test("array::toggle", t => {
  t.deepEqual(
    toggle(2)([1, 2, 3]),
    [1, 3],
    "(2)([1,2,3]) // should remove element"
  )

  t.deepEqual(
    toggle(2)([1, "2", 3]),
    [1, "2", 3, 2],
    '(2)([1,"2",3]) // should push element'
  )

  t.end()
})
