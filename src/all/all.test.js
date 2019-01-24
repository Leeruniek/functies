import test from "tape"
import { all } from ".."

const isNumber = source => Number.isFinite(source)

test("core::all", t => {
  t.equal(all(isNumber)([1, 2, 3]), true, "Check all elements are numbers")

  t.equal(
    all(isNumber)([null, "2", 3]),
    false,
    "Check all elements are numbers"
  )

  t.equal(all(isNumber)(2), true, "Check non array input")

  t.end()
})
