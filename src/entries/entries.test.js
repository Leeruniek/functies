import test from "tape"
import { entries, fromEntries } from ".."

test("object::fromEntries", t => {
  t.deepEqual(fromEntries([["id", 1], ["name", "test"], ["sub", { id: 2 }]]), {
    id: 1,
    name: "test",
    sub: {
      id: 2,
    },
  })

  t.deepEqual(
    entries({
      foo: "bar",
      alice: "bob",
    }),
    [["foo", "bar"], ["alice", "bob"]]
  )

  t.end()
})
