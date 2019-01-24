const pipe = require("../pipe/pipe").pipe
const filterBy = require("../filter/filter").filterBy
const get = require("../get/get")
const gt = require("../gt/gt")
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
const has = arg => typeof arg === "function" ? any(arg) : any(val => val === arg)

const hasKey = key => obj => typeof obj.hasOwnProperty === "function" && obj.hasOwnProperty(key)

const hasWith = obj => any(filterBy(obj))

export { has, hasKey, hasWith }
