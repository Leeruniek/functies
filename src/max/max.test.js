import test from "tape"
import { max } from ".."

test("array::max", t => {
  t.deepEqual(max([-1, 1, 10, 3]), 10, "max([-1, 1, 10, 3]) // => 10")

  t.deepEqual(max([]), 0, "max([]) // => 0 (neutral element)")

  const fn = element => new Date(element.time)
  const source = [
    { time: "2018-05-15T11:20:07.754110Z" },
    { time: "2018-06-11T09:01:54.337344Z" },
    { time: "2018-06-08T08:26:12.711071Z" },
  ]

  t.deepEqual(
    max(fn)(source),
    { time: "2018-06-11T09:01:54.337344Z" },
    "Custom transform function"
  )

  t.end()
})
