import Slam from "../../../../classes/slam.js";

import CUP from "./001/cup.js";
import IMW from "./001/imw.js";
import LIB from "./001/lib.js";

export default (parent, name) => ({
	CUP: new Slam(CUP, parent),
	IMW: new Slam(IMW, parent),
	LIB: new Slam(LIB, parent),
	name
})("001", "Innere Stadt", "1010");
