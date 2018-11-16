<!-- markdownlint-disable no-duplicate-header -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[Unreleased]: https://github.com/asd14/m/compare/v0.19.0...HEAD

[0.19.1]: https://github.com/asd14/m/compare/v0.19.0...v0.19.1
[0.19.0]: https://github.com/asd14/m/compare/v0.19.0
