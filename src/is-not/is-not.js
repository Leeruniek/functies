/**
 * Test if a variable holds nothing
 *
 * @name isNot
 *
 * @tag Core
 * @signature isNot(source): boolean
 *
 * @param {any} source Source variable
 *
 * @return {boolean}
 *
 * @example
 *
 * isNot(null)      // => true
 * isNot(NaN)       // => true
 * isNot(undefined) // => true
 *
 * isNot(0)         // => false
 * isNot("")        // => false
 * isNot(false)     // => false
 */
module.exports = source =>
  source === null || source === undefined || Number.isNaN(source)
