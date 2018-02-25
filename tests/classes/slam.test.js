import test from "ava";

import Slam from "../../src/classes/slam.js";
import customSlam from "../../tests-examples/countries/te/001/002/003/tes.js";

test("creates an instance of slam, with \"parent\" and \"type\" property correctly set", (t) => {
	const testSlam = new Slam(customSlam, "001");

	t.true(testSlam instanceof Slam);
	t.is(testSlam.type, "slam");
	t.is(testSlam.parent, "001");
});
