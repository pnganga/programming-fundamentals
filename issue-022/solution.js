// implement your solution here
function objectValues(a) {
	var keysArr = [];
	var valsArr = [];
	for(var key in a){
		keysArr.push(key);
		keysArr.sort();
	}
	for(var j in keysArr){
		var val = keysArr[j];
		valsArr.push(a[val]);
	}
	return valsArr;
}