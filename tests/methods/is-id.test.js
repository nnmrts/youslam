import test from "ava";

import isId from "../../src/methods/is-id.js";

test("knows that \"AT001001001ABC\"\n\tis an id", (t) => {
	t.true(isId("AT001001001ABC"));
});

test("knows that \"AT00100A001ABC\"\n\tis not an id", (t) => {
	t.false(isId("AT00100A001ABC"));
});
