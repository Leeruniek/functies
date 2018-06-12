const map = require( "../array__map/map" )

/**
 * Sort array using custom function
 *
 * @param  {Function}  fn      Sort function
 * @param  {Array}     source  Array
 *
 * @return {Array}
 *
 * @tag Array
 * @signature ( fn: Function ) => ( source: Array ): Array
 *
 * @example
 * sort((a,b) => a.id-b.id)([{id:2}, {id: 1}])
 * // => [{id:1}, {id: 2}]
 */
module.exports = fn => source =>
  map( elm => elm )( source.sort( fn ) )

