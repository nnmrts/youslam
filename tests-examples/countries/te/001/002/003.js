import Slam from "../../../../../src/classes/slam.js";

import TES from "./003/tes.js";

export default ((label, name, zip) => ({
	TES: new Slam(TES, label),
	label,
	name,
	zip
}))("003", "Testgemeinde", "1234");
