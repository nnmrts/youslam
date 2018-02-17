import Level2 from "../../classes/level2.js";

import $001 from "./007/001.js";
import $005 from "./007/005.js";

export default ((label, name) => ({
	"001": new Level2($001, label),
	"005": new Level2($005, label),
	label,
	name
}))("007", "Tirol");
