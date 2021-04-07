module.exports.hasPropertyExist = (obj, arr, options = {type: "every"}) => {
	let type = options.type;
	if (options.type == 'some') {
  	type = "some";
  }
  return arr[type](p => obj.hasOwnProperty(p));
}