import test from "ava";

import loopDeep from "../../src/utils/loop-deep.js";

test("loops through all properties of an object at a given depth", (t) => {
	const testObject = {
		depth1Object: {
			depth2Value: 5
		},
		anotherDepth1Object: {
			anotherDepth2Value: 8
		}
	};

	const testArray = [];

	loopDeep(testObject, 2, (value, key, path) => {
		testArray.push({
			value,
			key,
			path
		});
	});

	t.is(testArray.length, 2);
	t.is(testArray[0].value + testArray[1].value, 13);
});
