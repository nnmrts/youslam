import test from "ava";
import YS from "../dist/youslam.js";


test("ids", (t) => {
	const ys = new YS();

	ys.allSlams((
		country, level1, level2, level3, slam, actualSlam
	) => {
		t.truthy(actualSlam.id);
		t.truthy(actualSlam.shortId);
	}, ys);
});

test("sift", (t) => {
	const ys = new YS();

	t.is(Object.keys(ys.sift("AT").AT).length, 10);
});

test("is", (t) => {
	const ys = new YS();

	t.true(ys.isId("AT001001001ABC"));
	t.false(ys.isId("AT00100A001ABC"));
	t.true(ys.isShortId("AT-1-1-1-ABC"));
	t.false(ys.isShortId("AT-1-A-1-ABC"));

	t.true(ys.isPath("AT001001001"));
	t.false(ys.isPath("AT00100A001"));
	t.true(ys.isShortPath("AT-1-1-1"));
	t.false(ys.isShortPath("AT-1-A-1"));
});

test("filter", (t) => {
	const ysAT = new YS("AT");

	t.falsy(ysAT.DE);
	t.falsy(ysAT.IT);

	const ysAT9 = new YS("AT-9");

	t.falsy(ysAT9.AT["001"]);
	t.falsy(ysAT9.AT["003"]);
	t.falsy(ysAT9.AT["005"]);
	t.falsy(ysAT9.AT["007"]);
	t.truthy(ysAT9.AT["009"]);

	const ysAT5 = new YS("AT-5");

	t.falsy(ysAT5.AT["001"]);
	t.falsy(ysAT5.AT["003"]);
	t.truthy(ysAT5.AT["005"]);
	t.falsy(ysAT5.AT["007"]);
	t.falsy(ysAT5.AT["009"]);

	const ysAT95 = new YS("AT009005");

	t.falsy(ysAT95.AT["009"]["001"]);
	t.falsy(ysAT95.AT["009"]["004"]);
	t.truthy(ysAT95.AT["009"]["005"]);
	t.falsy(ysAT95.AT["009"]["006"]);
	t.falsy(ysAT95.AT["009"]["007"]);

	const ysAT951FRE = new YS("AT-9-5-1-FRE");

	t.truthy(ysAT951FRE.AT["009"]["005"]["001"].FRE);
	t.falsy(ysAT951FRE.AT["009"]["005"]["001"].POW);
	t.falsy(ysAT951FRE.AT["009"]["005"]["001"].ROT);
});

test("getUpcoming", (t) => {
	const ys = new YS();

	t.is(ys.getUpcoming("AT001").length, 1);
	t.is(ys.getUpcoming([
		"AT-1"
	]).length, 1);
});
