# functies [![npm package version](https://badge.fury.io/js/%40leeruniek%2Ffuncties.svg)](https://badge.fury.io/js/%40leeruniek%2Ffuncties) [![Coverage Status](https://coveralls.io/repos/github/Leeruniek/functies/badge.svg?branch=master)](https://coveralls.io/github/Leeruniek/functies?branch=master)

> Functional library for Javascript 

---

<!-- MarkdownTOC levels="2,3" autolink="true" autoanchor="false" -->

- [Install](#install)
- [Use](#use)
- [Develop](#develop)
- [Docs](#docs)
- [Changelog](#changelog)
    - [0.23 - 16 January 2019](#023---16-january-2019)

<!-- /MarkdownTOC -->

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

### 0.23 - 16 January 2019

#### Add 

- Add flow types for several common functies: `map`, `filter`, `reduce`, `all`,
  `any`, `if-then`, `pipe

#### Change

- Only distribute `index.js.flow` in build artifact, not other `.js.flow` files.
  This file is generated at build time by the script `lib/build-flow-libdef.js`,
  which concatenates all `.js.flow` files in `src/` together. This change was
  made to work around [facebook/flow/issues/6650](https://github.com/facebook/flow/issues/6650).
