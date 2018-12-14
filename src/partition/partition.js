/**
 * partition splits a list based on a predicate function.
 *
 * @param   {Function}  p       The predicate function, which returns a
 *                              truthy or falsy value for every value given
 *                              an input
 *
 * @param   {[]}        input   List of values to test
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
