import test from "tape"
import { join } from ".."

test("array::join", t => {
  const source = ["lorem", "ipsum"]

  t.equals(join(",")(source), "lorem,ipsum", "Join array with 2 string into 1")

  t.equals(join(",")([]), "", "Joining empty array // => empty string")

  t.equals(join(",")(null), "", "Joining non array // => empty string")

  t.end()
})
