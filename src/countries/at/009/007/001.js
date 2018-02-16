import Slam from "../../../../classes/slam.js";

import B00 from "./001/b00.js";
import BIL from "./001/bil.js";
import BOC from "./001/boc.js";
import POP from "./001/pop.js";
import SIN from "./001/sin.js";

export default (label, name, zip) => ({
	B00,
	BIL: new Slam(BIL, label),
	BOC: new Slam(BOC, label),
	POP: new Slam(POP, label),
	SIN: new Slam(SIN, label),
	label,
	name,
	zip
})("001", "Neubau", "1070");
