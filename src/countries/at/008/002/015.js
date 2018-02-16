import Slam from "../../../../classes/slam.js";

import SPI from "./015/spi.js";

export default (label, name, zip) => ({
	SPI: new Slam(SPI, label),
	label,
	name,
	zip
})("015", "Hard");
