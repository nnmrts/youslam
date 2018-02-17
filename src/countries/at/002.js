import Level2 from "../../classes/level2.js";

import $001 from "./002/001.js";
import $002 from "./002/002.js";
import $006 from "./002/006.js";
import $009 from "./002/009.js";
import $010 from "./002/010.js";

export default ((label, name) => ({
	"001": new Level2($001, label),
	"002": new Level2($002, label),
	"006": new Level2($006, label),
	"009": new Level2($009, label),
	"010": new Level2($010, label),
	label,
	name
}))("002", "Kärnten");
