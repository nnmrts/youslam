import Slam from "../../../../classes/slam.js";

import FRE from "./001/fre.js";
import POW from "./001/pow.js";
import ROT from "./001/rot.js";

export default (label, name, zip) => ({
	FRE: new Slam(FRE, label),
	POW: new Slam(POW, label),
	ROT: new Slam(ROT, label),
	label,
	name,
	zip
})("001", "Margareten", "1050");
