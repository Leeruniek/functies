import { curry } from "../curry/curry"

/**
 * Test if string ends with substring (callable curried or uncurried).
 *
 * @name       endsWith
 * @tag        String
 * @signature  (search: string, source: string): boolean
 * @see        {@link contains}
 *
 * @param  {string}  search  Search string
 * @param  {string}  source  Input string
 *
 * @return {boolean} True if `source` ends with `search`, false otherwise
 *
 * @example
 * endWith("ipsum")("lorem ipsum")
 * // => true
 */
const endsWith = curry((search, source) => source.endsWith(search))

export { endsWith }
