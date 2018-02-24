import test from "ava";
import isFunction from "lodash/isFunction";

import utils from "../src/utils.js";

test("is an object only consisting of functions", (t) => {
	Object.keys(utils).forEach((utilName) => {
		t.true(isFunction(utils[utilName]));
	});
});
