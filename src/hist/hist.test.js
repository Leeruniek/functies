import test from "tape"
import { hist } from ".."

test("array::hist", t => {
  const scores = [
    {
      name: "Bob",
      score: 1,
    },
    {
      name: "Alice",
      score: 10,
      subject: "Math",
    },
    {
      name: "Hatter",
      score: 10,
      subject: "Math",
    },
  ]

  t.deepEqual(
    hist("score")(scores),
    { 1: 1, 10: 2 },
    "object with distinct values and their occurrence"
  )

  t.deepEqual(
    hist("subject")(scores),
    { Math: 2 },
    "object with occurrences even if field is not defined on some elements"
  )

  t.end()
})
