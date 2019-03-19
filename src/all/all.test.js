import test from "tape"
import { all, allBy } from ".."

const isNumber = source => Number.isFinite(source)

test("core::all", t => {
  t.equal(all(isNumber)([1, 2, 3]), true, "Check all elements are numbers")

  t.equal(
    all(isNumber)([null, "2", 3]),
    false,
    "Check all elements are numbers"
  )

  t.equal(all(isNumber)(2), true, "Check non array input")

  t.equal(
    allBy({
      id: isNumber,
    })([{ id: 1 }, { id: 2 }]),
    true,
    "Array of objects should have all items match given subset"
  )

  t.equal(
    allBy({
      "!id": isNumber,
    })([{ id: "1" }, { id: 2 }]),
    false,
    "Array of objects should not have all items match given subset"
  )

  t.end()
})
