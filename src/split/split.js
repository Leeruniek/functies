/**
 * Splits a String object into an array of strings by separating the string
 * into substrings, using a specified separator string to determine where to
 * make each split.
 *
 * @name    split
 *
 * @tag String
 * @signature ( separator: string|RegExp )( source: string ): Array
 *
 * @param   {string|RegExp}  separator  Points where each split should occur
 * @param   {string}         source     Source string
 *
 * @return  {Array}
 *
 * @example
 * split( "," )( "lorem,ipsum" )
 * // [ "lorem", "ipsum" ]
 */
const split = separator => source => "".split.call(source, separator)

export { split }
