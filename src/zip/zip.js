/* eslint-disable no-unused-vars */
// @flow

import type { ZipWithType, ZipType } from "./zip.js.flow"

/**
 * Combine pairs of values from two lists by an arbitrary function.
 * If the lists differ in length, the output will have the length
 * of the shorter list.
 *
 * @signature
 * <A, B, C>(fn: A => B => C) => A[] => B[] => C[]
 */
const zipWith: ZipWithType = <A, B, C>(fn) => ([aHead, ...aTail]) => ([
  bHead,
  ...bTail
]) => (aHead && bHead ? [fn(aHead)(bHead), ...zipWith(fn)(aTail)(bTail)] : [])

/**
 * Combine pairs of values from two lists into a list of tuples.
 * If the lists differ in length, the output will have the length
 * of the shorter list.
 *
 * @signature
 * <A, B>(A[]) => B[] => [A, B][]
 */
const zip: ZipType = <A, B>(as) => bs => zipWith(a => b => [a, b])(as)(bs)

export { zip, zipWith }
// const zip: ZipType = (<A, B>() => zipWith < A, B, _ > (a => b => [a, b]))()