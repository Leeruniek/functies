/* eslint-disable no-unused-vars */
// @flow

import type {
  ZipWithType,
  ZipType,
  ZipFindWithType,
  ZipFindType,
  ZipByWithType,
  ZipByType,
} from "./zip.js.flow"
import { find, findBy } from "../find/find"
import { byMatch, byMatchNary } from "../is-match/is-match"

/**
 * Combine pairs of values from two lists by an arbitrary function.
 * If the lists differ in length, the output will have the length
 * of the shorter list.
 *
 * @signature
 * <A, B, C>(fn: A => B => C) => A[] => B[] => C[]
 *
 * @param fn
 * The function to combine values by
 *
 * @param as
 * The first list
 *
 * @param bs
 * The second list
 *
 * @example
 * zipWith(a => b => a * b)([2,3,4])([2,5,6]) = [4, 15, 24]
 */
const zipWith: ZipWithType = <A, B, C>(fn) => ([aHead, ...aTail]) => ([
  bHead,
  ...bTail
]) => (aHead && bHead ? [fn(aHead)(bHead), ...zipWith(fn)(aTail)(bTail)] : [])

/**
 * Combine pairs of values from two lists into a list of tuples.
 * If the lists differ in length, the output will have the length
 * of the shorter list. An alias of `zipWith` where the `fn` parameter
 * is a tupling function.
 *
 * @signature
 * <A, B>(A[]) => B[] => [A, B][]
 *
 * @example
 * zip([2,3,4])([2,5,6]) = [[2, 2], [3, 5], [4, 6]]
 */
const zip: ZipType = <A, B>(as) => bs => zipWith(a => b => [a, b])(as)(bs)

/**
 * Combine pairs of values from two lists matching a binary predicate
 * into a list of arbitrary values.
 *
 * @signature
 * <A, B, C>(
 *   p: (A) => B => boolean
 * ) => (fn: (A) => B => C) => (A[]) => (B[]) => C[]
 *
 * @param p
 * A binary predicate function taking a value from each list and
 * returning a boolean
 *
 * @param fn
 * A function taking a value from each list and returning anything
 *
 * @param as
 * The first list
 *
 * @param bs
 * The second list
 *
 * @example
 * zipFindWith(
 *   a => b => (a * a) === b
 * )(a => b => a + b)([1, 2, 3])([4, 9, 1]) = [2, 6, 12]
 */
const zipFindWith: ZipFindWithType = <A, B, C>(p) => fn => as => bs =>
  as.map(a => fn(a)(find(p(a))(bs)))

/**
 * Combine pairs of values from two lists matching a binary predicate
 * into a list of tuples. An alias of `zipFindWith` where the `fn` parameter
 * is a tupling function.
 *
 * @signature
 * <A, B>(p: (A) => B => boolean) => (A[]) => (B[]) => [A, B][]
 *
 * @example
 * zipFind(
 *   a => b => (a * a) === b
 * )([1, 2, 3])([4, 9, 1]) = [[1, 1], [2, 4], [3, 9]]
 */
const zipFind: ZipFindType = <A, B>(p) => zipFindWith(p)(a => b => [a, b])

/**
 * Combine pairs of values from two lists, where the second list must
 * be a list of objects and the value from the second list matches
 * a matching object (see `isMatch` for details) generated by a value
 * from the first list. The values are combined via an arbitrary function.
 * An alias of `zipFindWith` where the `p` parameter is generated based
 * on the matching object returned by `getMatchObj`.
 *
 * @signature
 * <A, B, C>(
 *   getMatchObj: (A) => Object
 * ) => (fn: (A) => B => C) => (A[]) => (B[]) => C[]
 *
 * @example
 * zipByWith(
 *   a => ({ aId: a.id })
 * )(a => b => merge(a, b))([
 *   { id: 1, color: 'red' },
 *   { id: 2, color: 'green' },
 * ])([
 *   { aId: 2, fruit: 'pear' },
 *   { aId: 1, fruit: 'apple' },
 * ]) = [
 *   { id: 1, aId: 1, color: 'red', fruit: 'apple' },
 *   { id: 2, aId: 2, color: 'green', fruit: 'pear' }
 * ]
 */
const zipByWith: ZipByWithType = <A, B, C>(getMatchObj) =>
  byMatchNary(zipFindWith)(getMatchObj)

/**
 * Combine pairs of values from two lists, where the second list must
 * be a list of objects and the value from the second list matches
 * a matching object (see `isMatch` for details) generated by a value
 * from the first list. The values are combined into a tuple. An alias
 * of `zipByWith` where values are combined by a tupling function.
 *
 * @signature
 * <A, B>(
 *   getMatchObj: (A) => Object
 * ) => (A[]) => (B[]) => [A, B][]
 *
 * @example
 * zipByWith(
 *   a => ({ aId: a.id })
 * )([
 *   { id: 1, color: 'red' },
 *   { id: 2, color: 'green' },
 * ])([
 *   { aId: 2, fruit: 'pear' },
 *   { aId: 1, fruit: 'apple' },
 * ]) = [
 *   [{ id: 1, color: 'red' }, { aId: 1, fruit: 'apple' }],
 *   [{ id: 2, color: 'green' }, { aId: 2, fruit: 'pear' }],
 * ]
 */
const zipBy: ZipByType = <A, B>(getMatchObj) =>
  zipByWith(getMatchObj)(a => b => [a, b])

export { zip, zipWith, zipFind, zipFindWith, zipBy, zipByWith }
