import sample from "lodash/sample";

/**
 * @name getSlam
 *
 * @param {string} [idOrName]
 * string that's either an id or name of a slam
 *
 * if ommited, a random slam is picked
 * @returns {object}
 * slam or random slam if no string is given
 */
const getSlam = function(idOrName) {
	let foundSlam = {};

	if (typeof idOrName === "string") {
		if (this.isId(idOrName) || this.isShortId(idOrName)) {
			const unzippedId = this.unzipId(idOrName);

			const countryLabel = unzippedId.country;
			const level1Label = unzippedId.level1;
			const level2Label = unzippedId.level2;
			const level3Label = unzippedId.level3;
			const slamLabel = unzippedId.slam;

			foundSlam = this[countryLabel][level1Label][level2Label][level3Label][slamLabel];
		}
		else {
			this.allSlams().forEach((slam) => {
				if (slam.name === idOrName || slam.shortName === idOrName) {
					foundSlam = slam;
				}
			});
		}
	}
	else if (typeof idOrName === "undefined") {
		foundSlam = sample(sample(sample(sample(sample(this)))));
	}

	return foundSlam;
};

export default getSlam;
