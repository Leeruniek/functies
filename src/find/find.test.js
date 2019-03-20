import test from "tape"
import { find, findBy } from ".."

test("array::find", t => {
  const comments = [{ id: 1, body: "" }, { id: 2, body: "dolor" }]

  t.deepEqual(
    find(element => element.id === 2)(comments),
    { id: 2, body: "dolor" },
    "find with id:2 should return found object"
  )

  t.equal(
    find(element => element.id === 3)(comments),
    undefined,
    "find with id:3 should return undefined (not found)"
  )

  t.end()
})

test("array::findBy", t => {
  t.deepEqual(
    findBy({
      "!id": 1,
    })([{ id: 1, body: "" }, { id: 2, body: "dolor" }]),
    { id: 2, body: "dolor" }
  )

  t.end()
})
