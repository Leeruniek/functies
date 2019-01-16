/* eslint-disable no-unused-vars */
// @flow

import { pipe } from "../pipe/pipe"
import type { MapOneType, MapType } from "./map.js.flow"

// Map a single function over an array
const mapOne: MapOneType = <A, B>(fn) => source =>
  Array.isArray(source) ? source.map(fn) : [fn(source)]

/**
 * Iterate over an input list, calling `fn` for each element, return a new
 * array
 *
 * @name   map
 *
 * @param  {Function}  fn    The function
 * @param  {Array}        list  Array
 *
 * @return {Array}
 */
const map: MapType = <A, B>(...fns) => source => mapOne(pipe(...fns))(source)

export { map }
