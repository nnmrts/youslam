import merge from "lodash/merge";

/**
 *
 *
 * @class Level3
 */
class Level3 {
	/**
	 * Creates an instance of Level3.
	 * @param {object} level3Object
	 * level3 object
	 * @param {string} parent
	 * parent label
	 * @memberof Level3
	 */
	constructor(level3Object, parent) {
		merge(this, level3Object);

		this.parent = parent;

		this.type = "level3";
	}
}

export default Level3;
