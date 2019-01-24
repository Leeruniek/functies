import test from "tape"
import { push } from ".."

/**
 * Add element at end of array
 *
 * @tag Array
 * @signature ( ...elements: mixed ) => ( input: Array ): Array
 *
 * @example
 * push( 2 )( [ 1 ] ) // => [ 1, 2 ]
 * push( 2, 4 )( [ 1 ] ) // => [ 1, 2, 4 ]
 */
test("array::push", t => {
  t.deepEqual(push(null)([1]), [1, null], "(null)([]) should equal [null]")

  t.deepEqual(
    push(undefined)([]),
    [undefined],
    "(undefined)([]) should equal [undefined]"
  )

  t.deepEqual(push([])([]), [[]], "([])([]) should equal [[]]")

  t.deepEqual(
    push(1, null, undefined)([]),
    [1, null, undefined],
    "(1, null, undefined)([]) should equal [1, null, undefined]"
  )

  t.end()
})
