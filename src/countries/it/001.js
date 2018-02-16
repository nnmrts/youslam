import Level2 from "../../classes/level2.js";

import $001 from "./001/001.js";

export default (label, name) => ({
	"001": new Level2($001, label),
	label,
	name
})("001", "Trentino-Südtirol");
