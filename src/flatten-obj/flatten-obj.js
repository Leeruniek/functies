const reduce = require("../reduce/reduce")

/*
 * True if the value is an object created by the Object constructor.
 */
const isObjectObject = val =>
  typeof val === "object" && val.constructor === Object

/*
 * Reduce over an object's key-value pairs, guarding against circular
 * references.
 */
const reduceObj = (fn, startingAcc) => obj => {
  const seen = new WeakSet()

  return reduce((acc, key) => {
    const val = obj[key]

    /*
     * Return the current value of the accumulator if we've seen this object
     * reference before, otherwise add it to the set of seen references.
     */
    if (typeof val === "object") {
      if (seen.has(val)) {
        return acc
      }

      seen.add(val)
    }

    return fn(acc, key, val)
  }, startingAcc)(Object.keys(obj))
}

/*
 * Prefix the keys of an object which do not correspond to object values
 * created by the Object constructor.
 */
const renameKeys = prefix =>
  reduceObj(
    (acc, key, val) => ({
      ...acc,
      [isObjectObject(val) ? key : `${prefix}_${key}`]: val,
    }),
    {}
  )

/**
 * Flatten an object such that no keys of the output refer to an object
 * value created by the Object constructor. Other object values **are not**
 * flattened, for instance Array, Date, Set, etc., because they have
 * non-Object constructors.
 *
 * Circular references are discarded from the output object.
 *
 * @param   {Object}    obj     An object.
 *
 * @return  {Object}            An object with no nested Object objects.
 *
 * @example
 * flattenObj({
 *   id: 2,
 *   name: 'a',
 *   Type: {
 *     id: 1,
 *     name: 'b'
 *   }
 * }) = { id: 2, name: 'a', type_id: 1, type_name: 'b' }
 */
const flattenObj = reduceObj((acc, key, val) => {
  if (isObjectObject(val)) {
    return {
      ...acc,
      ...flattenObj(renameKeys(key.toLowerCase())(val)),
    }
  }

  return {
    ...acc,
    [key]: val,
  }
}, {})

module.exports = flattenObj
