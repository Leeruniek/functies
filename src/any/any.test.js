import test from "tape"
import { any, anyBy } from ".."

const isNumber = source => Number.isFinite(source)

test("core::any", t => {
  t.equal(
    any(isNumber)([1, "string", NaN]),
    true,
    "Check any element is number"
  )

  t.equal(any(isNumber)([null, "2", {}]), false, "Check any element is number")

  t.equal(any(isNumber)(2), true, "Check non array input")

  t.equal(
    anyBy({
      id: isNumber,
      name: "lorem",
    })([
      { id: "uuid", name: "lorem" },
      { id: 2, name: "foo" },
      { id: 3, name: "lorem", foo: "bar" },
    ]),
    true,
    "Array should contain object that satisfies conditions"
  )

  t.equal(
    anyBy({
      id: isNumber,
      name: "lorem",
    })([
      { id: "uuid", name: "lorem" },
      { id: 2, name: "foo" },
      { id: "3", name: "lorem", foo: "bar" },
    ]),
    false,
    "Array should not contain object that satisfies conditions"
  )

  t.end()
})
