/**
 * partition splits a list based on a predicate function.
 *
 * @signature (p: (x: T): boolean): (Array<T>): Array<Array<T>>
 *
 * @param   {Function}  p       The predicate function, which returns a
 *                              truthy or falsy value for every value given
 *                              an input
 *
 * @param   {Array}     input   List of values to test
 *
 * @return  {Array<Array>}      2-tuple of arrays. The first array consists
 *                              of values for which the predicate returned
 *                              a truthy value, the second of values for
 *                              which it returned a falsy value.
 */
module.exports = p => input => {
  const pass = []
  const fail = []

  for (let i = 0; i < input.length; i++) {
    if (p(input[i])) {
      pass.push(input[i])
    } else {
      fail.push(input[i])
    }
  }

  return [pass, fail]
}
