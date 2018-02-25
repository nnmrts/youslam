import moment from "moment";
import slice from "lodash/slice";

/**
 * @name getAdmissions
 * @memberof Slam
 * @param {String} [delimiter="/"]
 * delimiter
 * @param {moment|String} [from=moment()]
 * moment
 * @param {moment|String} [to=moment().add(100, "y")]
 * moment
 * @param {number} amount
 * maximum amount of dates
 * @returns {String[]}
 * array of admission strings
 */
const getAdmissions = function(delimiter = "/", from = moment(), to = moment().add(100, "y"), amount = undefined) {
	const admissions = [];

	this.getDates(from, to).forEach((date) => {
		admissions.push({
			date,
			admission: date.slamDate.getAdmission(delimiter)
		});
	});

	return slice(admissions.sort((admissionA, admissionB) => {
		if (admissionA.date.moment.isBefore(admissionB.date.moment)) {
			return -1;
		}
		if (admissionA.date.moment.isAfter(admissionB.date.moment)) {
			return 1;
		}

		return 0;
	}), 0, amount);
};

export default getAdmissions;
