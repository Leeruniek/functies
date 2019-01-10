const filter = require("../filter/filter")

/**
 * { lambda_description }
 *
 * @name   remove
 *
 * @param  {mixed}  value  Value to remove
 * @param  {Array}  array  Array from where to remove
 *
 * @return {Array}
 */
module.exports = value => filter(element => element !== value)
