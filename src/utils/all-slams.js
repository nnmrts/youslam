import allLevel3s from "./all-level3s.js";

/**
 * @name allSlams
 *
 * @param {function} iterator
 * iterator to call on every slam
 */
const allSlams = function(iterator) {
	allLevel3s((
		country, level1, level2, level3, actualLevel3
	) => {
		Object.keys(actualLevel3).forEach((slam) => {
			if (slam.match(/[A-Z0-9]{3}/) && slam.match(/[A-Z0-9]{3}/).index === 0) {
				iterator(
					country, level1, level2, level3, slam, actualLevel3[slam]
				);
			}
		});
	});
};

export default allSlams;
