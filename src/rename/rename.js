// @flow

import { pipe } from "../pipe/pipe"
import { entries, fromEntries } from "../entries/entries"
import { map } from "../map/map"
import type { RenameType } from "./rename.js.flow"

/**
 * Rename object properties.
 *
 * @param keys
 * A mapping from old names to new ones
 *
 * @param source (implicit)
 * The object to rename keys of
 *
 * @example
 * rename({
 *   test: "test2"
 * })({ test: 2, unrelated: false }) = { test2: 2, unrelated: false }
 */
const rename: RenameType = keys =>
  pipe(
    entries,
    map(([key, value]) => (keys[key] ? [keys[key], value] : [key, value])),
    fromEntries
  )

export { rename }
