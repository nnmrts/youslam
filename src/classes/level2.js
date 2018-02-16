/**
 *
 *
 * @class Level2
 */
class Level2 {
	/**
	 * Creates an instance of Level2.
	 * @param {object} level2
	 * level2 object
	 * @param {string} parent
	 * parent label
	 * @memberof Level2
	 */
	constructor(level2, parent) {
		Object.keys(level2).forEach((key) => {
			this[key] = level2[key];
		});

		this.parent = parent;

		this.type = "level2";
	}
}

export default Level2;
