import test from "ava";

import YS from "../../../src/youslam.js";

test("all slams have ids", (t) => {
	const ys = new YS();

	ys.allSlams((
		country, level1, level2, level3, slam, actualSlam
	) => {
		t.truthy(actualSlam.id);
	});
});

test("all slams have short ids", (t) => {
	const ys = new YS();

	ys.allSlams((
		country, level1, level2, level3, slam, actualSlam
	) => {
		t.truthy(actualSlam.shortId);
	});
});
