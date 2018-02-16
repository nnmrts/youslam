import Slam from "../../../../classes/slam.js";

import LET from "./023/let.js";

export default (label, name, zip) => ({
	LET: new Slam(LET, label),
	label,
	name,
	zip
})("023", "Wolfsberg");
