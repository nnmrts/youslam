import Slam from "../../../../classes/slam.js";

import POP from "./000/pop.js";

export default ((label, name) => ({
	POP: new Slam(POP, label),
	name
}))("000", "Wien");
