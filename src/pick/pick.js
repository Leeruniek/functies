// @flow

import { pipe } from "../pipe/pipe"
import { entries, fromEntries } from "../entries/entries"
import { filter } from "../filter/filter"
import type { PickType, PickKeysType } from "./pick.js.flow"

/**
 * Returns a partial copy of an object containing only the key-value pairs
 * for which the provided predicate function returns true.
 *
 * @name       pick
 */
const pick: PickType = fn =>
  pipe(
    entries,
    filter(([key, value]) => fn(key)(value)),
    fromEntries
  )

/**
 * Returns a partial copy of an object containing only the keys specified.
 * If the key does not exist, the property is ignored.
 *
 * @name       pickKeys
 *
 * @signature ( keys: string[] ) => ( source: Object ): Object
 *
 * @param keys
 * The properties to keep from the source
 *
 * @param source (implicit)
 * The input object
 *
 * @return
 * The input object, minus any keys which
 *
 * @example
 * pick(["id", "name"])({id: 2, name: "lorem", description: "lorem ipsum"})
 * // => {id: 2, name: lorem}
 */
const pickKeys: PickKeysType = keys => pick(key => () => keys.includes(key))

export { pick, pickKeys }
