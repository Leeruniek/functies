const test = require("tape")
const isNot = require("./is-not")

/**
 * Test if a variable holds nothing
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
test("core::isNot", t => {
  t.equal(isNot(false), false, '"false" is something // => false')

  t.equal(isNot(0), false, '"0" is something // => false')

  t.equal(isNot(""), false, '"" is something // => false')

  t.equal(isNot(null), true, "null is not something // => true")

  t.equal(isNot(undefined), true, "undefined is not something // => true")

  t.equal(isNot(NaN), true, "NaN is not something // => true")

  t.end()
})
