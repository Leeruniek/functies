import test from "tape"
import { findIndexBy } from ".."

/**
 * Find the position of first element that matches the filter criteria
 *
 * @name       findIndexBy
 * @tag        Array
 * @signature  (filter: Object) => (source: Object[]): number
 *
 * @param  {Object}    filter  Object containing one or more fields
 * @param  {Object[]}  source  Source input
 *
 * @return {number}
 *
 * @example
 * const comments = [{id: 1, body: ""}, {id: 2, body: "dolor"}]
 *
 * findIndexBy({id: 2})(comments)
 * // 1
 * findIndexBy({id: 3})(comments)
 * // -1
 */
test("array::findIndexBy", t => {
  const comments = [{ id: 1, body: "" }, { id: 2, body: "dolor" }]

  t.equals(
    findIndexBy({ id: 2 }, []),
    -1,
    "uncurried - index of id:2 in empty array should be -1"
  )

  t.equals(
    findIndexBy({ id: 2 })(comments),
    1,
    "curried - index of id:2 should be 1"
  )

  t.equals(
    findIndexBy({ id: 3 })(comments),
    -1,
    "curried - index id:3 should be -1 (not found)"
  )

  t.end()
})
