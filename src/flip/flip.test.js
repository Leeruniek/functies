import test from "tape"
import { flip, flipUncurried } from ".."

test("flip", t => {
  const divide = a => b => a / b

  const flipDiv = flip(divide)

  t.equal(flipDiv(2)(10), 5)

  t.end()
})

test("flipUncurried", t => {
  const objA = {
    id: 1,
    name: "test",
    apple: true,
  }

  const objB = {
    id: 3,
    name: "tset",
    banana: false,
  }

  const mergeUncurried = (a, b) => ({
    ...a,
    ...b,
  })

  const flippedMerge = flipUncurried(mergeUncurried)

  t.deepEqual(flippedMerge(objA, objB), {
    id: 1,
    name: "test",
    apple: true,
    banana: false,
  })

  t.end()
})
