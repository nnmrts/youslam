import flatten from "lodash/flatten";
import pick from "lodash/pick";

import countries from "../../countries.js";
import methods from "../../methods.js";

const sift = function(filter) {
	const dottedPaths = [];

	flatten([
		filter
	]).forEach((path) => {
		const unzippedPath = this.unzipPath(path);

		let dottedPath = "";

		Object.keys(unzippedPath).sort().forEach((level) => {
			if (level === "country") {
				dottedPath = unzippedPath.country;
			}
			else {
				dottedPaths.push(`${dottedPath}.name`);

				dottedPath += `.${unzippedPath[level]}`;
			}
		});

		dottedPaths.push(dottedPath);
	});

	const siftedObject = pick(countries, dottedPaths);

	Object.keys(methods).forEach((method) => {
		siftedObject[method] = methods[method];
	});

	return siftedObject;
};

export default sift;
