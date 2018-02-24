import moment from "moment";
import padStart from "lodash/padStart";
import slice from "lodash/slice";
import split from "lodash/split";

import loopDeep from "../../../../utils/loop-deep.js";
import SlamDate from "../../../slam-date.js";

/**
 * @name getDates
 * @memberof Slam
 * @param {moment|string} [from=moment()]
 * moment
 * @param {moment|string} [to=moment().add(100, "y")]
 * moment
 * @param {number} amount
 * maximum amount of dates
 * @returns {array}
 * array of objects with the properties slamDate, dateString and moment
 */
const getDates = function(from = moment(), to = moment().add(100, "y"), amount = undefined) {
	const dateArray = [];

	loopDeep(this.dates, 3, (value, key, path) => {
		const year = split(path, ".")[0];
		const month = split(path, ".")[1];
		const day = split(path, ".")[2];

		const slamDate = new SlamDate(value, this);

		const dateString = `${year}-${padStart(month, 2, 0)}-${padStart(day, 2, 0)}`;

		const dateMoment = moment(dateString);

		if (dateMoment.isSameOrAfter(moment(from)) && dateMoment.isBefore(moment(to))) {
			dateArray.push({
				slamDate,
				dateString,
				moment: dateMoment,
			});
		}
	});

	return slice(dateArray.sort((dateA, dateB) => {
		if (dateA.moment.isBefore(dateB.moment)) {
			return -1;
		}
		if (dateA.moment.isAfter(dateB.moment)) {
			return 1;
		}

		return 0;
	}), 0, amount);
};

export default getDates;
