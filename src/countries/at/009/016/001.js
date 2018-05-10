import Slam from "../../../../classes/slam.js";

import BLI from "./001/bli.js";
import FLA from "./001/fla.js";
import STI from "./001/sti.js";
import TEX from "./001/tex.js";
import U20 from "./001/u20.js";

export default ((label, name, zip) => ({
	BLI: new Slam(BLI, label),
	FLA: new Slam(FLA, label),
	STI: new Slam(STI, label),
	TEX: new Slam(TEX, label),
	U20,
	label,
	name,
	zip
}))("001", "Ottakring", "1160");
