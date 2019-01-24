/**
 * Test if string ends with substring
 *
 * @name   endsWith
 * @param  {string}  search  Search string
 * @param  {string}  source  Source string
 *
 * @return {boolean}
 *
 * @tag String
 * @signature (search: string) => (source: string): boolean
 *
 * @example
 * endWith("ipsum")("lorem ipsum")
 * // => true
 */
const endsWith = search => source => source.endsWith(search)

export { endsWith }
