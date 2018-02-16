import moment from "moment";
import padStart from "lodash/padStart";
import slice from "lodash/slice";
import flatten from "lodash/flatten";

/**
 * @name getDates
 *
 * @param {number} [amount=3] maximum amount of dates
 * @param {moment} [from=moment()] moment
 * @param {moment} [to=moment().add(100, "y")] moment
 * @returns {array} array of date strings
 */
const getDates = (amount = -1, from = moment(), to = moment().add(100, "y")) => {
	if (from.isSameOrBefore(to)) {
		if (this.dates) {
			const dateArray = [];

			Object.keys(this.dates).forEach((year) => {
				Object.keys(this.dates[year]).forEach((month) => {
					Object.keys(this.dates[year][month]).forEach((day) => {
						const date = moment(`${year}-${padStart(month, 2, 0)}-${padStart(day, 2, 0)}`);

						if (date.isSameOrAfter(from) && date.isBefore(to)) {
							dateArray.push(date.format("YYYY-MM-DD"));
						}
					});
				});
			});

			if (dateArray.length > 0) {
				return slice(flatten(dateArray).sort((dateA, dateB) => {
					if (moment(dateA).isBefore(moment(dateB))) {
						return -1;
					}
					if (moment(dateA).isAfter(moment(dateB))) {
						return 1;
					}

					return 0;
				}), 0, amount);
			}
		}
	}
	else {
		throw new Error("[youslam[getDates]]: invalid timespan, \"from\" is after \"to\"");
	}
};

export default getDates;
