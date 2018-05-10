import Slam from "../../../../classes/slam.js";

import IFY from "./035/ify.js";

export default ((label, name, zip) => ({
	IFY: new Slam(IFY, label),
	label,
	name,
	zip
}))("035", "Spittal an der Drau");
