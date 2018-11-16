# functies

> Functional library for Javascript

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

## Changelog

History of all changes in [CHANGELOG.md](CHANGELOG.md)

### 0.19.0 - 16 November 2018

#### Add

- Add [`elapsedTime`](/src/elapsed-time/elapsed-time) - Calculate elapsed time between to dates. In days, hours, minutes and seconds
- Add test for [`protoChain`](/src/core__proto-chain/proto-chain.test.js), [`clone`](/src/core__clone/clone.test.js)

#### Change

- Update readme
- Change [`map`](/src/map/map.test.js) to allow non-array input
- Change [`reduce`](/src/reduce/reduce.js) to allow non-array input
