import assign from "lodash/assign";

import countries from "./countries.js";
import utils from "./utils.js";

/**
 * @name YS
 *
 * @class YS
 */
class YS {
	/**
	 * Creates an instance of YS.
	 * @memberof YS
	 * @param {object} [filter={path="/"}]
	 * filter object
	 */
	constructor({
		path = "/",
		ids
	} = {}) {
		Object.keys(countries).forEach((country) => {
			this[country] = countries[country];
		});

		Object.keys(utils).forEach((util) => {
			this[util] = utils[util];
		});

		this.allSlams((
			country, level1, level2, level3, slam, actualSlam
		) => {
			actualSlam.id = country + level1 + level2 + level3 + slam;
			actualSlam.shortId = `${country}-${parseInt(level1, 10)}-${parseInt(level2, 10)}-${parseInt(level3, 10)}-${slam}`;

			actualSlam.location = assign(actualSlam.location, {
				country,
				level1: this[country][level1].name,
				level2: this[country][level1][level2].name,
				level3: this[country][level1][level2][level3].name,
				zip: this[country][level1][level2][level3].zip
			});

			this[country][level1][level2][level3][slam] = actualSlam;
		});
	}
}

export default YS;
