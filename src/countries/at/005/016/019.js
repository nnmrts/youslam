import Slam from "../../../../classes/slam.js";

import WOR from "./019/wor.js";

export default (label, name, zip) => ({
	WOR: new Slam(WOR, label),
	label,
	name,
	zip
})("019", "Saalfelden am Steinernen Meer");
