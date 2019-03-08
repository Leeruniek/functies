<!-- markdownlint-disable no-duplicate-header -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.32] - 08 March 2019

### Add

- add `allBy` and `anyBy`
- add `entries` and `fromEntries` for `[key, value][]` <-> `Object` conversion
- add `mergeTwo` to `reduce` just two objects, and make `merge` reduce over it
  
### Change

- refactor `pluck` to be much simpler
- refactor `pick` to take a predicate and rename the old implementation to `pickKeys`

### Delete

- delete `props` since it's redundant

## [0.31] - 06 March 2019

### Add

- `zipFindWith`, `zipFind`, `zipByWith`, `zipBy` - zip variants which allow custom matching predicates

### Change

- `indexBy` - Allow multiple values at each key in the output
- `any` - Fix docstring so it appears as `any` in the documentation (previously it was showing as `all`)

## [0.30.1]- 04 March 2019

### Change

- `hasKey` - Also work on objects created without base prototype, via `Object.create(null)`.

## [0.30]- 04 March 2019

### Add

- `findIndexBy` - Find the position of first element that matches the filter criteria

## [0.29] - 04 March 2019

### Add

- `last` - Return last element in array
- `flip`, `flipUncurried` - Reverse function parameters
- `lens`, `lenses` - Create a pair of lenses, functions for retrieving or 
updating the value at an object key.
- `props` -  Get a set of properties from an object

## [0.28] - 30 January 2019

### Add

- Add `isEqual` - tripple equal

## [0.27] - 28 January 2019

### Add

- Add `cases` - Functional `switch` statement

### Change

- Change `ifThen` type that the return types of the `then` and `else` branches must match

## [0.26] - 25 January 2019

### Add

- Add `concat` -  Merge two arrays into one

### Change

- Add `concat`, `zip`, `zipWith` to flow lib def 

## [0.25] - 24 January 2019

### Change

- Convert all to ES6 import/export 
- Test files loads testing function from main index file
- `indexBy` takes array and returns object of objects
- `get` is now `prop`. Also exporting `get` as alias 
- `all` and `any` accept non array input
- `isMatch` accepts predicate functions

### Remove

- `coinToss`, `random`, `raise`

## [0.24] - 24 January 2019

### Add

- Add `zip`, `zipWith` list processing functions

### Change

- Reimplement `*By` functions in terms of a new helper function, `byMatch`
- Consolidate variations of the same function in the same module

## [0.23.1] - 21 January 2019

### Change

- Remove `findFiles` from main index file. 

## [0.23] - 16 January 2019

### Add

- Add flow types for several common functies: `map`, `filter`, `reduce`, `all`,
  `any`, `if-then`, `pipe`

### Change

- Only distribute `index.js.flow` in build artifact, not other `.js.flow` files.
  This file is generated at build time by the script `lib/build-flow-libdef.js`,
  which concatenates all `.js.flow` files in `src/` together. This change was
  made to work around [facebook/flow/issues/6650](https://github.com/facebook/flow/issues/6650).

## [0.22.1] - 14 January 2019

### Add

- Distribute .flow files in build artifact so library consumers can use types

## [0.22] - 10 January 2019

### Add

- Start using FlowType (`partition`, `groupBy`)
- Generating documentation with `documentation.js` based on code comments

## [0.21.1] - 14 December 2018

### Change

- Export `groupBy` and `partition` functions

## [0.21.0] - 14 December 2018

### Add

- Add `groupBy` and `partition` functions

## [0.20.0] - 11 December 2018

### Add

- Add babel to `test` script
- Add `index.test.js` to `test` script

### Change

- Cleanup & rename folders 

## [0.19.4] - 27 November 2018

### Change

- Update [`forEach`](/src/for-each/for-each) to return the original array

## [0.19.3] - 20 November 2018

### Change

- Remove `findFiles` from main index. Loading the `path` module crashes frontend builds

## [0.19.2] - 20 November 2018

### Change

- Change [`findBy`](/src/find-by/find-by) to accept a return value if nothing is found
- Change [`pick`](/src/object__pick/pick.js) to throw error if input not object

## [0.19.1] - 16 November 2018

### Add

- Add [`findFiles`](/src/find-files/find-files) - Recursive dir walk with regular expression matching on file name
- Add [`endsWith`](/src/ends-with/ends-with) - Test if string ends with substring

## [0.19.0] - 16 November 2018

### Add

- Add [`elapsedTime`](/src/elapsed-time/elapsed-time) - Calculate elapsed time between to dates. In days, hours, minutes and seconds
- Add test for [`protoChain`](/src/core__proto-chain/proto-chain.test.js), [`clone`](/src/core__clone/clone.test.js)

### Change

- Update readme
- Change [`map`](/src/map/map.test.js) to allow non-array input
- Change [`reduce`](/src/reduce/reduce.js) to allow non-array input

[Unreleased]: https://github.com/leeruniek/functies/compare/v0.32...HEAD

[0.32]: https://github.com/leeruniek/functies/compare/v0.31...v0.32
[0.31]: https://github.com/leeruniek/functies/compare/v0.30.1...v0.31
[0.30.1]: https://github.com/leeruniek/functies/compare/v0.30...v0.30.1
[0.30]: https://github.com/leeruniek/functies/compare/v0.29...v0.30
[0.29]: https://github.com/leeruniek/functies/compare/v0.28...v0.29
[0.28]: https://github.com/leeruniek/functies/compare/v0.27...v0.28
[0.27]: https://github.com/leeruniek/functies/compare/v0.26...v0.27
[0.26]: https://github.com/leeruniek/functies/compare/v0.25...v0.26
[0.25]: https://github.com/leeruniek/functies/compare/v0.24...v0.25
[0.24]: https://github.com/leeruniek/functies/compare/v0.23.1...v0.24
[0.23.1]: https://github.com/leeruniek/functies/compare/v0.23...v0.23.1
[0.23]: https://github.com/leeruniek/functies/compare/v0.22...v0.23
[0.22.1]: https://github.com/leeruniek/functies/compare/v0.22...v0.22.1
[0.22]: https://github.com/leeruniek/functies/compare/v0.21.1...v0.22
[0.21.1]: https://github.com/leeruniek/functies/compare/v0.21.0...v0.21.1
[0.21.0]: https://github.com/leeruniek/functies/compare/v0.20.0...v0.21.0
[0.20.0]: https://github.com/leeruniek/functies/compare/v0.19.4...v0.20.0
[0.19.4]: https://github.com/leeruniek/functies/compare/v0.19.3...v0.19.4
[0.19.3]: https://github.com/leeruniek/functies/compare/v0.19.2...v0.19.3
[0.19.2]: https://github.com/leeruniek/functies/compare/v0.19.1...v0.19.2
[0.19.1]: https://github.com/leeruniek/functies/compare/v0.19.0...v0.19.1
[0.19.0]: https://github.com/leeruniek/functies/compare/v0.19.0
