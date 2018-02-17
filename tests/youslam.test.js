import test from "ava";

import YS from "../src/youslam.js";

test("an instance called with \"AT\"" +
	"\n\tonly contains AT" +
	"\n\tand does not contain DE or IT", (t) => {
	const ys = new YS("AT");

	t.truthy(ys.AT);

	t.falsy(ys.DE);
	t.falsy(ys.IT);
});

test("an instance called with \"AT-5\"" +
	"\n\tonly contains AT" +
	"\n\t\tthat only contains 005" +
	"\n\t\tand does not contain 001, 003, 007 or 009" +
	"\n\tand does not contain DE or IT", (t) => {
	const ys = new YS("AT-5");

	t.truthy(ys.AT);

	t.truthy(ys.AT["005"]);

	t.falsy(ys.AT["001"]);
	t.falsy(ys.AT["003"]);
	t.falsy(ys.AT["007"]);
	t.falsy(ys.AT["009"]);

	t.falsy(ys.DE);
	t.falsy(ys.IT);
});

test("an instance called with [\"AT-5\", \"AT-9\"]" +
	"\n\tonly contains AT" +
	"\n\t\tthat only contains 005 and 009" +
	"\n\t\tand does not contain 001, 003 or 007" +
	"\n\tand does not contain DE or IT", (t) => {
	const ys = new YS([
		"AT-5",
		"AT-9"
	]);

	t.truthy(ys.AT);

	t.truthy(ys.AT["005"]);
	t.truthy(ys.AT["009"]);

	t.falsy(ys.AT["001"]);
	t.falsy(ys.AT["003"]);
	t.falsy(ys.AT["007"]);

	t.falsy(ys.DE);
	t.falsy(ys.IT);
});

test("an instance called with \"AT-9-5\"" +
	"\n\tonly contains AT" +
	"\n\t\tthat only contains 009" +
	"\n\t\t\tthat only contains 005" +
	"\n\t\t\tand does not contain 001, 006, 015 or 021" +
	"\n\t\tand does not contain 001, 003, 005 or 007" +
	"\n\tand does not contain DE or IT", (t) => {
	const ys = new YS("AT-9-5");

	t.truthy(ys.AT);

	t.truthy(ys.AT["009"]);

	t.truthy(ys.AT["009"]["005"]);

	t.falsy(ys.AT["009"]["001"]);
	t.falsy(ys.AT["009"]["006"]);
	t.falsy(ys.AT["009"]["015"]);
	t.falsy(ys.AT["009"]["021"]);

	t.falsy(ys.AT["001"]);
	t.falsy(ys.AT["003"]);
	t.falsy(ys.AT["005"]);
	t.falsy(ys.AT["007"]);

	t.falsy(ys.DE);
	t.falsy(ys.IT);
});

test("an instance called with \"AT-9-5-1-FRE\"" +
	"\n\tonly contains AT" +
	"\n\t\tthat only contains 009" +
	"\n\t\t\tthat only contains 005" +
	"\n\t\t\t\tthat only contains 001" +
	"\n\t\t\t\t\tthat only contains FRE" +
	"\n\t\t\t\t\tand does not contain POW or ROT" +
	"\n\t\t\t\tand does not contain 002, 005, 009 or 013" +
	"\n\t\t\tand does not contain 001, 006, 015 or 021" +
	"\n\t\tand does not contain 001, 003, 005 or 007" +
	"\n\tand does not contain DE or IT", (t) => {
	const ys = new YS("AT-9-5-1-FRE");

	t.truthy(ys.AT);

	t.truthy(ys.AT["009"]);

	t.truthy(ys.AT["009"]["005"]);

	t.truthy(ys.AT["009"]["005"]["001"]);

	t.truthy(ys.AT["009"]["005"]["001"].FRE);

	t.falsy(ys.AT["009"]["005"]["001"].POW);
	t.falsy(ys.AT["009"]["005"]["001"].ROT);

	t.falsy(ys.AT["009"]["005"]["002"]);
	t.falsy(ys.AT["009"]["005"]["005"]);
	t.falsy(ys.AT["009"]["005"]["009"]);
	t.falsy(ys.AT["009"]["005"]["013"]);

	t.falsy(ys.AT["009"]["001"]);
	t.falsy(ys.AT["009"]["006"]);
	t.falsy(ys.AT["009"]["015"]);
	t.falsy(ys.AT["009"]["021"]);

	t.falsy(ys.AT["001"]);
	t.falsy(ys.AT["003"]);
	t.falsy(ys.AT["005"]);
	t.falsy(ys.AT["007"]);

	t.falsy(ys.DE);
	t.falsy(ys.IT);
});
