import Slam from "../../../../classes/slam.js";

import WOR from "./005/wor.js";

export default (label, name, zip) => ({
	WOR: new Slam(WOR, label),
	label,
	name,
	zip
})("005", "Berndorf", "2560");
