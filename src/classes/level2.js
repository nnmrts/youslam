import merge from "lodash/merge";

/**
 *
 *
 * @class Level2
 */
class Level2 {
	/**
	 * Creates an instance of Level2.
	 * @param {object} level2Object
	 * level2 object
	 * @param {string} parent
	 * parent label
	 * @memberof Level2
	 */
	constructor(level2Object, parent) {
		merge(this, level2Object);

		this.parent = parent;

		this.type = "level2";
	}
}

export default Level2;
