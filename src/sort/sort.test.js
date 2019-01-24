import test from "tape"
import { sort, sortBy } from ".."

/**
 * Sort array using custom function
 *
 * @param  {Function}  fn      Sort function
 * @param  {Array}     source  Array
 *
 * @return {Array}
 *
 * @tag Array
 * @signature ( fn: Function ) => ( source: Array ): Array
 *
 * @example
 * sort((a,b) => a.id-b.id)([{id:2}, {id: 1}])
 * // => [{id:1}, {id: 2}]
 */
test("array::sort", t => {
  const source = [{ id: 2 }, { id: 1 }]

  t.deepEqual(
    sort((a, b) => a.id - b.id)(source),
    [{ id: 1 }, { id: 2 }],
    "Sort array of objects by field"
  )

  t.notEqual(
    sort((a, b) => a.id - b.id)(source),
    source,
    "Returned array is different (immutability)"
  )

  t.end()
})

/**
 * Sort an array of objects by a custom field
 *
 * @tag Array
 * @signature ( field: string, direction: string ) => ( input: Array ): Array
 *
 * @param  {string}  field      Sort field name
 * @param  {string}  direction  Sort direction
 * @param  {Array}   source     Input array
 *
 * @return {Array}
 *
 * @example
 * sortBy( "position" )( [
 *   { id: 1, position: 3 },
 *   { id: 2, position: 2 },
 *   { id: 3 },
 *   { id: 4, position: 5 },
 *   { id: 5, position: null },
 * ] )
 * // [
 * //  { id: 2, position: 2 },
 * //  { id: 1, position: 3 },
 * //  { id: 4, position: 5 },
 * //  { id: 5, position: null },
 * //  { id: 3 },
 * //]
 */
test("array::sortBy", t => {
  const mutateInput = [{ id: 5, position: null }]

  t.notEqual(
    sortBy("position")(mutateInput),
    mutateInput,
    "Does not mutate initial object"
  )

  t.deepEqual(
    sortBy("position")([
      { id: 5, position: null },
      { id: 3 },
      { id: 1, position: 3 },
      { id: 2, position: 2 },
      { id: 4, position: 5 },
    ]),
    [
      { id: 2, position: 2 },
      { id: 1, position: 3 },
      { id: 4, position: 5 },
      { id: 5, position: null },
      { id: 3 },
    ],
    "Sort by field with undefined at bottom"
  )

  t.deepEqual(
    sortBy("position")([]),
    [],
    "Sorting an empty array should return an empty array"
  )

  t.end()
})
