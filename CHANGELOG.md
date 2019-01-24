<!-- markdownlint-disable no-duplicate-header -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.24] - 24 January 2019

### Add

- Add `zip`, `zipWith` list processing functions

### Change

- Reimplement `*By` functions in terms of a new helper function, `byMatch`
- Consolidate variations of the same function in the same module

## [0.23.2] - 22 January 2019

### Change

- Fix export of `ifThen` in main index file. 

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

[Unreleased]: https://github.com/leeruniek/functies/compare/v0.23.1...HEAD

[0.24]: https://github.com/leeruniek/functies/compare/v0.23.2...v0.24
[0.23.2]: https://github.com/leeruniek/functies/compare/v0.23.1...v0.23.2
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
