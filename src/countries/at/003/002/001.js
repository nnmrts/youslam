import Slam from "../../../../classes/slam.js";

import LIT from "./001/lit.js";
import TAG from "./001/tag.js";

export default (label, name, zip) => ({
	LIT: new Slam(LIT, label),
	TAG: new Slam(TAG, label),
	label,
	name,
	zip
})("001", "St. Pölten");
