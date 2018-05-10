import Slam from "../../../../classes/slam.js";

import FAN from "./055/fan.js";

export default ((label, name, zip) => ({
	FAN: new Slam(FAN, label),
	label,
	name,
	zip
}))("055", "Wolkersdorf im Weinviertel");
