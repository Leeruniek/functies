/* eslint-disable no-unused-vars */
// @flow

import { map } from "../map/map"
import { reduce } from "../reduce/reduce"
import { flattenBranches } from "../flatten/flatten"
import type { LensType, LensesType } from "./lens.js.flow"

/**
 * Create a pair of lenses - functions for retrieving or updating
 * the value at an object key.
 *
 * The lens functions will throw errors if they are passed objects
 * which are invalid for the lens.
 *
 * @param keys
 * The path to the value to make lenses for. This must be flat.
 *
 * @return
 * A 2-tuple of lenses - the getter and the setter
 *
 * @example
 * lens("a", "b", "id")({ a: { b: { id: 1 } } }) = [get, set]
 *
 * where get(obj)    => 1
 *       set(3)(obj) => { a: { b: { id: 3 } } }
 */
const lens: LensType = <A>(...keys) => {
  const get = obj =>
    reduce((acc, key) => {
      if (!acc) {
        throw new Error("Lens input invalid")
      }

      return acc[key]
    }, obj)(keys)

  const set = value => obj =>
    reduce((acc, key, idx) => {
      if (!acc) {
        throw new Error("Lens input invalid")
      }

      if (idx === keys.length - 1) {
        acc[key] = value

        return acc
      }

      return acc[key]
    }, obj)(keys)

  return [get, set]
}

/**
 * A version of lens that allows nesting, allowing for the creation of
 * multiple lenses simultaneously. Be careful with this one, it's subject
 * to combinatorial explosion.
 *
 * @example
 * _lenses("a", "b", ["id", "name"]) = [
 *   lens("a", "b", "id")
 *   lens("a", "b", "name")
 * ]
 *
 * _lenses("a", ["b", "c"], ["id", "name"]) = [
 *   lens("a", "b", "id")
 *   lens("a", "b", "name")
 *   lens("a", "c", "id")
 *   lens("a", "c", "name")
 * ]
 */
const _lenses = (...keys) => {
  const paths = flattenBranches(...keys)

  return map(path => lens(...path))(paths)
}

/**
 * Make several lenses at once, which may be completely unrelated to one
 * another.
 *
 * Imagine we have an object:
 *
 * {
 *   a: {
 *     b: {
 *       id: 1,
 *       name: "Test"
 *     },
 *     c: {
 *       banana: 1,
 *       message: "Error"
 *     }
 *   }
 * }
 *
 * @example
 * lenses(
 *   ["a", "b", ["id", "name"]],
 *   ["a", "c", "banana"]
 * ) = [
 *   [[getId, setId], [getName, setName]],
 *   [getBanana, setBanana]
 * ]
 */
const lenses: LensesType = <A>(...paths) => map(_lenses)(paths)

export { lens, lenses }
