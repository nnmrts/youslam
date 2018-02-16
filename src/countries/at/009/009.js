import Level3 from "../../../classes/level3.js";

import $001 from "./009/001.js";

export default (label, name) => ({
	"001": new Level3($001, label),
	label,
	name
})("009", "Alsergrund");
