import test from "ava";
import isFunction from "lodash/isFunction";

import methods from "../src/methods.js";

test("methods is an object only consisting of functions and optionally a prototype property", (t) => {
	Object.keys(methods).forEach((methodName) => {
		if (methodName !== "prototype") {
			t.true(isFunction(methods[methodName]));
		}
	});
});
