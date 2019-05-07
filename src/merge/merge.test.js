import test from "tape"
import { merge, mergeWith } from ".."

test("object::merge", t => {
  const obj1 = { a: undefined }
  const obj2 = { a: "lorem", b: "ipsum", c: 41 }
  const obj3 = { c: 42, b: undefined }
  const result = merge(obj1, obj2, obj3)

  t.deepEqual(
    result,
    { a: "lorem", b: "ipsum", c: 42 },
    "3 objects should be merged into one"
  )

  t.notEqual(result, obj1, "result should not equal first obj")

  t.notEqual(result, obj2, "result should not equal second obj")

  t.end()
})

test("object::mergeWith", t => {
  const obj1 = { isLoading: true, isLoaded: false }
  const obj2 = { isLoading: false, isLoaded: true }

  t.deepEqual(
    mergeWith({ isLoading: a => b => a || b, isLoaded: a => b => a && b })(
      obj1,
      obj2
    ),
    { isLoading: true, isLoaded: false }
  )

  t.end()
})
