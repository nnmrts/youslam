import Slam from "../../../../classes/slam.js";

import GES from "./001/ges.js";

export default (label, name, zip) => ({
	GES: new Slam(GES, label),
	label,
	name,
	zip
})("001", "Innsbruck");
