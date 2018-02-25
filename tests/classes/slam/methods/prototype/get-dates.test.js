import test from "ava";

import YS from "../../../../../src/youslam.js";
import customCountries from "../../../../../tests-examples/countries.js";

const testSlam = new YS(undefined, {
	countries: customCountries
}).TE["001"]["002"]["003"].TES;

test("returns an array of 2 objects when no arguments are given", (t) => {
	const testDates = testSlam.getDates();

	t.is(testDates.length, 2);
});

test("returns an array of 2 objects when \"from\" is set to \"2018-01-01\"" +
	"\nand \"to\" is set to \"2018-12-12\"", (t) => {
	const testDates = testSlam.getDates("2018-01-01", "2018-12-12");

	t.is(testDates.length, 2);
});

test("returns an array of 1 object when \"from\" is set to \"2018-05-05\"" +
	"\nand \"to\" is set to \"2018-12-12\"", (t) => {
	const testDates = testSlam.getDates("2018-05-05", "2018-12-12");

	t.is(testDates.length, 1);
});

test("returns an array of 1 object when \"from\" is set to \"2018-01-01\"," +
	"\n\"to\" is set to \"2018-12-12\"" +
	"\nand \"amount\" is set to 1", (t) => {
	const testDates = testSlam.getDates("2018-01-01", "2018-12-12", 1);

	t.is(testDates.length, 1);
});

test("returns an empty array when \"from\" is set to \"2018-10-10\"" +
	"\nand \"to\" is set to \"2018-12-12\"", (t) => {
	const testDates = testSlam.getDates("2018-10-10", "2018-12-12");

	t.is(testDates.length, 0);
});

test("returns an empty array when \"from\" is set to \"2018-10-10\"," +
	"\n\"to\" is set to \"2018-12-12\"" +
	"\nand \"amount\" is set to 1", (t) => {
	const testDates = testSlam.getDates("2018-10-10", "2018-12-12", 1);

	t.is(testDates.length, 0);
});

test("objects in returned array have the properties slamDate, dateString and moment", (t) => {
	const testDates = testSlam.getDates();

	testDates.forEach((date) => {
		t.truthy(date.slamDate);
		t.truthy(date.dateString);
		t.truthy(date.moment);
	});
});
