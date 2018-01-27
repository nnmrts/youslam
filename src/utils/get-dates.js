import moment from "moment";
import padStart from "lodash/padStart";

const getDates = (slam, amount = 3, from = moment(), to = moment().add(100, "y")) => {
	if (from.isSameOrBefore(to)) {
		if (slam.dates) {
			dateArray = [];

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
		else {
			throw new Error("[youslam[getDates]]: given slam has no dates");
		}
	}
	else {
		throw new Error("[youslam[getDates]]: invalid timespan, \"from\" is after \"to\"");
	}
}

export default getDates;