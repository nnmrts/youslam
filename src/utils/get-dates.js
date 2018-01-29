import moment from "moment";
import padStart from "lodash/padStart";

/**
 * @name getDates
 *
 * @param {youslam.slam} slam youslam slam object
 * @param {number} [amount=3] maximum amount of dates
 * @param {moment} [from=moment()] moment
 * @param {moment} [to=moment().add(100, "y")] moment
 * @returns {array} array of dates
 */
const getDates = (
	slam, amount = 3, from = moment(), to = moment().add(100, "y")
) => {
	if (from.isSameOrBefore(to)) {
		if (slam.dates) {
			const dateArray = [];

			Object.keys(slam.dates).forEach((year) => {
				Object.keys(slam.dates[year]).forEach((month) => {
					Object.keys(slam.dates[year][month]).forEach((day) => {
						const date = moment(`${year}-${padStart(month, 2, 0)}-${padStart(day, 2, 0)}`);

						if (date.isSameOrAfter(from) && date.isBefore(to)) {
							dateArray.push(date.format("YYYY-MM-DD"));
						}
					});
				});
			});

			dateArray.splice(amount);

			return dateArray;
		}

		throw new Error("[youslam[getDates]]: given slam has no dates");
	}
	else {
		throw new Error("[youslam[getDates]]: invalid timespan, \"from\" is after \"to\"");
	}
};

export default getDates;
