import Slam from "../../../../classes/slam.js";

import BES from "./004/bes.js";
import PHI from "./004/phi.js";
import TAG from "./004/tag.js";

export default (label, name, zip) => ({
	BES: new Slam(BES, label),
	PHI: new Slam(PHI, label),
	TAG: new Slam(TAG, label),
	label,
	name,
	zip
})("004", "Baden", "2500");
