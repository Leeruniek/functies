/**
 * Test if string contains substring
 *
 * @name   contains
 * @param  {string}  search  Search string
 * @param  {string}  source  Source string
 *
 * @return {boolean}
 *
 * @tag String
 * @signature (search: string) => (source: string): boolean
 *
 * @example
 * contains("ipsum")("lorem ipsum")
 * // => true
 */
module.exports = search => source => source.includes(search)
