import test from "tape"
import { zipWith, zip, zipFind, zipBy } from ".."

test("array::zip", t => {
  t.deepEqual(zip([1, 2])([3, 4]), [[1, 3], [2, 4]])

  t.deepEqual(zipWith(a => b => a + b)([1, 2])([3, 4]), [4, 6])

  t.end()
})

test("array::zipFind", t => {
  const as = [1, 2, 3, 4, 5]
  const bs = [9, 4, 25, 1, 16]

  t.deepEqual(zipFind(a => b => a * a === b)(as)(bs), [
    [1, 1],
    [2, 4],
    [3, 9],
    [4, 16],
    [5, 25],
  ])

  t.end()
})

test("array::zipBy", t => {
  const as = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
  const bs = [
    { test_id: 2 },
    { test_id: 1 },
    { test_id: 4 },
    { test_id: 5 },
    { test_id: 3 },
  ]

  t.deepEqual(zipBy(a => ({ test_id: a.id }))(as)(bs), [
    [{ id: 1 }, { test_id: 1 }],
    [{ id: 2 }, { test_id: 2 }],
    [{ id: 3 }, { test_id: 3 }],
    [{ id: 4 }, { test_id: 4 }],
    [{ id: 5 }, { test_id: 5 }],
  ])

  t.end()
})
