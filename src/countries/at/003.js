import Level2 from "../../classes/level2.js";

import $002 from "./003/002.js";
import $006 from "./003/006.js";
import $016 from "./003/016.js";
import $021 from "./003/021.js";

export default (label, name) => ({
	"002": new Level2($002, label),
	"006": new Level2($006, label),
	"016": new Level2($016, label),
	"022": new Level2($021, label),
	label,
	name
})("003", "Niederösterreich");
