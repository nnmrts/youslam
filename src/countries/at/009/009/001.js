import Slam from "../../../../classes/slam.js";

import SIN from "./001/sin.js";
import STU from "./001/stu.js";

export default (label, name, zip) => ({
	SIN: new Slam(SIN, label),
	STU: new Slam(STU, label),
	label,
	name,
	zip
})("001", "Alsergrund", "1090");
