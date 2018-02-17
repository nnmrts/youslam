import Slam from "../../../../classes/slam.js";

import WOR from "./017/wor.js";

export default ((label, name, zip) => ({
	WOR: new Slam(WOR, label),
	label,
	name,
	zip
}))("017", "Höchst");
