import test from "ava";

import isShortId from "../../src/methods/is-short-id.js";

test("knows that \"AT-1-1-1-ABC\" is a short id", (t) => {
	t.true(isShortId("AT-1-1-1-ABC"));
});

test("knows that \"AT-1-A-1-ABC\" is not a short id", (t) => {
	t.false(isShortId("AT-1-A-1-ABC"));
});
