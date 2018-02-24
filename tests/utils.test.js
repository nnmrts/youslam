import test from "ava";
import isFunction from "lodash/isFunction";
import isPlainObject from "lodash/isPlainObject";

import utils from "../src/utils.js";

test("is an object only consisting of functions", (t) => {
	t.true(isPlainObject(utils));

	Object.keys(utils).forEach((utilName) => {
		t.true(isFunction(utils[utilName]));
	});
});
