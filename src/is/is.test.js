import test from "tape"
import { is } from ".."

test("core::is", t => {
  t.equal(is(false), true, "false is something")

  t.equal(is(0), true, "0 is something")

  t.equal(is(""), true, '"" is something')

  t.equal(is(null), false, "null is not something")

  t.equal(is(undefined), false, "undefined is not something")

  t.equal(is(NaN), false, "NaN is not something")

  t.end()
})
