import assign from "lodash/assign";
import merge from "lodash/merge";

import countries from "./countries.js";
import methods from "./methods.js";
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
	 * @param {String[]|String} [filter=undefined]
	 * array of ids or paths or string
	 * @param {object} [data={countries}]
	 * custom data, uses default data when omitted
	 * @param {object} [data.countries=countries]
	 * custom countries object
	 */
	constructor(filter = undefined, data = {
		countries
	}) {
		if (typeof filter === "undefined") {
			merge(this, data.countries);
		}
		else {
			merge(this, this.sift(filter));
		}

		this.allSlams((
			country, level1, level2, level3, slam, actualSlam
		) => {
			actualSlam.id = `${country}${level1}${level2}${level3}${slam}`;
			actualSlam.shortId = `${country}-${parseInt(level1, 10)}-${parseInt(level2, 10)}-${parseInt(level3, 10)}-${slam}`;

			actualSlam.location = assign(actualSlam.location, {
				country,
				level1: this[country][level1].name,
				level2: this[country][level1][level2].name,
				level3: this[country][level1][level2][level3].name,
				zip: this[country][level1][level2][level3].zip
			});

			if (level3 === "000") {
				actualSlam.location.name = "Wechselnde Spielorte";
			}

			this[country][level1][level2][level3][slam] = actualSlam;
		});
	}
};

utils.methodAdder(YS, methods);

export default YS;
