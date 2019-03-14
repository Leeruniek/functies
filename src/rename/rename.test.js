import test from "tape"
import { rename } from ".."

test("object::rename", t => {
  const renamed = rename({
    test: "test2",
  })({ test: 2, unrelated: false })

  t.deepEqual(renamed, { test2: 2, unrelated: false })

  t.end()
})
