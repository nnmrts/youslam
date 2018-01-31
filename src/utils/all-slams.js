/**
 * @name allSlams
 *
 * @param {function} [iterator=()=>{}]
 * iterator to call on every slam
 */
const allSlams = function(iterator = () => {}) {
	const allSlamsToReturn = [];

	this.allLevel3s((
		country, level1, level2, level3, actualLevel3
	) => {
		Object.keys(actualLevel3).forEach((slam) => {
			if (slam.match(/[A-Z0-9]{3}/) && slam.match(/[A-Z0-9]{3}/).index === 0) {
				allSlamsToReturn.push(actualLevel3[slam]);

				iterator(
					country, level1, level2, level3, slam, actualLevel3[slam]
				);
			}
		});
	});

	return allSlamsToReturn;
};

export default allSlams;
