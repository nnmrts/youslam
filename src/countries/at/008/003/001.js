import Slam from "../../../../classes/slam.js";

import JAM from "./001/jam.js";
import KAM from "./001/kam.js";
import U20 from "./001/u20.js";
import WOR from "./001/wor.js";

export default (label, name, zip) => ({
	JAM: new Slam(JAM, label),
	KAM: new Slam(KAM, label),
	U20: new Slam(U20, label),
	WOR: new Slam(WOR, label),
	label,
	name,
	zip
})("001", "Dornbirn");
