import { ifThen } from "../if-then/if-then"
import { has } from "../has/has"
import { remove } from "../remove/remove"
import { push } from "../push/push"

/**
 * Add if not exists, remove otherwise
 *
 * @name   toggle
 *
 * @param  {mixed}  item  Toggable value
 *
 * @return {Array}
 *
 * @tag Array
 * @signature (item: mixed) => (input: Array): Array
 *
 * @example
 * toggle(1)([1, 2])
 * // => [2]
 * toggle(1)([2])
 * // => [1, 2]
 */
const toggle = item => ifThen(has(item), remove(item), push(item))

export { toggle }
