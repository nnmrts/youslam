import test from "ava";
import ys from "../src/youslam.js";

test("ids", (t) => {
	ys.allSlams((
		country, level1, level2, level3, slam, actualSlam
	) => {
		t.truthy(actualSlam.id);
		t.truthy(actualSlam.shortId);
	}, ys);

	return typeof slamArray;
});
