import Slam from "../../../../classes/slam.js";

import MOR from "./000/mor.js";

export default ((label, name, zip) => ({
	MOR: new Slam(MOR, label),
	label,
	name,
	zip
}))("000", "Autonome Provinz Bozen – Südtirol");
