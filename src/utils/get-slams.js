import compact from "lodash/compact";

/**
 * @name getSlams
 *
 * @param {array} [idsOrNames]
 * array of slam ids or names
 * @returns {array}
 * array of found slams
 */
const getSlams = function(idsOrNames = []) {
	const foundSlams = [];

	idsOrNames.forEach((idOrName) => {
		foundSlams.push(this.getSlam(idOrName));
	});

	return compact(foundSlams);
};

export default getSlams;
