import Level2 from "../../classes/level2.js";

import $001 from "./005/001.js";
import $016 from "./005/016.js";

export default (label, name) => ({
	"001": new Level2($001, label),
	"016": new Level2($016, label),
	label,
	name
})("005", "Salzburg");
