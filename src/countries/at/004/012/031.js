import Slam from "../../../../classes/slam.js";

import FRE from "./031/fre.js";

export default ((label, name, zip) => ({
	FRE: new Slam(FRE, label),
	label,
	name,
	zip
}))("031", "Taiskirchen im Innkreis");
