import test from "ava";

import YS from "../../../src/youslam.js";
import customCountries from "../../../tests-examples/countries.js";

const ys = new YS(undefined, {
	countries: customCountries
});

console.log(ys);

test("returns an array of 2 objects when \"from\" is set to \"2018-01-01\"" +
	"\nand \"to\" is set to \"2018-12-12\"", (t) => {
	t.is(ys.getUpcoming("2018-01-01", "2018-12-12").length, 2);
});

test("returns an array of 2 objects when \"from\" is set to \"2018-04-04\"" +
	"\nand \"to\" is set to \"2018-12-12\"", (t) => {
	t.is(ys.getUpcoming("2018-04-04", "2018-12-12").length, 2);
});

test("returns an array of 2 objects when \"from\" is set to \"2018-01-01\"" +
	"\nand \"to\" is set to \"2018-06-06\"", (t) => {
	t.is(ys.getUpcoming("2018-01-01", "2018-06-06").length, 2);
});

test("returns an array of 2 objects when \"from\" is set to \"2018-04-04\"" +
	"\nand \"to\" is set to \"2018-06-06\"", (t) => {
	t.is(ys.getUpcoming("2018-04-04", "2018-06-06").length, 2);
});

test("returns an array of 1 object when \"from\" is set to \"2018-05-05\"" +
	"\nand \"to\" is set to \"2018-12-12\"", (t) => {
	t.is(ys.getUpcoming("2018-05-05", "2018-12-12").length, 1);
});

test("returns an array of 1 object when \"from\" is set to \"2018-01-01\"" +
	"\nand \"to\" is set to \"2018-05-05\"", (t) => {
	t.is(ys.getUpcoming("2018-01-01", "2018-05-05").length, 1);
});

test("returns an empty array when \"from\" is set to \"2018-04-05\"" +
	"\nand \"to\" is set to \"2018-06-05\"", (t) => {
	t.is(ys.getUpcoming("2018-04-05", "2018-06-05").length, 0);
});

test("returns an empty array when \"from\" is set to \"2018-01-01\"" +
	"\nand \"to\" is set to \"2018-03-03\"", (t) => {
	t.is(ys.getUpcoming("2018-01-01", "2018-03-03").length, 0);
});

test("returns an empty array when \"from\" is set to \"2018-07-07\"" +
	"\nand \"to\" is set to \"2018-12-12\"", (t) => {
	t.is(ys.getUpcoming("2018-12-12", "2018-12-12").length, 0);
});
