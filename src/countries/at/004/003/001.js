import Slam from "../../../../classes/slam.js";

import $000 from "./001/000.js";

export default (label, name, zip) => ({
	"000": new Slam($000, label),
	label,
	name,
	zip
})("001", "Wels");
