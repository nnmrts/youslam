import moment from "moment";
import flatten from "lodash/flatten";
import slice from "lodash/slice";

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
			slam.getDates(-1, from, to).forEach((date) => {
				upcoming.push({
					date,
					slam
				});
			});
		}
	});

	upcoming.sort((objectA, objectB) => {
		if (moment(objectA.date).isBefore(moment(objectB.date))) {
			return -1;
		}
		if (moment(objectA.date).isAfter(moment(objectB.date))) {
			return 1;
		}

		return 0;
	});

	return slice(upcoming, 0, amount);
};

export default getUpcoming;
