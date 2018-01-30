import allLevel1s from "./all-level1s.js";

/**
 * @name allLevel2s
 *
 * @param {function} iterator
 * iterator to call on every level2
 */
const allLevel2s = function(iterator) {
	allLevel1s((country, level1, actualLevel1) => {
		Object.keys(actualLevel1).forEach((level2) => {
			if (level2.length === 3) {
				iterator(
					country, level1, level2, actualLevel1[level2]
				);
			}
		});
	});
};

export default allLevel2s;
