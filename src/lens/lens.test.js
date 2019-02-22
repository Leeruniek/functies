import test from "tape"
import { lens, lenses } from ".."

test("function::lens", t => {
  const [getId, setId] = lens("a", "b", "id")

  const myObj = { a: { b: { id: 1 } } }

  t.equal(getId(myObj), 1)

  setId(3)(myObj)

  t.equal(getId(myObj), 3)

  t.end()
})

test("function::lenses", t => {
  const [[[getId], [getName]], [[getBanana, setBanana]]] = lenses(
    ["a", "b", ["id", "name"]],
    ["a", "c", "banana"]
  )

  const myObj = {
    a: {
      b: {
        id: 1,
        name: "Test",
      },
      c: {
        banana: 1,
        message: "Error",
      },
    },
  }

  t.equal(getId(myObj), 1)
  t.equal(getName(myObj), "Test")
  t.equal(getBanana(myObj), 1)

  setBanana(7)(myObj)

  t.equal(getBanana(myObj), 7)

  t.end()
})
