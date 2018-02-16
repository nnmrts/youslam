import Slam from "../../../../classes/slam.js";

import POS from "./001/pos.js";
import TAB from "./001/tab.js";

export default (label, name, zip) => ({
	POS: new Slam(POS, label),
	TAB: new Slam(TAB, label),
	label,
	name,
	zip
})("001", "Linz");
