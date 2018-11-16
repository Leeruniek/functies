const test = require("tape")
const sortBy = require("./sort-by")

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
test("array::sortBy( field: string, direction: string ) => ( source: Array ): Array", t => {
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
