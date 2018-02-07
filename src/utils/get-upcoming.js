import moment from "moment";
import flatten from "lodash/flatten";

/**
 * @name getUpcoming
 *
 * @param {array|string} [filter=this.allIds()]
 * array of ids or paths or string
 * @param {number} [amount=3]
 * maximum amount of dates
 * @param {moment} [from=moment()]
 * moment
 * @param {moment} [to=moment().add(100, "y")]
 * moment
 * @returns {array}
 * array of date-slam objects
 */
const getUpcoming = function(filter = this.allIds(), amount = -1, from = moment(), to = moment().add(100, "y")) {
	const slamsToSearch = [];

	flatten([
		filter
	]).forEach((path) => {
		if (this.isId(path) || this.isShortId(path)) {
			slamsToSearch.push(this.getSlam(path));
		}
		else if (this.isPath(path) || this.isShortPath(path)) {
			this.sift(path).allSlams().forEach((slam) => {
				slamsToSearch.push(slam);
			});
		}
	});

	const upcoming = [];

	slamsToSearch.forEach((slam) => {
		upcoming.push({
			date: this.getDates(slam, amount, from, to),
			slam
		});
	});

	flatten(upcoming).sort((dateA, dateB) => {
		if (moment(dateA.date).isBefore(moment(dateB.date))) {
			return -1;
		}
		if (moment(dateA.date).isAfter(moment(dateB.date))) {
			return 1;
		}

		return 0;
	});


	return upcoming;
};

export default getUpcoming;
