/*!
 * is-property-exist <https://github.com/Tanvir-rahman/is-property-exist>
 *
 * Copyright (c) 2021, Tanvir Rahman.
 * Released under the MIT License.
 */

'use strict';

module.exports = function (obj, arr, options = {type: "every"}) {
	let type = options.type;
	if (options.type == 'some') {
  	type = "some";
  }
  return arr[type](p => obj.hasOwnProperty(p));
}