import Level2 from "../../classes/level2.js";

import $001 from "./009/001.js";
import $004 from "./009/004.js";
import $005 from "./009/005.js";
import $006 from "./009/006.js";
import $007 from "./009/007.js";
import $008 from "./009/008.js";
import $009 from "./009/009.js";
import $015 from "./009/015.js";
import $016 from "./009/016.js";
import $021 from "./009/021.js";
import $022 from "./009/022.js";

export default (label, name) => ({
	"001": new Level2($001, label),
	"004": new Level2($004, label),
	"005": new Level2($005, label),
	"006": new Level2($006, label),
	"007": new Level2($007, label),
	"008": new Level2($008, label),
	"009": new Level2($009, label),
	"015": new Level2($015, label),
	"016": new Level2($016, label),
	"021": new Level2($021, label),
	"022": new Level2($022, label),
	label,
	name
})("009", "Wien");
