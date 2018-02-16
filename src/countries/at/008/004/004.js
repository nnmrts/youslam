import Slam from "../../../../classes/slam.js";

import GRA from "./004/gra.js";
import RAU from "./004/rau.js";
import TAG from "./004/tag.js";

export default (label, name, zip) => ({
	GRA: new Slam(GRA, label),
	RAU: new Slam(RAU, label),
	TAG: new Slam(TAG, label),
	label,
	name,
	zip
})("004", "Feldkirch");
