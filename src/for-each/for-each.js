/**
 * Call `fn` over each element of an array
 *
 * @name   forEach
 *
 * @param  {Function}   fn      Function
 * @param  {Array}      source  Source array
 *
 * @return {undefined}
 *
 * @tag Array
 * @signature (fn: Function) => (source: Array): undefined
 */
module.exports = fn => source => {
  source.forEach(fn)

  return source
}
