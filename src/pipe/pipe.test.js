import test from "tape"
import { pipe } from ".."

test("core::pipe", t => {
  const inc = input => input + 1
  const sum = (a, b) => a + b

  t.deepEqual(
    pipe(
      inc,
      inc
    )(2),
    4,
    "first input arity 1"
  )

  t.deepEqual(
    pipe(
      sum,
      inc
    )(2, 2),
    5,
    "first input arity 2"
  )

  t.end()
})
