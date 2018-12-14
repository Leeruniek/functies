const test = require("tape")
const groupBy = require("./group-by")

test("array::groupBy", t => {
  const sameParity = x => y => x % 2 === y % 2
  const key = "test"

  t.deepEqual(
    groupBy(sameParity)([1, 2, 3, 4, 5]),
    [[1, 3, 5], [2, 4]],
    "(sameParity)([1,2,3,4,5]) // => [[1,3,5], [2,4]]"
  )

  t.deepEqual(
    groupBy(key)([
      {
        test: "a",
      },
      {
        test: "b",
      },
      {
        test: "c",
      },
      {
        test: "b",
      },
    ]),
    [[{ test: "a" }], [{ test: "b" }, { test: "b" }], [{ test: "c" }]],
    "objects with the same value at the given key should be grouped"
  )

  t.end()
})
