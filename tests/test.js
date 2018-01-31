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

test("sift", (t) => {
	t.is(ys.sift("AT").allLevel1s().length, 9);

	// console.log(ys.sift("AT001").allSlams());
});

test("getUpcoming", (t) => {
	t.is(ys.getUpcoming("AT001").length, 1);
	t.is(ys.getUpcoming([
		"AT-1"
	]).length, 1);
});
