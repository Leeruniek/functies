/**
 * Join all elements of an array into a string
 *
 * @tag Array
 * @signature (separator: string)(source: Array): string
 *
 * @param   {string}  separator  Separator between each adjacent elements
 * @param   {string}  source     Source string
 *
 * @return  {string}
 *
 * @example
 * join( "," )( [ "lorem", "ipsum" ] )
 * // => "lorem,ipsum"
 */
module.exports = (separator = ",") => source => {
  let result = ""

  if (Array.isArray(source)) {
    for (let i = 0, length = source.length; i < length; i++) {
      result =
        i === length - 1 ? result + source[i] : result + source[i] + separator
    }
  }

  return result
}
