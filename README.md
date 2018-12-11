# functies

> Functional library for Javascript

---

<!-- MarkdownTOC levels="2,3" autolink="true" autoanchor="false" -->

- [Install](#install)
- [Use](#use)
- [Develop](#develop)
- [Changelog](#changelog)
    - [0.20.0 - 11 December 2018](#0200---11-december-2018)

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

## Changelog

History of all changes in [CHANGELOG.md](CHANGELOG.md)

### 0.20.0 - 11 December 2018

#### Add

- Add babel to `test` script
- Add `index.test.js` to `test` script

#### Change

- Cleanup & rename folders 
