import allLevel2s from "./all-level2s.js";

/**
 * @name allLevel3s
 *
 * @param {function} iterator
 * iterator to call on every level3
 */
const allLevel3s = function(iterator) {
	allLevel2s((
		country, level1, level2, actualLevel2
	) => {
		Object.keys(actualLevel2).forEach((level3) => {
			if (level3.length === 3) {
				iterator(
					country, level1, level2, level3, actualLevel2[level3]
				);
			}
		});
	});
};

export default allLevel3s;
