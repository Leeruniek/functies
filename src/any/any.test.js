import test from "tape"
import { any } from ".."

const isNumber = source => Number.isFinite(source)

test("core::any", t => {
  t.equal(
    any(isNumber)([1, "string", NaN]),
    true,
    "Check any element is number"
  )

  t.equal(any(isNumber)([null, "2", {}]), false, "Check any element is number")

  t.equal(any(isNumber)(2), true, "Check non array input")

  t.end()
})
