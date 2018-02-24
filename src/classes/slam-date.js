import isPlainObject from "lodash/isPlainObject";
import merge from "lodash/merge";
import fpMerge from "lodash/fp/merge";

/**
 *
 *
 * @class SlamDate
 */
class SlamDate {
	/**
	 * Creates an instance of SlamDate.
	 * @param {object|string} overrideData
	 * date object or string "default"
	 * @param {slam} slam
	 * slam
	 * @memberof SlamDate
	 */
	constructor(overrideData, slam) {
		let slamToOverride = slam;

		if (isPlainObject(overrideData)) {
			slamToOverride = fpMerge(slam, overrideData);
		}

		merge(this, slamToOverride);

		delete this.dates;
	}
}

export default SlamDate;
