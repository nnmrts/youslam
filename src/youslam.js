import assign from "lodash/assign";

import countries from "./countries.js";
import utils from "./utils.js";

/**
 * @name YS
 *
 * @class YS
 */
const YS = class {
	/**
	 * Creates an instance of YS.
	 * @memberof YS
	 * @param {array|string} [filter=this.allIds()]
	 * array of ids or paths or string
	 */
	constructor(filter) {
		if (typeof filter === "undefined") {
			Object.keys(countries).forEach((country) => {
				this[country] = countries[country];
			});
		}
		else {
			const siftedYs = this.sift(filter);

			Object.keys(siftedYs).forEach((key) => {
				this[key] = siftedYs[key];
			});
		}

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
};

Object.keys(utils).forEach((util) => {
	YS.prototype[util] = utils[util];
});

export default YS;
