import Level1 from "../classes/level1.js";

import $001 from "./at/001.js";
import $002 from "./at/002.js";
import $003 from "./at/003.js";
import $004 from "./at/004.js";
import $005 from "./at/005.js";
import $006 from "./at/006.js";
import $007 from "./at/007.js";
import $008 from "./at/008.js";
import $009 from "./at/009.js";

export default ((label, name) => ({
	"001": new Level1($001, label),
	"002": new Level1($002, label),
	"003": new Level1($003, label),
	"004": new Level1($004, label),
	"005": new Level1($005, label),
	"006": new Level1($006, label),
	"007": new Level1($007, label),
	"008": new Level1($008, label),
	"009": new Level1($009, label),
	label,
	name
}))("AT", "Österreich");
