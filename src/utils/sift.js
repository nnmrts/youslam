import pick from "lodash/pick";

import countries from "../countries.js";
import utils from "../utils.js";

const sift = function(path) {
	const unzippedPath = this.unzipPath(path);

	let dottedPath = unzippedPath.country;

	if (unzippedPath.level1) {
		dottedPath += `.${unzippedPath.level1}`;
		if (unzippedPath.level2) {
			dottedPath += `.${unzippedPath.level2}`;

			if (unzippedPath.level3) {
				dottedPath += `.${unzippedPath.level3}`;

				if (unzippedPath.slam) {
					dottedPath += `.${unzippedPath.slam}`;
				}
			}
		}
	}

	const siftedObject = pick(countries, dottedPath);

	Object.keys(utils).forEach((util) => {
		siftedObject[util] = utils[util];
	});

	return siftedObject;
};

export default sift;
