/*!
 * is-property-exist <https://github.com/Tanvir-rahman/is-property-exist>
 *
 * Copyright (c) 2021, Tanvir Rahman.
 * Released under the MIT License.
 */

'use strict';

module.exports = function (obj, arr, options = {}) {
	let type = options.every == false ? 'some' : 'every';
  let checkFalsy =  options.checkFalsy || false;
  
  return arr[type](
    (p) => {
     	const hasProperty = obj.hasOwnProperty(p);
      return checkFalsy ? hasProperty && obj[p] : hasProperty;
    }
  );
}