import test from "ava";

import Slam from "../../src/classes/slam.js";

test("creates an instance of slam, with \"parent\" and \"type\" property correctly set", (t) => {
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

	t.true(testSlam instanceof Slam);
	t.is(testSlam.type, "slam");
	t.is(testSlam.parent, "001");
});
