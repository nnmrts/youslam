import Slam from "../../../../classes/slam.js";

import WOR from "./002/wor.js";

export default ((label, name, zip) => ({
	WOR: new Slam(WOR, label),
	label,
	name,
	zip
}))("002", "Feldkirchen in Kärnten");
