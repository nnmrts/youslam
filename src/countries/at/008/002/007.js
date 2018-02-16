import Slam from "../../../../classes/slam.js";

import DEA from "./007/dea.js";

export default (label, name, zip) => ({
	DEA: new Slam(DEA, label),
	label,
	name,
	zip
})("007", "Bregenz");
