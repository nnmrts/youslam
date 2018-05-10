import Level3 from "../../../classes/level3.js";

import $004 from "./006/004.js";
import $005 from "./006/005.js";
import $008 from "./006/008.js";

export default ((label, name) => ({
	"004": new Level3($004, label),
	"005": new Level3($005, label),
	"008": new Level3($008, label),
	label,
	name
}))("006", "Baden");
