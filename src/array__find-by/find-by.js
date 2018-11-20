const isMatch = require("../core__is-match/is-match")
const find = require("../array__find/find")
const is = require("../core__is/is")

/**
 * Find the first element that matches the filter criteria
 *
 * @param  {Object}  filter    Object containing one or more fields
 * @param  {Any}     notFound  Value to return in case not found
 * @param  {Object}  input     Object containing one or more fields
 *
 * @return  {Object|undefined}  First element that matches
 *
 * @example
 * const comments = [ { id: 1, body: "" }, { id: 2, body: "dolor" } ]
 *
 * findBy( { id: 2 } )( comments )
 * // => { id: 2, body: "dolor" }
 */
module.exports = (filter, notFound) => input => {
  const result = find(x => isMatch(filter)(x))(input)

  return is(result) ? result : notFound
}
