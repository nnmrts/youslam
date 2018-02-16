import Level2 from "../../classes/level2.js";

import $001 from "./004/001.js";
import $003 from "./004/003.js";
import $010 from "./004/010.js";
import $012 from "./004/012.js";
import $016 from "./004/016.js";

export default (label, name) => ({
	"001": new Level2($001, label),
	"003": new Level2($003, label),
	"010": new Level2($010, label),
	"012": new Level2($012, label),
	"016": new Level2($016, label),
	label,
	name
})("004", "Oberösterreich");
