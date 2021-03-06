import test from "tape"
import { sequence } from ".."

test("number::sequence", t => {
  t.throws(
    () => sequence(0)(1, 10),
    /Invalid "step" value, must be non zero/,
    'Invalid "step" value, must be non zero'
  )

  t.throws(
    () => sequence(-1)(1, 10),
    /Invalid parameters, sequence must approach end/,
    "Invalid parameters, sequence must approach end"
  )

  t.throws(
    () => sequence(1)(10, 1),
    /Invalid parameters, sequence must approach end/,
    "Invalid parameters, sequence must approach end"
  )

  t.deepEqual(
    sequence(1)(1, 5),
    [1, 2, 3, 4, 5],
    "Create a sequence from 1 to 5 with step 1"
  )

  t.deepEqual(
    sequence(3)(1, 5),
    [1, 4],
    "Create a sequence from 1 to 5 with step 3"
  )

  t.deepEqual(
    sequence(-1)(2, -3),
    [2, 1, 0, -1, -2, -3],
    "Create a sequence from 2 to -3 with step -1"
  )

  t.deepEqual(
    sequence(1)(-3, -2),
    [-3, -2],
    "Create a sequence from -3 to -2 with step 1"
  )

  t.deepEqual(
    sequence(-2)(-2, -5),
    [-2, -4],
    "Create a sequence from -2 to -5 with step -2"
  )

  t.deepEqual(
    sequence(2)(-5, 5),
    [-5, -3, -1, 1, 3, 5],
    "Create a sequence from -5 to 5 with step 2"
  )

  /*
   * 1. what to do if "step" is grater than "end"?
   * 2. should start & end always be included in resulting array?
   */

  t.end()
})
