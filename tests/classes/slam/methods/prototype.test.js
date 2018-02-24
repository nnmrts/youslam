import test from "ava";
import isFunction from "lodash/isFunction";
import isPlainObject from "lodash/isPlainObject";

import prototype from "../../../../src/classes/slam/methods/prototype.js";

test("is an object only consisting of functions that are not arrow functions", (t) => {
	t.true(isPlainObject(prototype));

	Object.keys(prototype).forEach((prototypeMethodName) => {
		t.true(isFunction(prototype[prototypeMethodName]));
		t.true(Object.prototype.hasOwnProperty.call(prototype[prototypeMethodName], "prototype"));
	});
});
