/**
 * @name methodAdder
 *
 * @param {class} theClass
 * the class you want to add methods to
 * @param {object} methods
 * the methods you want add to the class
 */
const methodAdder = (theClass, methods = {}) => {
	Object.keys(methods).forEach((method) => {
		if (method === "prototype") {
			Object.keys(methods[method]).forEach((prototypeMethod) => {
				theClass.prototype[prototypeMethod] = methods[method][prototypeMethod];
			});
		}
		else {
			theClass[method] = methods[method];
		}
	});
};

export default methodAdder;
