/**
 * Test if string contains substring
 *
 * @name       contains
 * @tag        String
 * @signature  (search: string) => (source: string): boolean
 *
 * @param  {string}  search  Search string
 * @param  {string}  source  Source string
 *
 * @returns {boolean}
 *
 * @example
 * contains("ipsum")("lorem ipsum")
 * // => true
 */
const contains = search => source => source.includes(search)

export { contains }
