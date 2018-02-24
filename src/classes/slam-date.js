import merge from "lodash/merge";

/**
 *
 *
 * @class SlamDate
 */
class SlamDate {
	/**
	 * Creates an instance of SlamDate.
	 * @param {object} dateObject
	 * date object
	 * @param {slam} slam
	 * slam
	 * @memberof SlamDate
	 */
	constructor(dateObject, slam) {
		merge(this, merge(slam, dateObject));

		delete this.dates;
	}
}

export default SlamDate;
