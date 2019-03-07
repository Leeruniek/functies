import test from "tape"
import { prop } from ".."

/**
 * Get value from obj property
 *
 * @param  {string}  key     Property name
 * @param  {object}  source  Source object
 *
 * @return {mixed}
 *
 * @tag Object
 * @signature ( key: string ) => ( source: Object ): mixed
 *
 * @example
 * prop( "lorem" )( { lorem: "ipsum" } ) // => "ipsum"
 * prop( "not-exist" )( { lorem: "ipsum" } ) // => undefined
 */
test("object::prop", t => {
  t.equal(
    prop("lorem")({
      lorem: "ipsum",
    }),
    "ipsum",
    "Get existing property"
  )

  t.equal(
    prop("not-exist")({
      lorem: "ipsum",
    }),
    undefined,
    "Get non-existing property // undefined"
  )

  t.equal(
    prop("not-exist")(undefined),
    undefined,
    "Get prop from undefined // undefined"
  )

  t.equal(
    prop("not-exist")(2),
    undefined,
    "Get prop from non object // undefined"
  )

  t.end()
})
