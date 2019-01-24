import test from "tape"
import { debounce } from ".."

/**
 * Call a function only if it hasn't been called in the last `timeWindow` ms.
 *
 * @param  {function} fn            Function to be ran
 * @param  {integer}  timeWindow    Time between each `fn` call
 *
 * @return {function}               Either return `fn` if you've passed the
 *                                  `timeWindow` or return a timer that will
 *                                  run the `fn` in `timeWindow` ms
 */
test("core::debounce", t => {
  /**
   * Debounce with defaults
   */
  let defaultCounter = 0
  const defaultSet = debounce(source => {
    defaultCounter = source
  })

  for (let i = 0; i < 100; i++) {
    defaultSet(i)
  }

  setTimeout(() => {
    t.equal(
      defaultCounter,
      99,
      "Calling debounce function 100 times should run it once, 50ms after last call"
    )
  }, 100)

  /**
   * Debounce with custom
   */

  let customCounter = 0
  const customSet = debounce(
    source => {
      customCounter = source
    },
    { timeWindow: 100, bind: null }
  )

  for (let i = 0; i < 100; i++) {
    customSet(i)
  }

  setTimeout(() => {
    t.equal(
      customCounter,
      99,
      "Calling debounced function 100 times with custom timer window"
    )

    t.end()
  }, 150)
})
