function myInstanceof(left,right) {
	var left = left.__proto__,
		right = right.prototype;

	while(true) {
		if(left === null) {
			return false;
		}
		if(left === right) {
			return true;
		}
		left = left.__proto__;
	}
}