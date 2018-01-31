/**
 * @name allCountries
 *
 * @param {function} [iterator=()=>{}]
 * iterator to call on every country
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
