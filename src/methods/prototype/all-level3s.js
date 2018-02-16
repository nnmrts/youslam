/**
 * @name allLevel3s
 *
 * @param {function} [iterator=()=>{}]
 * iterator to call on every level3
 * @returns {array}
 * array of all level3s
 */
const allLevel3s = function(iterator = () => {}) {
	const allLevel3sToReturn = [];

	this.allLevel2s((
		country, level1, level2, actualLevel2
	) => {
		Object.keys(actualLevel2).forEach((level3) => {
			if (level3.length === 3) {
				allLevel3sToReturn.push(actualLevel2[level3]);

				iterator(
					country, level1, level2, level3, actualLevel2[level3]
				);
			}
		});
	});

	return allLevel3sToReturn;
};

export default allLevel3s;
