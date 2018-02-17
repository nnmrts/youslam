import flatten from "lodash/flatten";
import pick from "lodash/pick";

import countries from "../../countries.js";
import methods from "../../methods.js";

const sift = function(filter) {
	const dottedPaths = [];

	flatten([
		filter
	]).forEach((path) => {
		const unzippedPath = this.constructor.unzipPath(path);

		let dottedPath = "";

		Object.keys(unzippedPath).sort().forEach((level) => {
			if (level === "country") {
				dottedPath = unzippedPath.country;
			}
			else {
				dottedPaths.push(`${dottedPath}.name`);
				dottedPaths.push(`${dottedPath}.label`);
				dottedPaths.push(`${dottedPath}.type`);

				dottedPath += `.${unzippedPath[level]}`;
			}
		});

		dottedPaths.push(dottedPath);
	});

	const siftedObject = pick(countries, dottedPaths);

	Object.keys(methods.prototype).forEach((method) => {
		siftedObject[method] = methods.prototype[method];
	});

	return siftedObject;
};

export default sift;
