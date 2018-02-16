import Slam from "../../../../classes/slam.js";

import BIS from "./001/bis.js";
import SPR from "./001/spr.js";

export default (label, name, zip) => ({
	BIS: new Slam(BIS, label),
	SPR: new Slam(SPR, label),
	label,
	name,
	zip
})("001", "Josefstadt", "1080");
