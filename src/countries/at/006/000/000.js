import Slam from "../../../../classes/slam.js";

import U20 from "./000/u20.js";

export default (label, name, zip) => ({
	U20: new Slam(U20, label),
	label,
	name,
	zip
})("000", "Steiermark");
