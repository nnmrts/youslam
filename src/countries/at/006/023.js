import Level3 from "../../../classes/level3.js";

import $068 from "./023/068.js";
import $079 from "./023/079.js";

export default ((label, name) => ({
	"068": new Level3($068, label),
	"079": new Level3($079, label),
	label,
	name
}))("023", "Südoststeiermark");
