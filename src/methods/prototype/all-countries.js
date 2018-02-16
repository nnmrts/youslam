/**
 * @name allCountries
 *
 * @param {function} [iterator=()=>{}]
 * iterator to call on every country
 * @returns {array}
 * array of all country objects
 */
const allCountries = function(iterator = () => { }) {
	const allCountriesToReturn = [];

	Object.keys(this).forEach((country) => {
		if (country.length === 2) {
			allCountriesToReturn.push(this[country]);

			iterator(country, this[country]);
		}
	});

	return allCountriesToReturn;
};

export default allCountries;
