import test from "tape"
import { split } from ".."

/**
 * Splits a String object into an array of strings by separating the string
 * into substrings, using a specified separator string to determine where to
 * make each split.
 *
 * @tag String
 * @signature ( separator: string|RegExp )( source: string ): Array
 *
 * @param   {string|RegExp}  separator  Points where each split should occur
 * @param   {string}         source     Source string
 *
 * @return  {number}
 *
 * @example
 * const scores = split(",")("lorem,ipsum")
 * // ["lorem", "ipsum"]
 */
test("string::split", t => {
  const source = "lorem,ipsum"

  t.deepEqual(
    split(",")(source),
    ["lorem", "ipsum"],
    "Split string into an array of 2 substrings"
  )

  t.end()
})
