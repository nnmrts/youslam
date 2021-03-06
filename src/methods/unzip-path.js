import padStart from "lodash/padStart";
import split from "lodash/split";

const unzipPath = function(path) {
	let country;
	let level1;
	let level2;
	let level3;
	let slam;

	if (this.isPath(path)) {
		country = path.slice(0, 2);

		if (path.length >= 5) {
			level1 = path.slice(2, 5);
		}
		if (path.length >= 8) {
			level2 = path.slice(5, 8);
		}
		if (path.length >= 11) {
			level3 = path.slice(8, 11);
		}
		if (path.length >= 14) {
			slam = path.slice(14, 17);
		}
	}
	else if (this.isShortPath(path)) {
		country = split(path, "-")[0];

		if (split(path, "-").length >= 2) {
			level1 = padStart(split(path, "-")[1], 3, 0);
		}
		if (split(path, "-").length >= 3) {
			level2 = padStart(split(path, "-")[2], 3, 0);
		}
		if (split(path, "-").length >= 4) {
			level3 = padStart(split(path, "-")[3], 3, 0);
		}

		if (split(path, "-").length >= 5) {
			slam = split(path, "-")[4];
		}
	}

	const unzippedPath = {
		country
	};

	if (level1) {
		unzippedPath.level1 = level1;
	}
	if (level2) {
		unzippedPath.level2 = level2;
	}
	if (level3) {
		unzippedPath.level3 = level3;
	}
	if (slam) {
		unzippedPath.slam = slam;
	}

	return unzippedPath;
};

export default unzipPath;
