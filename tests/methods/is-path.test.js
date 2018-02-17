import test from "ava";

import isPath from "../../src/methods/is-path.js";

test("knows that \"AT001001001\"\n\tis a path", (t) => {
	t.true(isPath("AT001001001"));
});

test("knows that \"AT00100A001\"\n\tis not a path", (t) => {
	t.false(isPath("AT00100A001"));
});
