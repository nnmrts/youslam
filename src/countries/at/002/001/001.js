import Slam from "../../../../classes/slam.js";

import IFY from "./001/ify.js";

export default ((label, name, zip) => ({
	IFY: new Slam(IFY, label),
	label,
	name,
	zip
}))("001", "Klagenfurt");
