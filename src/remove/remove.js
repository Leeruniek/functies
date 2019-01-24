import { filter } from "../filter/filter"

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
const remove = value => filter(element => element !== value)

export { remove }
