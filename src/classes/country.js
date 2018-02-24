import merge from "lodash/merge";

/**
 *
 *
 * @class Country
 */
class Country {
	/**
	 * Creates an instance of Country.
	 * @param {object} countryObject
	 * country object
	 * @memberof Country
	 */
	constructor(countryObject) {
		merge(this, countryObject);

		this.type = "country";
	}
}

export default Country;
