import test from "tape"
import { indexBy } from ".."

/**
 * Index an array of objects by field. Only truthy fields will be indexed.
 *
 * @param  {string}  field  The field to index by
 * @param  {Array}   array  Input
 *
 * @return {Object}
 *
 * @tag Array
 * @signature (field: string) => (source: Object[]): Object
 *
 * @example
 * indexBy("id")([
 *   {id: 1, user_id: 2},
 *   {id: 2, user_id: 3},
 * ])
 * // => {
 * //   1: {id: 1, user_id: 2},
 * //   2: {id: 2, user_id: 3},
 * // }
 */
test("array::indexBy", t => {
  t.deepEqual(
    indexBy("id")([{ id: 1, label: "test" }, { id: 2, label: "foo" }]),
    {
      1: [{ id: 1, label: "test" }],
      2: [{ id: 2, label: "foo" }],
    },
    "index object array by existing field"
  )

  t.deepEqual(
    indexBy("id")([
      { id: 1, label: "test" },
      { id: 2, label: "foo" },
      { label: "foo bar" },
    ]),
    {
      1: [{ id: 1, label: "test" }],
      2: [{ id: 2, label: "foo" }],
    },
    "index object array by existing field"
  )

  t.deepEqual(
    indexBy("approach")([
      { id: 1, approach: "basic" },
      { id: 2, approach: "basic" },
      { id: 3, approach: "enriched" },
      { id: 4, approach: "basic" },
    ]),
    {
      basic: [
        { id: 1, approach: "basic" },
        { id: 2, approach: "basic" },
        { id: 4, approach: "basic" },
      ],
      enriched: [{ id: 3, approach: "enriched" }],
    }
  )

  t.end()
})
