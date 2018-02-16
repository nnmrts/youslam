import Level2 from "../../classes/level2.js";

import $000 from "./006/000.js";
import $001 from "./006/001.js";
import $006 from "./006/003.js";
import $021 from "./006/021.js";
import $023 from "./006/023.js";

export default (label, name) => ({
	"000": new Level2($000, label),
	"001": new Level2($001, label),
	"006": new Level2($006, label),
	"021": new Level2($021, label),
	"023": new Level2($023, label),
	label,
	name
})("006", "Steiermark");
