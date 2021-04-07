# is-property-exist

A [Node.js](https://nodejs.org/) module which tests whether an object have specific properties or not. It's like [`hasOwnProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) but with additional config option 'every' or 'some'.

## Installation

```bash
npm install is-property-exist --save
```

**Params:**

* every - checks whether every property exist or not. [Default]
* some - checks if at least one property exist or not.

## Usage

```javascript
const isPropertyExist = require('is-property-exist')

const obj = { "a": 1, "b": 2 };

isPropertyExist(obj, ["a"]) // 'true'
isPropertyExist(obj, ["a", "b"]) // 'true'
isPropertyExist(obj, ["a", "c"]) // 'false'

isPropertyExist(obj, ["a", "c"], {type: "some"}) // 'true'

### Author

**Tanvir Rahman**

* [LinkedIn Profile](https://www.linkedin.com/in/tanvir-rahman/)
* [GitHub Profile](https://github.com/Tanvir-rahman)

### License

Copyright © 2021, [Tanvir Rahman](https://github.com/Tanvir-rahman).
Released under the [MIT License](LICENSE).

***
```