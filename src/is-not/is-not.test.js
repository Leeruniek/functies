import test from "tape"
import { isNot } from ".."

test("core::isNot", t => {
  t.equal(isNot(false), false, '"false" is something // => false')

  t.equal(isNot(0), false, '"0" is something // => false')

  t.equal(isNot(""), false, '"" is something // => false')

  t.equal(isNot(null), true, "null is not something // => true")

  t.equal(isNot(undefined), true, "undefined is not something // => true")

  t.equal(isNot(NaN), true, "NaN is not something // => true")

  t.end()
})
