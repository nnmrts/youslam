import test from "ava";
import isFunction from "lodash/isFunction";

import prototype from "../../src/methods/prototype.js";

test("prototype is an object only consisting of functions that are not arrow functions", (t) => {
	Object.keys(prototype).forEach((prototypeMethodName) => {
		t.true(isFunction(prototype[prototypeMethodName]));
		t.true(Object.prototype.hasOwnProperty.call(prototype[prototypeMethodName], "prototype"));
	});
});
