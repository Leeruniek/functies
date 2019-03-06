import { reduce } from "../reduce/reduce"
import { isEmpty } from "../is-empty/is-empty"
import { push } from "../push/push"

/**
 * Index an array of objects by field. Only truthy fields will be indexed.
 *
 * @param  {string}  field  The field to index by
 * @param  {Array}   array  Input
 *
 * @return {Object}
 *
 * @tag Array
 * @signature (field: string) => (source: Object[]): Object
 *
 * @example
 * indexBy("id")([
 *   {id: 1, user_id: 2},
 *   {id: 2, user_id: 3},
 * ])
 * // => {
 * //   1: [{id: 1, user_id: 2}],
 * //   2: [{id: 2, user_id: 3}],
 * // }
 */
const indexBy = (key, startingObj = {}) =>
  reduce((acc, val) => {
    if (isEmpty(val[key])) {
      return acc
    }

    return {
      ...acc,
      [val[key]]: isEmpty(acc[val[key]]) ? [val] : push(val)(acc[val[key]]),
    }
  }, startingObj)

export { indexBy }
