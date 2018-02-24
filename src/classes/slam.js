import merge from "lodash/merge";

import utils from "../utils.js";

import methods from "./slam/methods.js";

/**
 *
 *
 * @class Slam
 */
class Slam {
	/**
	 * Creates an instance of Slam.
	 * @param {object} slamObject
	 * slam object
	 * @param {string} parent
	 * parent label
	 * @memberof Slam
	 */
	constructor(slamObject, parent) {
		merge(this, slamObject);

		this.parent = parent;

		this.type = "slam";
	}
}

utils.methodAdder(Slam, methods);

export default Slam;
