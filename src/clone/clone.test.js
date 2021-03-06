import test from "tape"
import { clone } from ".."

test("core::clone", t => {
  /*
   * Primitives
   */
  t.equal(clone(null), null, "Clone null")
  t.equal(clone(undefined), undefined, "Clone undefined")
  t.equal(clone(2), 2, "Clone number")
  t.equal(clone("3"), "3", "Clone number")
  t.equal(clone(true), true, "Clone boolean")

  /*
   * Date
   */
  const date = new Date(86400000)

  t.notEqual(clone(date), date, "Imutable date")
  t.equal(clone(date).getTime(), 86400000, "Clone date")

  /*
   * Array
   */
  const array = [1, 2, 3]

  t.notEqual(clone(array), array, "Imutable array")
  t.deepEqual(clone(array), [1, 2, 3], "Clone array")

  /*
   * Object
   */
  const object = { a: 1, b: 2, c: 3 }

  t.notEqual(clone(object), object, "Imutable object")
  t.deepEqual(clone(object), { a: 1, b: 2, c: 3 }, "Clone object")

  /*
   * Recursive
   */
  const recursiveObject = { a: [{ foo: "bar" }], b: 2, c: 3 }

  t.deepEqual(
    clone(recursiveObject),
    { a: [{ foo: "bar" }], b: 2, c: 3 },
    "Clone object with non-primitive properties"
  )

  t.notEqual(
    clone(recursiveObject).a[0],
    recursiveObject.a[0],
    "Imutable recursive object"
  )

  t.end()
})
