# functies

> Functional library for Javascript

## Install and use

```bash
npm i @leeruniek/functies
```

```js
const { find, map, reduce } = require( "@leeruniek/functies" )
// or
import { find, map, reduce } from "@leeruniek/functies"
```

## Develop

```bash
git clone git@github.com:Leeruniek/functies.git && cd functies && npm i 
```

- `npm run test` - run all files in `src` that match the `*.test.js` pattern
- `npm run tdd` - watch for changes in `src` and re-run the `test` script

More on [`tape`](https://github.com/substack/tape) and tests:
- [5 Questions Every Unit Test Must Answer](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d)
- [Why I use Tape Instead of Mocha & So Should You](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4)
