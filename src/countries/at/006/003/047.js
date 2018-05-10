import Slam from "../../../../classes/slam.js";

import SCH from "./047/sch.js";

export default ((label, name, zip) => ({
	SCH: new Slam(SCH, label),
	label,
	name,
	zip
}))("047", "Sankt Martin im Sulmtal");
