const any = require("../any/any").any
const reduce = require("../reduce/reduce").reduce

/**
 * Check if value is in array
 *
 * @param   {mixed}    arg     What to search for
 * @param   {Array}    source  Haystack
 *
 * @return  {boolean}  True if has, false otherwise
 *
 * @tag Array
 * @signature (value: Function|mixed )( source: Array ): boolean
 *
 * @example
 * has( 2 )( [ 1, 2 ] )
 * // => true
 * has( 3 )( [ 1, 2 ] )
 * // => false
 * has( elm => elm.id === 1 )([{}, {id: 1}])
 * // => true
 */
module.exports = arg =>
  typeof arg === "function"
    ? any(arg)
    : reduce((acc, val) => acc || arg === val, false)
