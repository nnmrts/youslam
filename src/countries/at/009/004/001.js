import Slam from "../../../../classes/slam.js";

import STU from "./001/stu.js";

export default (label, name, zip) => ({
	STU: new Slam(STU, label),
	label,
	name,
	zip
})("001", "Wieden", "1040");
