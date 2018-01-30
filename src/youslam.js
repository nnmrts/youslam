import assign from "lodash/assign";

import AT from "./countries/at.js";
import DE from "./countries/de.js";
import IT from "./countries/it.js";
import utils from "./utils.js";


const youslam = {
	AT,
	DE,
	IT,
	utils
};

youslam.allSlams((
	country, level1, level2, level3, slam, actualSlam
) => {
	actualSlam.id = country + level1 + level2 + level3 + slam;
	actualSlam.shortId = `${country}-${parseInt(level1, 10)}-${parseInt(level2, 10)}-${parseInt(level3, 10)}-${slam}`;

	actualSlam.location = assign(actualSlam.location, {
		country,
		level1: youslam[country][level1].name,
		level2: youslam[country][level1][level2].name,
		level3: youslam[country][level1][level2][level3].name,
		zip: youslam[country][level1][level2][level3].zip
	});

	youslam[country][level1][level2][level3][slam] = actualSlam;
});

export default youslam;
