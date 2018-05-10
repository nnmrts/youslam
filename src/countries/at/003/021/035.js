import Slam from "../../../../classes/slam.js";

import DON from "./035/don.js";

export default ((label, name, zip) => ({
	DON: new Slam(DON, label),
	label,
	name,
	zip
}))("035", "Tulln an der Donau", "3430");
