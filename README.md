# functies [![npm package version](https://badge.fury.io/js/%40leeruniek%2Ffuncties.svg)](https://badge.fury.io/js/%40leeruniek%2Ffuncties) [![Coverage Status](https://coveralls.io/repos/github/Leeruniek/functies/badge.svg?branch=master)](https://coveralls.io/github/Leeruniek/functies?branch=master)

> Functional library for Javascript 

---

<!-- vim-markdown-toc GFM -->

* [Install](#install)
* [Use](#use)
* [Develop](#develop)
* [Docs](#docs)
* [Changelog](#changelog)
  * [0.34 - 7 May 2019](#034---7-may-2019)
    * [:boom: Bracking change](#boom-bracking-change)
    * [Change](#change)
    * [Remove](#remove)

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

### 0.34 - 7 May 2019

#### :boom: Bracking change

- [`debounce`](src/debounce/debounce.js) - docstring, react example, signature changed

#### Change

- Remove docstring from test files
- Add [`@see`](http://usejsdoc.org/tags-see.html) where suitable
- `deepEqual`, `elapsedTIme`, `distinct`, `endsWith`, `findIndexBy`, `find` - add docstring
- `anyBy`, `allBy`, `countBy`, `filter`, `filterBy`, `findBy`, `remove` - add docstring & tests
- `clone`- add docstring & tests, simpler rewrite, added to main index
- `escape`, `escapeHTML`, `escapeRegExp` - move into same file, add docstring
- `findFiles` - add deprecation notice (use [`glob`](https://www.npmjs.com/package/glob))

#### Remove

- `checkType` - unused
