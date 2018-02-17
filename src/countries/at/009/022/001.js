import Slam from "../../../../classes/slam.js";

import ABI from "./001/abi.js";

export default ((label, name, zip) => ({
	ABI: new Slam(ABI, label),
	label,
	name,
	zip
}))("001", "Donaustadt", "1220");
