import test from "tape"
import { contains } from "../contains/contains"
import { all } from "../all/all"
import { is } from "../is/is"
import { isMatch } from ".."

/**
 * Determines one object's properties are equal to another
 *
 * @tag Core
 * @signature (subset: Object)(source: Object): boolean
 *
 * @param  {Object}   subset  Set of properties that should match
 * @param  {Object}   source  Object matching against
 *
 * @return {boolean}  True if all "subset" properties are of equal value to
 * properties in "source" object
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
 * // => true
 *
 * isMatch({
 *  "!parentId": null,
 *  "name": "John",
 * })({
 *  id: 2,
 *  parentId: null,
 *  name: "John",
 * })
 * // => false
 *
 * isMatch({
 *   name: contains("lorem"),
 * })({
 *   id: 2,
 *   name: "lorem ipsum",
 * })
 * // => true
 *
 * isMatch({
 *   name: all(is, contains("lorem")),
 * })({
 *   label: "bogus",
 * })
 * // => false
 */
test("object::isMatch", t => {
  t.deepEqual(
    isMatch({
      id: 2,
      parentId: null,
    })({
      id: 2,
      parentId: null,
      name: "John",
    }),
    true,
    "Properties are present and have equal values"
  )

  t.deepEqual(
    isMatch({
      name: "John",
      parentId: null,
    })({
      id: 2,
      parentId: 3,
      name: "John",
    }),
    false,
    "Properties are present but dont have equal values"
  )

  t.deepEqual(
    isMatch({
      name: "John",
      "!parentId": null,
    })({
      id: 2,
      parentId: null,
      name: "John",
    }),
    false,
    "Properties are present but dont have equal values (has negation)"
  )

  t.deepEqual(
    isMatch({
      name: "John",
      "!parentId": null,
    })({
      id: 2,
      name: "John",
    }),
    true,
    "Properties are not present"
  )

  t.equals(
    isMatch({
      name: contains("lorem"),
    })({
      id: 2,
      name: "lorem ipsum",
    }),
    true,
    "Object has field and matches predicate"
  )

  t.equals(
    isMatch({
      name: all(is, contains("lorem")),
    })({
      label: "bogus",
    }),
    false,
    "Object does not have test field"
  )

  t.equals(
    isMatch({
      "!name": contains("lorem"),
    })({
      id: 1,
      name: "bogus",
    }),
    true,
    "Object has field and does not match predicate"
  )

  t.end()
})
