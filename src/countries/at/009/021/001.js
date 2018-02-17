import Slam from "../../../../classes/slam.js";

import KUL from "./001/kul.js";

export default ((label, name, zip) => ({
	KUL: new Slam(KUL, label),
	label,
	name,
	zip
}))("001", "Floridsdorf", "1210");
