import Level1 from "../../src/classes/level1.js";

import $001 from "./te/001.js";

export default ((label, name) => ({
	"001": new Level1($001, label),
	label,
	name
}))("TE", "Testland");
