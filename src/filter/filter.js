// @flow

import type { FilterType } from "./filter.js.flow"

/**
 * Remove elements that dont match based on custom function
 *
 * @name   filter
 * @param  {Function}  fn  The function
 *
 * @return {Array}
 *
 * @tag Array
 * @signature ( fn: Function ) => ( source: Array): Array
 */
const filter: FilterType = <A>(fn) => source => source.filter(fn)

export { filter }
