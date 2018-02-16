import Level3 from "../../../classes/level3.js";

import $001 from "./003/001.js";
import $002 from "./003/002.js";

export default (label, name) => ({
	"001": new Level3($001, label),
	"002": new Level3($002, label),
	label,
	name
})("003", "Dornbirn");
