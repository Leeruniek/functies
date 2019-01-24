/**
 * Sort array using custom function
 *
 * @name   sort
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
const sort = fn => source => [...source.sort(fn)]

/**
 * Sort an array of objects by a custom field
 *
 * @name   sortBy
 *
 * @tag Array
 * @signature ( field: string, direction: string ) => ( source: Array ): Array
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
const sortBy = (field, direction = "asc") => source => {
  const result = Array.isArray(source) ? [...source] : [source]

  return result.sort((alice, bob) => {
    const aliceValue =
      alice[field] ||
      (direction === "asc"
        ? Number.POSITIVE_INFINITY
        : Number.NEGATIVE_INFINITY)

    const bobValue =
      bob[field] ||
      (direction === "asc"
        ? Number.POSITIVE_INFINITY
        : Number.NEGATIVE_INFINITY)

    return alice[field] === null && typeof bob[field] === "undefined"
      ? -1
      : aliceValue < bobValue
      ? direction === "asc"
        ? -1
        : 1
      : direction === "asc"
      ? 1
      : -1
  })
}

export { sort, sortBy }
