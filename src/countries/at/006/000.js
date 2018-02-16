import Level3 from "../../../classes/level3.js";

import $000 from "./000/000.js";

export default (label, name) => ({
	"000": new Level3($000, label),
	label,
	name
})("000", "Steiermark");
