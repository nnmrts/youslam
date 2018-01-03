import assign from "lodash/assign";

import AT from "./countries/at.js";
import DE from "./countries/de.js";
import IT from "./countries/it.js";

const youslam = {
	AT,
	DE,
	IT
};

Object.keys(youslam).forEach((country) => {
	Object.keys(youslam[country]).forEach((level1) => {
		Object.keys(youslam[country][level1]).forEach((level2) => {
			Object.keys(youslam[country][level1][level2]).forEach((level3) => {
				Object.keys(youslam[country][level1][level2][level3]).forEach((key) => {
					if (key.match(/[A-Z0-9]{3}/) && key.match(/[A-Z0-9]{3}/).index === 0) {
						youslam[country][level1][level2][level3][key].id = country + level1 + level2 + level3 + key;
						youslam[country][level1][level2][level3][key].shortId = `${country}-${parseInt(level1, 10)}-${parseInt(level2, 10)}-${parseInt(level3, 10)}-${key}`;

						youslam[country][level1][level2][level3][key].location = assign(youslam[country][level1][level2][level3][key].location, {
							country,
							level1,
							level2,
							level3,
							zip: youslam[country][level1][level2][level3].zip
						});
					}
				});
			});
		});
	});
});

export default youslam;
