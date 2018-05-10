import Slam from "../../../../classes/slam.js";

import WOS from "./001/wos.js";

export default ((label, name, zip) => ({
	WOS: new Slam(WOS, label),
	label,
	name,
	zip
}))("001", "Rudolfsheim-Fünfhaus", "1150");
