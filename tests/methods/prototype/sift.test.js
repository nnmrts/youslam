import test from "ava";

import YS from "../../../src/youslam.js";

test("sifting with \"AT\" results in less or equal to 10 level1s", (t) => {
	let ys = new YS();

	ys = ys.sift("AT");

	t.true(ys.allLevel1s().length <= 10);
});

test("sifting with \"AT-9\" results in less or equal to 24 level2s", (t) => {
	let ys = new YS();

	ys = ys.sift("AT-9");

	t.true(ys.allLevel2s().length <= 24);
});

test("sifting with \"AT-9-5\" results in less or equal to 1 level3", (t) => {
	let ys = new YS();

	ys = ys.sift("AT-9-5");

	t.true(ys.allLevel2s().length <= 1);
});
