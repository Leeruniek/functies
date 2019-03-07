// @flow

import { reduce } from "../reduce/reduce"
import type { EntriesType, FromEntriesType } from "./entries.js.flow"

/**
 * Return an array of key-value pairs corresponding to the key-value
 * pairs of an Object.
 *
 * @param object (implicit)
 * The object to return key-value pairs for
 *
 * @return
 * Key-value pairs (2-tuples)
 *
 * @example
 * entries({ id: 1, name: "test" }) = [["id", 1], ["name", "test"]]
 */
const entries: EntriesType = Object.entries

/**
 * Given an array of key-value tuples, construct an Object.
 *
 * @param entries (implicit)
 * The key-value pairs to create the object from
 *
 * @return
 * An object with the given key-value pairs
 *
 * @example
 * fromEntries([["id", 1], ["name", "test"]]) = {
 *   id: 1,
 *   name: "test"
 * }
 */
const fromEntries: FromEntriesType = reduce(
  (acc, [key, val]) => ({
    ...acc,
    [key]: val,
  }),
  {}
)

export { entries, fromEntries }
