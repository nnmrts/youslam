/**
 * @name allLevel1s
 *
 * @param {function} [iterator=()=>{}]
 * iterator to call on every level1
 * @returns {array}
 * array of all level1s
 */
const allLevel1s = function(iterator = () => { }) {
	const allLevel1sToReturn = [];

	this.allCountries((country, actualCountry) => {
		Object.keys(actualCountry).forEach((level1) => {
			if (level1.length === 3) {
				allLevel1sToReturn.push(actualCountry[level1]);

				iterator(country, level1, actualCountry[level1]);
			}
		});
	});

	return allLevel1sToReturn;
};

export default allLevel1s;
