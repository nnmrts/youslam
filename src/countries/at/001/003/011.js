import Slam from "../../../../classes/slam.js";

import MUE from "./011/mue.js";

export default (label, name, zip) => ({
	MUE: new Slam(MUE, label),
	label,
	name,
	zip
})("011", "Oslip");
