import test from "ava";

import Slam from "../../../../../src/classes/slam.js";

const testSlam = new Slam({
	dates: {
		2018: {
			4: {
				4: {
					fbEvent: 987654321098765,
					tickets: {
						oeticket: "testslam20180404"
					}
				}
			},
			6: {
				6: {
					fbEvent: 123456789012345,
					tickets: {
						oeticket: "testslam20180606"
					}
				}
			}
		}
	},
	name: "Test Slam Wien",
	shortName: "Test Slam",
	description: "Test Slam ist der beste Slam in Wien.",
	location: {
		street: "Teststraße 1",
		name: "Testclub"
	},
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	},
	tickets: {
		ntry: "testslam"
	}
}, "001");

test("returns an array of 2 objects when no arguments are given", (t) => {
	const testDates = testSlam.getDates();

	t.is(testDates.length, 2);
});

test("returns an array of 2 objects when \"from\" is set to \"2018-01-01\" and \"to\" is set to \"2018-12-31\"", (t) => {
	const testDates = testSlam.getDates("2018-01-01", "2018-12-31");

	t.is(testDates.length, 2);
});

test("returns an array of 1 object when \"from\" is set to \"2018-05-05\" and \"to\" is set to \"2018-12-31\"", (t) => {
	const testDates = testSlam.getDates("2018-05-05", "2018-12-31");

	t.is(testDates.length, 1);
});

test("returns an array of 1 object when \"from\" is set to \"2018-01-01\", \"to\" is set to \"2018-12-31\" and \"amount\" is set to 1", (t) => {
	const testDates = testSlam.getDates("2018-01-01", "2018-12-31", 1);

	t.is(testDates.length, 1);
});

test("returns an empty array when \"from\" is set to \"2018-10-10\", \"to\" is set to \"2018-12-31\"", (t) => {
	const testDates = testSlam.getDates("2018-01-01", "2018-12-31");

	t.is(testDates.length, 1);
});

test("returns an empty array when \"from\" is set to \"2018-10-10\", \"to\" is set to \"2018-12-31\" and \"amount\" is set to 1", (t) => {
	const testDates = testSlam.getDates("2018-01-01", "2018-12-31", 1);

	t.is(testDates.length, 1);
});

test("objects in returned array have the properties slamDate, dateString and moment", (t) => {
	const testDates = testSlam.getDates();

	testDates.forEach((date) => {
		t.truthy(date.slamDate);
		t.truthy(date.dateString);
		t.truthy(date.moment);
	});
});
