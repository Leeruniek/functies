import test from "tape"
import { prop } from ".."

test("object::prop", t => {
  t.equal(
    prop("lorem")({
      lorem: "ipsum",
    }),
    "ipsum",
    "Get existing property"
  )

  t.equal(
    prop("not-exist")({
      lorem: "ipsum",
    }),
    undefined,
    "Get non-existing property // undefined"
  )

  t.equal(
    prop("not-exist")(undefined),
    undefined,
    "Get prop from undefined // undefined"
  )

  t.equal(
    prop("not-exist")(2),
    undefined,
    "Get prop from non object // undefined"
  )

  t.end()
})
