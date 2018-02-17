import test from "ava";

import isShortPath from "../../src/methods/is-short-path.js";

test("knows that \"AT-1-1-1\"\n\tis a short path", (t) => {
	t.true(isShortPath("AT-1-1-1"));
});

test("knows that \"AT-1-A-1\"\n\tis not a short path", (t) => {
	t.false(isShortPath("AT-1-A-1"));
});
