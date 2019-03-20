import test from "tape"

import { is, filter, filterBy } from ".."

test("array::filter", t => {
  t.deepEqual(filter(is)([1, 2, null, 3, undefined]), [1, 2, 3])

  t.end()
})

test("array::filterBy", t => {
  t.deepEqual(
    filterBy({
      id: is,
    })([
      { id: 1 },
      { id: null, name: "test" },
      { id: 3, foo: "bar" },
      { name: "test" },
    ]),
    [{id: 1}, {id: 3, foo: "bar"}]
  )

  t.end()
})
