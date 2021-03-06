/**
 * Get value from obj property
 *
 * @name   prop
 * @param  {string}  key     Property name
 * @param  {object}  source  Source object
 *
 * @return {mixed}
 *
 * @tag Object
 * @signature (key: string) => (source: Object): mixed
 *
 * @example
 * prop("lorem")({ lorem: "ipsum" }) // => "ipsum"
 * prop("not-exist")({ lorem: "ipsum" }) // => undefined
 */
const prop = key => source =>
  typeof source === "object" ? source[key] : undefined

export { prop }
