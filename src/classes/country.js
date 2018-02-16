/**
 *
 *
 * @class Country
 */
class Country {
	/**
	 * Creates an instance of Country.
	 * @param {object} country
	 * country object
	 * @memberof Country
	 */
	constructor(country) {
		Object.keys(country).forEach((key) => {
			this[key] = country[key];
		});

		this.type = "country";
	}
}

export default Country;
