import moment from "moment";
import flatten from "lodash/flatten";
import slice from "lodash/slice";

/**
 * @name getUpcoming
 *
 * @param {moment|string} [from=moment()]
 * moment
 * @param {moment|string} [to=moment().add(100, "y")]
 * moment
 * @param {number} [amount=undefined]
 * maximum amount of dates
 * @param {array|string} [filter=this.allIds()]
 * array of ids or paths or string
 * @returns {array}
 * array of objects with the properties slamDate, dateString and moment
 */
const getUpcoming = function(from = moment(), to = moment().add(100, "y"), amount = undefined, filter = this.allIds()) {
	const slamsToSearch = [];

	flatten([
		filter
	]).forEach((path) => {
		if (this.constructor.isId(path) || this.constructor.isShortId(path)) {
			slamsToSearch.push(this.getSlam(path));
		}
		else if (this.constructor.isPath(path) || this.constructor.isShortPath(path)) {
			this.sift(path).allSlams().forEach((slam) => {
				slamsToSearch.push(slam);
			});
		}
	});

	const upcoming = [];

	slamsToSearch.forEach((slam) => {
		if (slam.dates) {
			slam.getDates(from, to).forEach((date) => {
				upcoming.push(date);
			});
		}
	});

	return slice(upcoming.sort((dateA, dateB) => {
		if (dateA.moment.isBefore(dateB.moment)) {
			return -1;
		}
		if (dateA.moment.isAfter(dateB.moment)) {
			return 1;
		}

		return 0;
	}), 0, amount);
};

export default getUpcoming;
