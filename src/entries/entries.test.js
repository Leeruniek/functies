import test from "tape"
import { fromEntries } from ".."

test("object::fromEntries", t => {
  const entries = [
    ["id", 1],
    ["name", "test"],
    [
      "sub",
      {
        id: 2,
      },
    ],
  ]

  t.deepEqual(fromEntries(entries), {
    id: 1,
    name: "test",
    sub: {
      id: 2,
    },
  })

  t.end()
})
