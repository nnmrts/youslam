import test from "ava";
import isFunction from "lodash/isFunction";
import isPlainObject from "lodash/isPlainObject";

import methods from "../../../src/classes/slam/methods.js";

test("is an object only consisting of functions and optionally a prototype property", (t) => {
	t.true(isPlainObject(methods));

	Object.keys(methods).forEach((methodName) => {
		if (methodName !== "prototype") {
			t.true(isFunction(methods[methodName]));
		}
	});
});
