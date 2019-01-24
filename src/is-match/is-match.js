import { all } from "../all/all"

/**
 * Determines if one object's properties are equal to another
 *
 * @name   isMatch
 *
 * @tag Core
 * @signature (subset: Object)(source: Object): boolean
 *
 * @param  {Object}   subset  Set of properties that should match
 * @param  {Object}   source  Object matching against
 *
 * @return {boolean}  True if all "subset" properties are of equal (shallow
 *                    compare) value to properties in "source" object,
 *                    otherwise false
 *
 * @example
 *
 * isMatch({
 *  id: 2,
 *  parentId: null,
 * })({
 *  id: 2,
 *  parentId: null
 *  name: "John",
 * })
 * // true
 *
 * isMatch({
 *  "!parentId": null,
 *  "name": "John",
 * })({
 *  id: 2,
 *  parentId: null,
 *  name: "John",
 * })
 * // false
 */
const isMatch = subset => source =>
  all(([key, value]) => {
    const shouldTestNegation = key[0] === "!"
    const cleanKey = key.replace("!", "")

    return shouldTestNegation
      ? source[cleanKey] !== value
      : source[cleanKey] === value
  })(Object.entries(subset))

const byMatch = fn => obj => fn(isMatch(obj))

export { isMatch, byMatch }
