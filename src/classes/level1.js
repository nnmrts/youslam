/**
 *
 *
 * @class Level1
 */
class Level1 {
	/**
	 * Creates an instance of Level1.
	 * @param {object} level1
	 * level1 object
	 * @param {string} parent
	 * parent label
	 * @memberof Level1
	 */
	constructor(level1, parent) {
		Object.keys(level1).forEach((key) => {
			this[key] = level1[key];
		});

		this.parent = parent;

		this.type = "level1";
	}
}

export default Level1;
