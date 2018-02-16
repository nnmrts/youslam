import Level3 from "../../../classes/level3.js";

import $007 from "./002/007.js";
import $015 from "./002/015.js";
import $017 from "./002/017.js";

export default (label, name) => ({
	"007": new Level3($007, label),
	"015": new Level3($015, label),
	"017": new Level3($017, label),
	label,
	name
})("002", "Bregenz");
