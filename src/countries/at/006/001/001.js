import Slam from "../../../../classes/slam.js";

import AFF from "./001/aff.js";
import ANT from "./001/ant.js";
import BAT from "./001/bat.js";
import BRU from "./001/bru.js";
import DIA from "./001/dia.js";
import DUC from "./001/duc.js";
import EIN from "./001/ein.js";
import GEW from "./001/gew.js";
import GRI from "./001/gri.js";
import GRU from "./001/gru.js";
import HOE from "./001/hoe.js";
import KLO from "./001/klo.js";
import KOM from "./001/kom.js";

export default ((label, name, zip) => ({
	AFF: new Slam(AFF, label),
	ANT: new Slam(ANT, label),
	BAT: new Slam(BAT, label),
	BRU: new Slam(BRU, label),
	DIA: new Slam(DIA, label),
	DUC: new Slam(DUC, label),
	EIN: new Slam(EIN, label),
	GEW: new Slam(GEW, label),
	GRI: new Slam(GRI, label),
	GRU: new Slam(GRU, label),
	HOE: new Slam(HOE, label),
	KLO: new Slam(KLO, label),
	KOM: new Slam(KOM, label),
	label,
	name,
	zip
}))("001", "Graz");
