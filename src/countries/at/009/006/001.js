import Slam from "../../../../classes/slam.js";

import TAG from "./001/tag.js";

export default (label, name, zip) => ({
	TAG: new Slam(TAG, label),
	label,
	name,
	zip
})("001", "Mariahilf", "1060");
