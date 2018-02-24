import merge from "lodash/merge";

/**
 *
 *
 * @class Level1
 */
class Level1 {
	/**
	 * Creates an instance of Level1.
	 * @param {object} level1Object
	 * level1 object
	 * @param {string} parent
	 * parent label
	 * @memberof Level1
	 */
	constructor(level1Object, parent) {
		merge(this, level1Object);

		this.parent = parent;

		this.type = "level1";
	}
}

export default Level1;
