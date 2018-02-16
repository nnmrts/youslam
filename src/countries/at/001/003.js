import Level3 from "../../../classes/level3.js";

import $011 from "./003/011.js";

export default (label, name) => ({
	"011": new Level3($011, label),
	label,
	name
})("003", "Eisenstadt-Umgebung");
