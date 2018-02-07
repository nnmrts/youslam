import assign from "lodash/assign";
import flatten from "lodash/flatten";
import has from "lodash/has";
import join from "lodash/join";
import includes from "lodash/includes";

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
			const joinedCountries = (`$${join(flatten([
				filter
			]), "$")}`);

			const regex = new RegExp("$[A-Z]{2}(.*?)$", "g");
			const filteredCountries = [];
			let match = regex.exec(joinedCountries);

			if ((joinedCountries.match(/\$/g) || []).length === 1) {
				filteredCountries.push(this.unzipPath(joinedCountries.replace(/\$/g, "")).country);
			}
			else {
				while (match) {
					filteredCountries.push(match[0].replace(/\$/g, ""));

					match = regex.exec(joinedCountries);
				}
			}

			Object.keys(countries).forEach((country) => {
				if (includes(filteredCountries, country)) {
					this[country] = countries[country];
				}
			});

			let siftedYs = {};

			flatten([
				filter
			]).forEach((path) => {
				if (this.isPath(path) || this.isShortPath(path)) {
					siftedYs = assign(siftedYs, this.sift(path));
				}
			});

			Object.keys(this).forEach((key) => {
				if (has(siftedYs, key)) {
					this[key] = siftedYs[key];
				}
				else {
					delete this[key];
				}
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
