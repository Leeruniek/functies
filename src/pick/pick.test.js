import test from "tape"
import { pick, pickKeys } from ".."

test("object::pick", t => {
  const source = {
    lorem: "ipsum",
    dolor: "amet",
  }

  t.deepEqual(pick(key => () => key === "lorem")(source), { lorem: "ipsum" })

  t.deepEqual(pick(() => value => value.includes("m"))(source), {
    lorem: "ipsum",
    dolor: "amet",
  })

  t.end()
})

test("object::pickKeys", t => {
  const source = {
    lorem: "ipsum",
    dolor: "amet",
  }

  t.deepEqual(
    pickKeys(["dolor", "lorem"])(source),
    { lorem: "ipsum", dolor: "amet" },
    "All existing keys"
  )

  t.deepEqual(
    pickKeys(["lorem", "not-exist"])(source),
    { lorem: "ipsum" },
    "Some non-existing keys"
  )

  t.deepEqual(pickKeys(["not-exist"])(source), {}, "All non-existing keys")

  t.end()
})
