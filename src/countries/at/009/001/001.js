import Slam from "../../../../classes/slam.js";

import CUP from "./001/cup.js";
import IMW from "./001/imw.js";
import LIB from "./001/lib.js";

export default ((label, name) => ({
	CUP: new Slam(CUP, label),
	IMW: new Slam(IMW, label),
	LIB: new Slam(LIB, label),
	name
}))("001", "Innere Stadt", "1010");
