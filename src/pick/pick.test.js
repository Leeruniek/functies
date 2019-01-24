import test from "tape"
import { pick } from ".."

/**
 * Returns a partial copy of an object containing only the keys specified.
 * If the key does not exist, the property is ignored.
 *
 * @tag Object
 * @signature ( keys: string[] ) => ( source: Object ): Object
 *
 * @param      {string[]}  keys   The properties to be filtered out
 * @param      {Object}         source  The source object
 *
 * @return     {Object}
 *
 * @example
 * pick(["id", "name"])({id: 2, name: "lorem", description: "lorem ipsum"})
 * // => {id: 2, name: lorem}
 */
test("object::pick( keys: string[] ) => ( source: Object ): Object", t => {
  const source = {
    lorem: "ipsum",
    dolor: "amet",
  }

  t.deepEqual(
    pick(["dolor", "lorem"])(source),
    { lorem: "ipsum", dolor: "amet" },
    "All existing keys"
  )

  t.deepEqual(
    pick(["lorem", "not-exist"])(source),
    { lorem: "ipsum" },
    "Some non-existing keys"
  )

  t.deepEqual(pick(["not-exist"])(source), {}, "All non-existing keys")

  t.throws(
    () => {
      pick(["lorem", "ipsum"])(null)
    },
    /Expected input to be "Object"\. Received "null", type "Null"/,
    "Throw error if input not object"
  )

  t.end()
})
