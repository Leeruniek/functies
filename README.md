# functies [![npm package version](https://badge.fury.io/js/%40leeruniek%2Ffuncties.svg)](https://badge.fury.io/js/%40leeruniek%2Ffuncties) [![Coverage Status](https://coveralls.io/repos/github/Leeruniek/functies/badge.svg?branch=master)](https://coveralls.io/github/Leeruniek/functies?branch=master)

> Functional library for Javascript 

---

<!-- vim-markdown-toc GFM -->

* [Install](#install)
* [Use](#use)
* [Develop](#develop)
* [Docs](#docs)
* [Changelog](#changelog)
  * [0.32 - 08 March 2019](#032---08-march-2019)
    * [Add](#add)
    * [Change](#change)
    * [Delete](#delete)

<!-- vim-markdown-toc -->

## Install

```bash
npm i --save-exact @leeruniek/functies
```

## Use

```js
import { pipe, trim, split, dropLast, push, join } from "@leeruniek/functies"

const removeTrailingSlash = source =>
  source[source.length - 1] === sep ? source.slice(0, -1) : source

const renameFile = newName => pipe(
  removeTrailingSlash,
  split(sep),
  dropLast,
  push(trim(sep)(newName)),
  join(sep)
)
```

## Develop

```bash
git clone git@github.com:leeruniek/functies.git && \
  cd m && \
  npm run setup

# run tests (any `*.test.js`) once
npm test

# watch `src` folder for changes and run test automatically
npm run tdd
```

## Docs

See [documentation](https://leeruniek.github.io/functies/) for the awesomeness that we are.

## Changelog

History of all changes in [CHANGELOG.md](CHANGELOG.md)

### 0.32 - 08 March 2019

#### Add

- add `allBy` and `anyBy`
- add `entries` and `fromEntries` for `[key, value][]` <-> `Object` conversion
- add `mergeTwo` to `reduce` just two objects, and make `merge` reduce over it
  
#### Change

- refactor `pluck` to be much simpler
- refactor `pick` to take a predicate and rename the old implementation to `pickKeys`

#### Delete

- delete `props` since it's redundant

