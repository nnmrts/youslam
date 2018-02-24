import isPlainObject from "lodash/isPlainObject";

/**
 * @name loopDeep
 *
 * @param {object} object
 * object to loop thorugh
 * @param {number} depth
 * depth
 * @param {function} iterator
 * function to call on every key on given depth
 * @returns {array}
 * array of all values found on given depth
 */
const loopDeep = (object = {}, depth = 1, iterator = () => {}) => {
	let currentDepth = 1;
	let currentSet = [
		{
			value: object,
			path: ""
		}
	];

	while (currentDepth <= depth) {
		currentSet.forEach((item) => {
			// on depth n
			currentSet = [];

			if (isPlainObject(item.value)) {
				Object.keys(item.value).forEach((currentKey) => {
					if (currentDepth === depth) {
						iterator(item.value[currentKey], currentKey, `${item.path}${currentKey}`);
					}
					else {
						currentSet.push({
							value: item.value[currentKey],
							path: `${item.path}${currentKey}.`
						});
					}
				});
			}
		});

		currentDepth += 1;
	}

	return currentSet;
};

export default loopDeep;
