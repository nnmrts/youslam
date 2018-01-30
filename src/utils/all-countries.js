/**
 * @name allCountries
 *
 * @param {function} iterator
 * iterator to call on every country
 */
const allCountries = function(iterator) {
	Object.keys(this).forEach((country) => {
		if (country.length === 2) {
			iterator(country, this[country]);
		}
	});
};

export default allCountries;
