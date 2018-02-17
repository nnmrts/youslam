import Slam from "../../../../classes/slam.js";

import ARG from "./001/arg.js";
import WOR from "./001/wor.js";

export default ((label, name, zip) => ({
	ARG: new Slam(ARG, label),
	WOR: new Slam(WOR, label),
	label,
	name,
	zip
}))("001", "Salzburg");
