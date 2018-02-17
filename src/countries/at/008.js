import Level2 from "../../classes/level2.js";

import $002 from "./008/002.js";
import $003 from "./008/003.js";
import $004 from "./008/004.js";

export default ((label, name) => ({
	"002": new Level2($002, label),
	"003": new Level2($003, label),
	"004": new Level2($004, label),
	label,
	name
}))("008", "Vorarlberg");
