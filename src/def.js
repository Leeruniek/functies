// @flow

declare function partition<T>(
  fn: (x: T) => boolean
): ((T[]) => [T[], T[]]) => (input: T[]) => [T[], T[]]
