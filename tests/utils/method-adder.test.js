import test from "ava";

import methodAdder from "../../src/utils/method-adder.js";

test("methodAdder", (t) => {
	const TestClass = class { };
	const methods = {
		prototype: {
			testPrototypeMethod() {
				return true;
			}
		},
		testMethod: () => true
	};

	methodAdder(TestClass, methods);

	t.true(TestClass.testMethod());
	t.true(new TestClass().testPrototypeMethod());
});
