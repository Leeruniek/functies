const test = require("tape")
const flattenObj = require("./flatten-obj")

test("object::flatten", t => {
  t.deepEqual(
    flattenObj({
      id: 2,
      name: "a",
      Type: {
        id: 1,
        name: "b",
      },
    }),
    { id: 2, name: "a", type_id: 1, type_name: "b" },
    "flattenObj should work to the first level of nesting"
  )

  t.deepEqual(
    flattenObj({
      id: 2,
      name: "a",
      Type: {
        id: 1,
        name: "b",
        SubType: {
          id: 3,
          name: "c",
        },
      },
    }),
    {
      id: 2,
      name: "a",
      type_id: 1,
      type_name: "b",
      subtype_id: 3,
      subtype_name: "c",
    },
    "flattenObj should work to the second level of nesting"
  )

  const date = new Date()

  t.deepEqual(
    flattenObj({
      arr: [1, 2, 3],
      date,
    }),
    { arr: [1, 2, 3], date },
    "flattenObj should ignore non-Object objects"
  )

  // Create an object with a circular reference
  const a = {}

  a.self = a

  t.deepEqual(
    flattenObj(a),
    { b: 2 },
    "flattenObj should omit circular references"
  )

  t.end()
})
