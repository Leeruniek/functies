import test from "tape"
import { has, hasKey } from "./has"

/**
 * Check if value is in array
 *
 * @param   {mixed}    value   What to search for
 * @param   {Array}    source  Haystack
 *
 * @return  {boolean}  True if has, false otherwise
 *
 * @tag Array
 * @signature (value: Function|mixed )( source: Array ): boolean
 *
 * @example
 * has( 2 )( [ 1, 2 ] )
 * // => true
 * has( 3 )( [ 1, 2 ] )
 * // => false
 * has( elm => elm.id === 1 )([{}, {id: 1}])
 * // => true
 */
test("array::has( value: Function|mixed )( source: Array ): boolean", t => {
  t.deepEqual(has(2)([1, 2]), true, "primitive is in array should return true")

  t.deepEqual(
    has(2)([1, "2"]),
    false,
    "primitive not in array should return false"
  )

  t.equal(
    has(elm => elm.id === 1)([{}, { id: 1 }]),
    true,
    'if iterator function returns "true" than should return true'
  )

  t.equal(
    has(elm => elm.id)([{}, { id: "1" }]),
    false,
    'if iterator function returns anything but "true" than should return false'
  )

  t.end()
})

test("object::has( key: string ) => ( input: Object ): boolean", t => {
  t.equal(hasKey("lorem")({ lorem: "ipsum" }), true, "Key exists")

  t.equal(hasKey("lorem")({}), false, "Key does not exist")

  t.equal(
    hasKey("toString")({}),
    false,
    'Prototype key "toString" does not return false-positive'
  )

  t.equal(
    hasKey("toString")(Object.create(null)),
    false,
    'Key "toString" does not exist on object without prototype'
  )

  t.equal(
    hasKey("lorem")({ lorem: undefined }),
    true,
    'Key exists when value is "undefined"'
  )

  t.equal(
    hasKey("lorem")({ lorem: NaN }),
    true,
    'Key exists when value is "NaN"'
  )

  t.equal(
    hasKey("lorem")({ lorem: null }),
    true,
    'Key exists when value is "null"'
  )

  t.equal(hasKey("lorem")({ lorem: 0 }), true, 'Key exists when value is "0"')

  t.end()
})
