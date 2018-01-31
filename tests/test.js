import test from "ava";
import YS from "../src/youslam.js";

const ys = YS();

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
});

test("getUpcoming", (t) => {
	t.is(ys.getUpcoming("AT001").length, 1);
	t.is(ys.getUpcoming([
		"AT-1"
	]).length, 1);
});

test("is", (t) => {
	t.true(ys.isId("AT001001001ABC"));
	t.false(ys.isId("AT00100A001ABC"));
	t.true(ys.isShortId("AT-1-1-1-ABC"));
	t.false(ys.isShortId("AT-1-A-1-ABC"));
});
