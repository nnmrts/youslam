import padStart from "lodash/padStart";
import split from "lodash/split";

const unzipId = function(id) {
	let country;
	let level1;
	let level2;
	let level3;
	let slam;

	if (this.isId(id)) {
		country = id.slice(0, 2);
		level1 = id.slice(2, 5);
		level2 = id.slice(5, 8);
		level3 = id.slice(8, 11);
		slam = id.slice(11, 14);
	}
	else if (this.isShortId(id)) {
		country = split(id, "-")[0];
		level1 = padStart(split(id, "-")[1], 3, 0);
		level2 = padStart(split(id, "-")[2], 3, 0);
		level3 = padStart(split(id, "-")[3], 3, 0);
		slam = padStart(split(id, "-")[4], 3, 0);
	}

	return {
		country,
		level1,
		level2,
		level3,
		slam,
	};
};

export default unzipId;
