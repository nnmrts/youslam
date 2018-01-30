import allCountries from "./all-countries.js";

/**
 * @name allLevel1s
 *
 * @param {function} iterator
 * iterator to call on every level1
 */
const allLevel1s = function(iterator) {
	allCountries((country, actualCountry) => {
		Object.keys(actualCountry).forEach((level1) => {
			if (level1.length === 3) {
				iterator(country, level1, actualCountry[level1]);
			}
		});
	});
};

export default allLevel1s;
