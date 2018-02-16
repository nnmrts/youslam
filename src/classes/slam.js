import merge from "lodash/merge";

import methods from "./slam/methods.js";

/**
 *
 *
 * @class Slam
 */
class Slam {
	/**
	 * Creates an instance of Slam.
	 * @param {object} slam
	 * slam object
	 * @param {string} parent
	 * parent label
	 * @memberof Slam
	 */
	constructor(slam, parent) {
		Object.keys(slam).forEach((key) => {
			this[key] = slam[key];
		});

		this.parent = parent;

		this.type = "slam";
	}
}

merge(Slam, methods);

export default Slam;
