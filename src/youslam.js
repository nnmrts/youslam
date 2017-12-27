import AT from "./countries/at.js";
import DE from "./countries/de.js";
import IT from "./countries/it.js";

const youslam = {
	AT,
	DE,
	IT,
	yay: 3
};

Object.keys(youslam).forEach((country) => {
	Object.keys(youslam[country]).forEach((first) => {
		Object.keys(youslam[country][first]).forEach((second) => {
			Object.keys(youslam[country][first][second]).forEach((third) => {
				Object.keys(youslam[country][first][second][third]).forEach((key) => {
					if (key.match(/[A-Z0-9]{3}/) && key.match(/[A-Z0-9]{3}/).index === 0) {
						youslam[country][first][second][third][key].id = country + first + second + third + key;
						youslam[country][first][second][third][key].shortId = `${country}-${parseInt(first, 10)}-${parseInt(second, 10)}-${parseInt(third, 10)}-${key}`;
					}
				});
			});
		});
	});
});

export default youslam;
