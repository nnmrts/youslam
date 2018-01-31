import at from "lodash/at";
import padStart from "lodash/padStart";
import sample from "lodash/sample";
import split from "lodash/split";

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
			let country;
			let level1;
			let level2;
			let level3;
			let slam;

			if (this.isId(idOrName)) {
				country = idOrName.slice(0, 2);
				level1 = idOrName.slice(2, 5);
				level2 = idOrName.slice(5, 8);
				level3 = idOrName.slice(8, 11);
				slam = idOrName.slice(11, 14);
			}
			else if (this.isShortId(idOrName)) {
				split(idOrName, "-");
				country = split(idOrName, "-")[0];
				level1 = padStart(split(idOrName, "-")[1], 3, 0);
				level2 = padStart(split(idOrName, "-")[2], 3, 0);
				level3 = padStart(split(idOrName, "-")[3], 3, 0);
				slam = padStart(split(idOrName, "-")[4], 3, 0);
			}

			const path = `${country}.${level1}.${level2}.${level3}.${slam}`;

			foundSlam = this[country][level1][level2][level3][slam];

			foundSlam = at(this, [
				path
			])[0];
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
