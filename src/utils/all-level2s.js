/**
 * @name allLevel2s
 *
 * @param {function} [iterator=()=>{}]
 * iterator to call on every level2
 */
const allLevel2s = function(iterator = () => {}) {
	const allLevel2sToReturn = [];

	this.allLevel1s((country, level1, actualLevel1) => {
		Object.keys(actualLevel1).forEach((level2) => {
			if (level2.length === 3) {
				allLevel2sToReturn.push(actualLevel1[level2]);

				iterator(
					country, level1, level2, actualLevel1[level2]
				);
			}
		});
	});

	return allLevel2sToReturn;
};

export default allLevel2s;
