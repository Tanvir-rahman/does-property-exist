# does-property-exist

A [Node.js](https://nodejs.org/) module which tests whether an object have specific properties or not. It's like [`hasOwnProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) but with additional config option 'every' or 'some'.

## Installation

```bash
npm install does-property-exist --save
```

**Params:**

* every [true / false] - checks whether every property exist or not. [Default true]
* checkFalsy [true / false] - check falsy value. [Default false]

## Usage

```javascript
const doesPropertyExist = require('does-property-exist')

const obj = { "a": 1, "b": 2 };

doesPropertyExist(obj, ["a"]) // 'true'
doesPropertyExist(obj, ["a", "b"]) // 'true'
doesPropertyExist(obj, ["a", "c"]) // 'false'

doesPropertyExist(obj, ["a", "c"], {every: false}) // 'true'

doesPropertyExist(obj, ["a", "b"], {checkFalsy: true}) // 'true'

doesPropertyExist(obj, ["a", "c"], {
  every: false,
  checkFalsy: true, 
}) // 'true'

doesPropertyExist(obj, ["a", "b"], {
  every: false,
  checkFalsy: true,
}) // 'true'

```

### License

Copyright © 2021, [Tanvir Rahman](https://github.com/Tanvir-rahman).
Released under the [MIT License](LICENSE).

***