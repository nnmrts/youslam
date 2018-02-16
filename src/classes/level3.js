/**
 *
 *
 * @class Level3
 */
class Level3 {
	/**
	 * Creates an instance of Level3.
	 * @param {object} level3
	 * level3 object
	 * @param {string} parent
	 * parent label
	 * @memberof Level3
	 */
	constructor(level3, parent) {
		Object.keys(level3).forEach((key) => {
			this[key] = level3[key];
		});

		this.parent = parent;

		this.type = "level3";
	}
}

export default Level3;
