import Level1 from "../classes/level1.js";

import $001 from "./it/001.js";

export default ((label, name) => ({
	"001": new Level1($001, label),
	label,
	name
}))("IT", "Italien");
