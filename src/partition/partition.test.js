const test = require("tape")
const partition = require("./partition")

test("array::partition", t => {
  const equalsTwo = x => x === 2

  t.deepEqual(
    partition(equalsTwo)([2, 2, 1, 1, 2]),
    [[2, 2, 2], [1, 1]],
    "(equalsTwo)([2,2,1,1,2]) // => [[2,2,2],[1,1]]"
  )

  t.deepEqual(
    partition(equalsTwo)([1]),
    [[], [1]],
    "(equalsTwo)([1]) // => [[], [1]]"
  )

  t.end()
})
