'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var assign = _interopDefault(require('lodash/assign'));
var moment = _interopDefault(require('moment'));
var padStart = _interopDefault(require('lodash/padStart'));
var sample = _interopDefault(require('lodash/sample'));
var compact = _interopDefault(require('lodash/compact'));
var flatten = _interopDefault(require('lodash/flatten'));
var split = _interopDefault(require('lodash/split'));

const MUE = {
	dates: {
		2017: {
			12: {
				15: {
					time: "20:00:00"
				}
			}
		}
	},
	name: "Müh Slam",
	accommodation: "redundant",
	admission: "5 €",
	audience: "50",
	fee: "0 €",
	tour: false,
	masters: [
		"Ana Ryue"
	],
	type: "challenging",
	travel: "full",
	city: "Oslip",
	first: "2014-08-01"
};

const $3_011 = {
	MUE,
	name: "Oslip"
};

const $2_003 = {
	"011": $3_011,
	name: "Eisenstadt-Umgebung"
};

const $1_001 = {
	"003": $2_003,
	name: "Burgenland"
};

const IFY = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "100",
	fee: "65 €",
	name: "Slam if you can! (kurz: SlamIYC)",
	tour: false,
	masters: ["Carmen Kassekert"],
	type: "challenging",
	travel: "full",
	city: "Klagenfurt am Wörthersee",
	first: "2010-03-01"
};

const $3_001 = {
	IFY,
	name: "Klagenfurt"
};

const $2_001 = {
	"001": $3_001,
	name: "Klagenfurt"
};

const IFY$2 = {
	accommodation: "hotel",
	admission: "5 €",
	audience: "80",
	fee: "70 €",
	name: "SlamIYC VillacherRaum",
	tour: false,
	masters: [
		"Carmen Kassekert"
	],
	type: "challenging",
	travel: "full",
	city: "Villach",
	first: "2015-04-01"
};

const $3_001$2 = {
	IFY: IFY$2,
	name: "Villach"
};

const $2_002 = {
	"001": $3_001$2,
	name: "Villach"
};

const IFY$4 = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "80",
	fee: "20 €",
	name: "SlamIYC Spittal",
	tour: false,
	masters: [
		"Carmen Kassekert",
		"Sabrina Öhler"
	],
	type: "challenging",
	travel: "full",
	city: "Spittal an der Drau",
	first: "2016-02-01"
};

const $3_035 = {
	IFY: IFY$4,
	name: "Spittal an der Drau"
};

const $2_006 = {
	"035": $3_035,
	name: "Spittal an der Drau"
};

const LET = {
	accommodation: "hotel",
	admission: "5 €",
	audience: "70",
	fee: "40 €",
	name: "Lets slam, Wolfsberg!",
	tour: false,
	masters: [
		"Carmen Kassekert",
		"Elisabeth Leiss"
	],
	type: "challenging",
	travel: "full",
	city: "Wolfsberg",
	first: "2017-05-01"
};

const $3_023 = {
	LET,
	name: "Wolfsberg"
};

const $2_009 = {
	"023": $3_023,
	name: "Wolfsberg"
};

const WOR = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "60",
	fee: "30 €",
	name: "WortKunst Feldkirchen",
	tour: false,
	masters: ["Carmen Kassekert", "Doris Rottermanner", "Lisa Fian"],
	type: "challenging",
	travel: "full",
	city: "Feldkirchen in Kärnten",
	first: "2017-01-01"
};

const $3_002 = {
	WOR,
	name: "Feldkirchen in Kärnten"
};

const $2_010 = {
	"002": $3_002,
	name: "Feldkirchen"
};

const $1_002 = {
	"001": $2_001,
	"002": $2_002,
	"006": $2_006,
	"009": $2_009,
	"010": $2_010,
	name: "Kärnten"
};

const LIT = {
	name: "LitGes Poetry Slam",
	accessible: true,
	accommodation: "redundant",
	admission: false,
	audience: "60",
	fee: "0 €",
	tour: false,
	masters: [
		"Marlies Eder",
		"Andi Pianka"
	],
	type: "open",
	travel: false,
	city: "St. Pölten",
	first: "2003-11-01"
};

const TAG = {
	dates: {
		2018: {
			1: {
				18: {
					time: "20:00:00"
				}
			}
		}
	},
	name: "Tagebuch Slam"
};

const $3_001$4 = {
	LIT,
	TAG,
	name: "St. Pölten"
};

const $2_002$2 = {
	"001": $3_001$4,
	name: "St. Pölten"
};

const BES = {
	name: "Best of Poetry Slam Baden",
	shortName: "Best of Poetry Slam",
	description: "Poetry Slam - das ist Wettspringen mit dem eigenen Puls im Takt der Freude. Das ist moderne Literatur auf Bühnen beschworen, Texte zum Greifen und Staunen, das Lächeln im Anschlag, der Blick entzückt.\n\nIm Cinema Paradiso Baden begrüßen wir vier der besten Sprachkünstlerinnen und - künstler des Landes.\nHier dichten, rappen, lesen, performen die Vier um die Gunst und den Applaus des Publikums.\n\nEin Abend zum Lachen, Staunen, Jubeln - im Sinne des Genusses.",
	location: {
		street: "Beethovengasse 2a",
		name: "Cinema Paradiso"
	},
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	}
};

const PHI = {
	dates: {
		2018: {
			2: {
				22: {
					time: "20:15:00"
				}
			}
		}
	},
	accesible: true,
	name: "PhiloSlam",
	accessible: true,
	accommodation: false,
	admission: "voluntary",
	audience: "20",
	fee: "0 €",
	tour: false,
	masters: [
		"Cornelia Bruell"
	],
	type: "open",
	travel: false,
	city: "Baden",
	first: "2016-03-01"
};

const TAG$2 = {
	dates: {
		2018: {
			1: {
				25: {
					time: "20:00:00"
				}
			}
		}
	},
	name: "Tagebuch Slam"
};

const $3_004 = {
	BES,
	PHI,
	TAG: TAG$2,
	name: "Baden",
	zip: 2500
};

const WOR$2 = {
	dates: {
		2017: {
			12: {
				9: {
					time: "19:30:00"
				}
			}
		},
		2018: {
			3: {
				3: {
					fbEvent: 2018855465025112
				}
			}
		}
	},
	name: "Wortschmiede Poetry Slam",
	shortName: "Wortschmiede",
	description: "Der Poetry Slam kommt an die Tristing.\n\nBeste Wortkunst von Stadt bis Land. Ob zum Lachen oder Träumen, zum Genießen oder Ausrasten. Fünf Minuten Bühnenzeit für selbst verfasste Texte. Alle Textsorten sind willkommen, der Art des Vortrags keine Grenzen gesetzt.Requisiten gibt’s keine.\n\nNeulinge sind auf dieser Bühne ausdrücklich willkommen. Die siegende Person qualifiziert sich automatisch für das große Jahresfinale. Anmeldungen bitte unter contact @fomp.eu\n\nDas Publikum ist die Jury. Der Kuchen ist köstlich.",
	location: {
		street: "Leobersdorferstraße 58a",
		name: "Café KunstWerk"
	},
	time: {
		inlet: "19:30:00",
		start: "19:30:00"
	},
	admission: "voluntary"
};

const $3_005 = {
	WOR: WOR$2,
	name: "Berndorf",
	zip: 2560
};

const $000 = {
	accommodation: "private",
	admission: false,
	audience: "15",
	fee: "80 €",
	name: "Poetry Slam Lindabrunn",
	tour: false,
	masters: ["Mario Tomic"],
	type: "challenging",
	travel: false,
	city: "Lindabrunn",
	first: "2015-07-01"
};

const $3_008 = {
	"000": $000,
	name: "Enzesfeld-Lindabrunn"
};

const $2_006$2 = {
	"004": $3_004,
	"005": $3_005,
	"008": $3_008,
	name: "Baden"
};

const FAN = {
	dates: {
		2017: {
			11: {
				25: {
					time: "20:00:00"
				}
			}
		}
	},
	name: "fan of slam"
};

const $3_055 = {
	FAN,
	name: "Wolkersdorf im Weinviertel"
};

const $2_016 = {
	"055": $3_055,
	name: "Mistelbach"
};

const DON = {
	dates: {
		2017: {
			12: {
				1: "default"
			}
		}
	},
	name: "Donaudichten Poetry Slam",
	shortName: "Donaudichten",
	description: "Donaudichten ist ein Poetry Slam mit geladenen Slammerinnen und Slammern aus dem gesamten deutschsprachigen Raum. Und gerne mit dir. Wenn du mit deinem Text an das Mikro willst, dann wollen wir das auch. Am Nachmittag des Veranstaltungstages bieten wir einen kostenlosen Workshop an. Zum kreativen Austausch, zum Schreiben, zum Feilen an Texten, zum Kennenlernen.\nAnmeldungen bitte unter contact@fomp.eu",
	location: {
		street: "Albrechtsgasse 18",
		name: "Kunstwerkstatt"
	},
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	}
};

const $3_035$2 = {
	DON,
	name: "Tulln an der Donau",
	zip: 3430
};

const $2_021 = {
	"035": $3_035$2,
	name: "Tulln"
};

const $1_003 = {
	"002": $2_002$2,
	"006": $2_006$2,
	"016": $2_016,
	"021": $2_021,
	name: "Niederösterreich"
};

const POS = {
	accessible: true,
	accommodation: "private",
	admission: "voluntary",
	audience: "100",
	fee: "0 €",
	name: "Post Skriptum Poetry Slam",
	tour: false,
	masters: [
		"Sevi"
	],
	type: "open",
	travel: "full",
	city: "Linz",
	first: "2005-03-01"
};

const TAB = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "350",
	fee: "80 €",
	name: "Tabakfabrik Poetry Slam",
	tour: "a",
	masters: [
		"Sevi"
	],
	type: "closed",
	travel: "full",
	city: "Linz",
	first: "2014-08-01"
};

const $3_001$6 = {
	POS,
	TAB,
	name: "Linz"
};

const $2_001$2 = {
	"001": $3_001$6,
	name: "Linz"
};

const $000$2 = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "90",
	fee: "30 €",
	name: "Welser Poetry Slam",
	tour: "a",
	masters: [
		"Sevi"
	],
	type: "challenging",
	travel: "full",
	city: "Wels",
	first: "2015-02-01"
};

const $3_001$8 = {
	"000": $000$2,
	name: "Wels"
};

const $2_003$2 = {
	"001": $3_001$8,
	name: "Wels"
};

const $000$4 = {
	accessible: true,
	accommodation: "private",
	admission: "voluntary",
	audience: "90",
	fee: "50 €",
	name: "Neuhofner Poetry Slam",
	tour: false,
	masters: [
		"David Samhaber"
	],
	type: "challenging",
	travel: "full",
	city: "Neuhofen an der Krems",
	first: "2016-09-01"
};

const $3_014 = {
	"000": $000$4,
	name: "Neuhofen an der Krems"
};

const $2_010$2 = {
	"014": $3_014,
	name: "Linz-Land"
};

const FRE = {
	accessible: true,
	accommodation: false,
	admission: "6 €",
	audience: "150",
	fee: "50 €",
	name: "Free Tree Poetry Slam",
	tour: false,
	masters: [
		"Sevi"
	],
	type: "challenging",
	travel: "full",
	city: "Taiskirchen im Innkreis",
	first: "2012-07-01"
};

const $3_031 = {
	FRE,
	name: "Taiskirchen im Innkreis"
};

const $2_012 = {
	"031": $3_031,
	name: "Ried im Innkreis"
};

const $000$6 = {
	accessible: true,
	accommodation: "private",
	admission: "10 €",
	audience: "60",
	fee: "50 €",
	name: "Feldkirchner Poetry Slam",
	tour: false,
	masters: [
		"Fisch (Manuel Thalhammer)"
	],
	type: "challenging",
	travel: "full",
	city: "Feldkirchen an der Donau",
	first: "2015-02-01"
};

const $3_006 = {
	$000: $000$6,
	name: "Feldkirchen an der Donau"
};

const $2_016$2 = {
	"006": $3_006,
	name: "Urfahr-Umgebung"
};

const $1_004 = {
	"001": $2_001$2,
	"003": $2_003$2,
	"010": $2_010$2,
	"012": $2_012,
	"016": $2_016$2,
	name: "Oberösterreich"
};

const ARG = {
	accessible: true,
	accommodation: "hotel",
	admission: "10 €",
	audience: "200",
	fee: "70 €",
	name: "ARGE Slam",
	tour: "b",
	masters: [
		"Ko Bylanzky"
	],
	type: "challenging",
	travel: "full",
	city: "Salzburg",
	first: "2009-02-01"
};

const WOR$4 = {
	accommodation: false,
	admission: false,
	audience: "170",
	fee: "0 €",
	name: "WORTVOLL - Open Poetry Slam",
	tour: false,
	masters: [
		"Eva Zangerle // Hannes Hangler"
	],
	type: "open",
	travel: false,
	city: "Salzburg",
	first: "2014-06-01"
};

const $3_001$10 = {
	ARG,
	WOR: WOR$4,
	name: "Salzburg"
};

const $2_001$4 = {
	"001": $3_001$10,
	name: "Salzburg"
};

const WOR$6 = {
	accessible: true,
	accommodation: "hotel",
	admission: "8 €",
	audience: "100",
	fee: "80 €",
	name: "Wortklauberei",
	tour: false,
	masters: [
		"Anna-Lena Obermoser"
	],
	type: "challenging",
	travel: "full",
	city: "Saalfelden am Steinernen Meer",
	first: "2016-10-01"
};

const $3_019 = {
	WOR: WOR$6,
	name: "Saalfelden am Steinernen Meer"
};

const $2_016$4 = {
	"019": $3_019,
	name: "Zell am See"
};

const $1_005 = {
	"001": $2_001$4,
	"016": $2_016$4,
	name: "Salzburg"
};

const U20 = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "80",
	fee: "0 €",
	name: "U20 LM Steiermark",
	tour: false,
	masters: [
		"Mario Tomic"
	],
	type: "closed",
	travel: false,
	city: "graz",
	first: "2013-04-01"
};

const $3_000 = {
	U20
};

const $2_000 = {
	"000": $3_000
};

const AFF = {
	accessible: true,
	accommodation: "hotel",
	admission: "voluntary",
	audience: "40",
	fee: "80 €",
	name: "Slamily affairs",
	tour: "a",
	masters: ["Mario Tomic"],
	type: "closed",
	travel: "full",
	city: "Graz",
	first: "2017-01-01"
};

const ANT = {
	accessible: true,
	accommodation: "hotel",
	admission: "voluntary",
	audience: "80",
	fee: "100 €",
	name: "Antivalentinstagslesung",
	tour: false,
	masters: ["Mario Tomic"],
	type: "closed",
	travel: "full",
	city: "Graz",
	first: "2016-01-01"
};

const BAT = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "100",
	fee: "50 €",
	name: "Slam Battles",
	tour: false,
	masters: ["Mario Tomic"],
	type: "closed",
	travel: "full",
	city: "Graz",
	first: "2015-02-01"
};

const BRU = {
	accessible: true,
	accommodation: "hotel",
	admission: "11 €",
	audience: "80",
	fee: "100 €",
	name: "Brückenslam",
	tour: false,
	masters: ["Klaus Lederwasch"],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2014-06-01"
};

const DIA = {
	accessible: true,
	accommodation: "hotel",
	admission: "voluntary",
	audience: "50",
	fee: "80 €",
	name: "Dialekt Slam",
	tour: false,
	masters: ["Tschif", "Klaus Lederwasch"],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2017-02-01"
};

const DUC = {
	accessible: true,
	accommodation: "private",
	admission: false,
	audience: "60",
	fee: "50 €",
	name: "Ducks Poetry Slam",
	tour: false,
	masters: ["Mario Tomic"],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2015-10-01"
};

const EIN = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "40",
	fee: "100 €",
	name: "einmal latte & kulturprogramm, bitte!",
	tour: false,
	masters: ["Mario Tomic"],
	type: "closed",
	travel: "full",
	city: "Graz",
	first: "2016-10-01"
};

const GEW = {
	accessible: true,
	accommodation: "hotel",
	admission: "voluntary",
	audience: "40",
	fee: "100 €",
	name: "1. Grazer Lesebühne: Gewalt ist keine Lesung",
	tour: false,
	masters: ["Mario Tomic"],
	type: "closed",
	travel: "full",
	city: "Graz",
	first: "2013-01-01"
};

const GRI = {
	accessible: true,
	accommodation: "hotel",
	admission: "voluntary",
	audience: "80",
	fee: "50 €",
	name: "Gries Slam",
	tour: false,
	masters: ["Mario Tomic"],
	type: "challenging",
	travel: "full",
	city: "GRAZ",
	first: "2016-05-01"
};

const GRU = {
	accessible: true,
	accommodation: "private",
	admission: "voluntary",
	audience: "90",
	fee: "0 €",
	name: "Grünschnabel Poetry Slam",
	tour: false,
	masters: ["Yannick Steinkellner", "Anna-Lena Obermoser"],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2014-05-01"
};

const HOE = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "450",
	fee: "100 €",
	name: "Hörsaal Slam Graz",
	tour: "a",
	masters: ["Mario Tomic"],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2014-10-01"
};

const KLO = {
	accommodation: "hotel",
	admission: "5 €",
	audience: "60",
	fee: "50 €",
	name: "Klosterslam",
	tour: false,
	masters: ["Klaus Lederwasch"],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2016-05-01"
};

const KOM = {
	accessible: true,
	accommodation: "hotel",
	admission: "voluntary",
	audience: "100",
	fee: "50 €",
	name: "Kombüsen Slam",
	tour: false,
	masters: [
		"Mario Tomic"
	],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2011-01-01"
};

const $3_001$12 = {
	AFF,
	ANT,
	BAT,
	BRU,
	DIA,
	DUC,
	EIN,
	GEW,
	GRI,
	GRU,
	HOE,
	KLO,
	KOM,
	name: "Graz"
};

const $2_001$6 = {
	"001": $3_001$12,
	name: "Graz"
};

const SCH = {
	accessible: true,
	accommodation: "private",
	admission: "voluntary",
	audience: "100",
	fee: "0 €",
	name: "Schilcher Slam",
	tour: false,
	masters: [
		"Helena Schmidt",
		"Jimi Lend"
	],
	type: "open",
	travel: "grant",
	city: "Sankt Ulrich in Greith",
	first: "2012-04-01"
};

const $3_047 = {
	SCH,
	name: "Sankt Martin im Sulmtal"
};

const $2_003$4 = {
	"047": $3_047,
	name: "Deutschlandsberg"
};

const $000$8 = {
	accessible: true,
	accommodation: "private",
	admission: "voluntary",
	audience: "30",
	fee: "50 €",
	name: "Poetry Slam",
	tour: false,
	masters: ["Klaus Lederwasch"],
	type: "challenging",
	travel: "full",
	city: "Frohnleiten",
	first: "2014-09-01"
};

const $3_063 = {
	"000": $000$8,
	name: "Frohnleiten"
};

const $2_006$4 = {
	"063": $3_063,
	name: "Graz-Umgebung"
};

const $000$10 = {
	accommodation: "redundant",
	admission: "voluntary",
	audience: "100",
	fee: "0 €",
	name: "PSK - Poetry Slam Knittelfeld",
	tour: false,
	masters: ["Daniela Knafl"],
	type: "challenging",
	travel: false,
	city: "Knittelfeld",
	first: "2016-09-01"
};

const $3_079 = {
	"000": $000$10,
	name: "Knittelfeld"
};

const $2_021$2 = {
	"079": $3_079,
	name: "Murtal"
};

const $000$12 = {
	accessible: true,
	accommodation: "hotel",
	admission: false,
	audience: "300",
	fee: "0 €",
	name: "Poetry Slam Tieschen",
	tour: false,
	masters: [
		"Mario Tomic"
	],
	type: "open",
	travel: false,
	city: "Tieschen",
	first: "2014-06-01"
};

const $3_068 = {
	"000": $000$12,
	name: "Tieschen"
};

const $000$14 = {
	accessible: true,
	accommodation: "private",
	admission: "voluntary",
	audience: "150",
	fee: "150 €",
	name: "Poetry Slam Feldbach",
	tour: false,
	masters: [
		"Mario Tomic"
	],
	type: "challenging",
	travel: false,
	city: "Feldbach",
	first: "2016-07-01"
};

const $3_079$2 = {
	"000": $000$14,
	name: "Feldbach"
};

const $2_023 = {
	"068": $3_068,
	"079": $3_079$2,
	name: "Südoststeiermark"
};

const $1_006 = {
	"000": $2_000,
	"001": $2_001$6,
	"003": $2_003$4,
	"006": $2_006$4,
	"021": $2_021$2,
	"023": $2_023,
	name: "Steiermark"
};

const GES = {
	accessible: true,
	accommodation: "hotel",
	admission: "0 €",
	audience: "90",
	fee: "1 €",
	name: "Gestaltwandler-Slam",
	tour: false,
	masters: ["Stefan Abermann"],
	type: "open",
	travel: "full",
	city: "Innsbruck",
	first: "2014-04-01"
};

const $3_001$14 = {
	GES,
	name: "Innsbruck"
};

const $2_001$8 = {
	"001": $3_001$14,
	name: "Innsbruck"
};

const WOR$8 = {
	accessible: true,
	accommodation: "hotel",
	admission: "8 €",
	audience: "80",
	fee: "30 €",
	name: "Wortfluss Poetry Slam",
	tour: "b",
	masters: ["Ko Bylanzky"],
	type: "challenging",
	travel: "full",
	city: "Kufstein",
	first: "2014-09-01"
};

const $3_013 = {
	WOR: WOR$8,
	name: "Kufstein"
};

const $2_005 = {
	"013": $3_013,
	name: "Kufstein"
};

const $1_007 = {
	"001": $2_001$8,
	"005": $2_005,
	name: "Tirol"
};

const DEA = {
	accessible: true,
	accommodation: false,
	admission: "10 €",
	audience: "150",
	fee: "0 €",
	name: "Dead or Alive",
	tour: false,
	masters: [
		"Markim Pause"
	],
	type: "challenging",
	travel: "full",
	city: "Bregenz",
	first: "2015-09-01"
};

const $3_007 = {
	DEA,
	name: "Bregenz"
};

const SPI = {
	accessible: true,
	accommodation: "hotel",
	admission: "8 €",
	audience: "100",
	fee: "40 €",
	name: "Spinnerei",
	tour: false,
	masters: ["Sara Bonetti"],
	type: "challenging",
	travel: "full",
	city: "Hard",
	first: "2017-08-01"
};

const $3_015 = {
	SPI,
	name: "Hard"
};

const WOR$10 = {
	accommodation: "hotel",
	admission: "8 €",
	audience: "80",
	fee: "30 €",
	name: "Wort drauf",
	tour: false,
	masters: ["Steffen Brinkmann"],
	type: "challenging",
	travel: "grant",
	city: "Höchst",
	first: "2012-11-01"
};

const $3_017 = {
	WOR: WOR$10,
	name: "Höchst"
};

const $2_002$4 = {
	"007": $3_007,
	"015": $3_015,
	"017": $3_017,
	name: "Bregenz"
};

const JAM = {
	accessible: true,
	accommodation: false,
	admission: "voluntary",
	audience: "150",
	fee: "0 €",
	name: "Jam on Poetry",
	tour: false,
	masters: [
		"Steffen Brinkmann"
	],
	type: "challenging",
	travel: false,
	city: "Dornbirn",
	first: "2008-01-01"
};

const KAM = {
	accessible: true,
	accommodation: "hotel",
	admission: "9 €",
	audience: "250",
	fee: "0 €",
	name: "Kampf der Dichter",
	tour: false,
	masters: [
		"Markim Pause"
	],
	type: "challenging",
	travel: "full",
	city: "Dornbirn",
	first: "2004-04-01"
};

const WOR$12 = {
	accommodation: "hotel",
	admission: "8 €",
	audience: "80",
	fee: "30 €",
	name: "Wort Drauf Slam",
	tour: false,
	masters: [
		"Steffen Brinkmann"
	],
	type: "challenging",
	travel: "grant",
	city: "Dornbirn",
	first: "2012-11-01"
};

const U20$2 = {
	accessible: true,
	accommodation: "private",
	admission: "5 €",
	audience: "106",
	fee: "0 €",
	name: "U20 Poetry Slam Vorarlberg",
	tour: false,
	masters: [
		"Sophia Juen"
	],
	type: "challenging",
	travel: "grant",
	city: "Dornbirn",
	first: "2017-03-01"
};

const $3_001$16 = {
	JAM,
	KAM,
	WOR: WOR$12,
	U20: U20$2,
	name: "Dornbirn"
};

const $000$16 = {
	accessible: true,
	accommodation: "hotel",
	admission: "9 €",
	audience: "120",
	fee: "80 €",
	name: "Emser Slam",
	tour: false,
	masters: ["Tom Astleitner"],
	type: "closed",
	travel: "full",
	city: "Hohenems",
	first: "2017-06-01"
};

const $3_002$2 = {
	"000": $000$16,
	name: "Hohenems"
};

const $2_003$6 = {
	"001": $3_001$16,
	"002": $3_002$2,
	name: "Dornbirn"
};

const GRA = {
	accessible: true,
	accommodation: false,
	admission: "voluntary",
	audience: "200",
	fee: "25 €",
	name: "Grand Poetry Slam",
	tour: false,
	masters: [
		"Tom Astleitner"
	],
	type: "closed",
	travel: "grant",
	city: "Feldkirch",
	first: "2016-08-01"
};

const RAU = {
	accessible: true,
	accommodation: false,
	admission: "voluntary",
	audience: "80",
	fee: "25 €",
	name: "Rauchzeichen",
	tour: false,
	masters: [
		"Tom Astleitner"
	],
	type: "open",
	travel: "grant",
	city: "Feldkirch",
	first: "2017-04-01"
};

const TAG$4 = {
	accessible: true,
	accommodation: false,
	admission: "12 €",
	audience: "200",
	fee: "0 €",
	name: "Tagebuch Slam",
	tour: false,
	masters: [
		"Diana Köhle"
	],
	type: "challenging",
	travel: "full",
	city: "Feldkirch",
	first: "2015-07-01"
};

const $3_004$2 = {
	GRA,
	RAU,
	TAG: TAG$4,
	name: "Feldkirch"
};

const $2_004 = {
	"004": $3_004$2,
	name: "Feldkirch"
};

const $1_008 = {
	"002": $2_002$4,
	"003": $2_003$6,
	"004": $2_004,
	name: "Vorarlberg"
};

const CUP = {
	name: "Poetry Slam Cup",
	accommodation: "hotel",
	admission: "9 €",
	audience: "130",
	fee: "100 €",
	tour: false,
	masters: [
		"Elwood Loud"
	],
	type: "closed",
	travel: "full",
	city: "Wien",
	first: "2007-08-01"
};

const IMW = {
	name: "Slam im Wasserglas",
};

const LIB = {
	accessible: true,
	accommodation: "private",
	admission: false,
	audience: "80",
	fee: "0 €",
	name: "Library Slam",
	tour: false,
	masters: [
		"Diana Köhle"
	],
	type: "open",
	travel: false,
	city: "Wien",
	first: "2014-04-01"
};

const $3_001$18 = {
	CUP,
	IMW,
	LIB,
	name: "Innere Stadt",
	zip: 1010
};

const $2_001$10 = {
	"001": $3_001$18,
	name: "Innere Stadt"
};

const STU = {
	dates: {
		2017: {
			11: {
				21: {
					time: "19:00:00"
				}
			}
		},
		2018: {
			1: {
				23: {
					time: "19:00:00"
				}
			}
		}
	},
	name: "STUMMGABEL Poetry Slam",
	accommodation: "private",
	admission: "10 €",
	audience: "150",
	fee: "60 €",
	tour: false,
	masters: [
		"Robin Reithmayr"
	],
	type: "challenging",
	travel: "full",
	city: "Vienna",
	first: "2015-06-01"
};

const $3_001$20 = {
	STU,
	name: "Wieden",
	zip: 1040
};

const $2_004$2 = {
	"001": $3_001$20,
	name: "Wieden"
};

const FRE$2 = {
	dates: {
		2017: {
			11: {
				23: "default"
			},
			12: {
				14: "default"
			}
		},
		2018: {
			10: {
				25: "default"
			},
			11: {
				15: "default"
			},
			12: {
				13: "default"
			},
			1: {
				25: "default"
			},
			2: {
				15: {
					fbEvent: 195652907681836
				}
			},
			3: {
				29: "default"
			},
			4: {
				26: "default"
			},
			5: {
				24: "default"
			},
			9: {
				27: "default"
			}
		}
	},
	name: "Freispruch Poetry Slam",
	shortName: "Freispruch",
	description: "Ein Dichterwettstreit um die Gunst ... der Geschworenen.\nFünf Minuten Vortragszeit für selbst verfasste Texte ist alles, was sechs Slam Poetinnen und Poeten bleibt, um über ihr \"Urteil\" zu verhandeln.\n\nLyrik, Prosa, Performance, Dada - solange das Textblatt das einzige Requisit bleibt, ist alles erlaubt. Welches \"Plädoyer\" gewinnt, entscheidet das Publikum.\n\nAlles unter der strengen Beobachtung eines betagten, zynischen Häfenwärters und dem Eifer übermotivierter Pflichtverteidiger. Ein Poetry Slam im Theatergewand.\n\nAnmeldungen bitte unter contact@fomp.eu",
	location: {
		street: "Hamburgerstraße 15",
		name: "Spektakel"
	},
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	},
	tickets: {
		ntry: "poetryslam"
	}
};

const POW = {
	dates: {
		2017: {
			12: {
				20: "default"
			}
		},
		2018: {
			10: {
				17: "default"
			},
			11: {
				21: "default"
			},
			12: {
				19: "default"
			},
			1: {
				17: "default"
			},
			2: {
				21: {
					fbEvent: 316594195520229
				}
			},
			3: {
				21: "default"
			},
			4: {
				18: "default"
			},
			5: {
				16: "default"
			},
			6: {
				20: "default"
			},
			9: {
				19: "default"
			}
		}
	},
	name: "PowerPoint-Karaoke Wien",
	shortName: "PowerPoint-Karaoke",
	description: "Hier wird nicht gesungen. Hier wird präsentiert: Von \"Paarungsverhalten des gemeinen Bonobos\" über \"Die Kunst des Panierens\" bis \"Der perfekte Neigungswinkel der Maroni - eine Annäherung\" - wir haben Präsentationen vorbereitet, die von acht völlig ahnungslosen Referentinnen und Referenten gehalten werden. Das Themenspektrum kennt keine Grenzen, bei PowerPoint-Karaoke ist alles möglich!  Die Auftretenden kennen das Thema des Vortrags nicht, bis die erste Folie auf dem Beamer erscheint. Das Publikum bewertet diese Auftritte per Punktekarten. So wird bei PowerPoint-Karaoke aus langweiligen Unireferaten oder peinlichen Agenturpitches pure Unterhaltung!\n\nAnmeldungen bitte unter contact@fomp.eu",
	location: {
		street: "Hamburgerstraße 15",
		name: "Spektakel"
	},
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	},
	tickets: {
		ntry: "powerpointkaraoke"
	}
};

const ROT = {
	dates: {
		2017: {
			11: {
				24: {
					time: "19:30:00"
				}
			}
		}
	},
	name: "Rotlicht Poetry Slam",
	accommodation: "private",
	admission: "6 €",
	audience: "70",
	fee: "0 €",
	tour: false,
	masters: [
		"Christian Schreibmüller",
		"Cornelia Ertl",
		"Johanna Obernberger",
		"Jasmin Lindinger"
	],
	type: "open",
	travel: "full",
	city: "Wien",
	first: "2012-02-01"
};

const $3_001$22 = {
	FRE: FRE$2,
	POW,
	ROT,
	name: "Margareten",
	zip: 1050
};

const $2_005$2 = {
	"001": $3_001$22,
	name: "Margareten"
};

const TAG$6 = {
	dates: {
		2017: {
			11: {
				26: {
					time: "19:00:00"
				}
			},
			12: {
				17: {
					time: "19:00:00"
				}
			}
		},
		2018: {
			1: {
				21: {
					time: "19:00:00"
				}
			},
			2: {
				18: {
					time: "19:00:00"
				}
			},
			3: {
				25: {
					time: "19:00:00"
				}
			},
			4: {
				22: {
					time: "19:00:00"
				}
			}
		}
	},
	name: "TAGebuch Slam"
};

const $3_001$24 = {
	TAG: TAG$6,
	name: "Mariahilf",
	zip: 1060
};

const $2_006$6 = {
	"001": $3_001$24,
	name: "Mariahilf"
};

const B00 = {
	dates: {
		2017: {
			12: {
				15: {
					time: "20:00:00"
				}
			}
		},
		2018: {
			1: {
				12: {
					time: "20:00:00"
				}
			},
			2: {
				16: {
					time: "20:00:00"
				}
			},
			3: {
				16: {
					time: "20:00:00"
				}
			},
			4: {
				20: {
					time: "20:00:00"
				}
			},
			5: {
				25: {
					time: "20:00:00"
				}
			},
			6: {
				15: {
					time: "20:00:00"
				}
			}
		}
	},
	name: "Slam B",
	accessible: true,
	accommodation: "private",
	admission: false,
	audience: "171",
	fee: "0 €",
	tour: false,
	masters: [
		"Diana Köhle"
	],
	type: "open",
	travel: "grant",
	city: "Wien",
	first: "2009-08-01"
};

const BIL = {
	name: "Bilder_Bücher_Bühne",
	description: "Österreichs einzige Lese-Mal-Bühne samt Poetry, Prosa und Pinselei. Sowas gibt's? Sure, it does.\nFOMP lädt drei Autorinnen und Autoren ein, die eigene Texte lesen, begleitet von einer bildenden Künstlerin.Die enstandenden Bilder werden in einer \"Auktion auf Speed\" an die Meistbietenden versteigert.\n\nWahn, Wonne und Wortkunst für Sammler und Jägerinnen besonderer Schätze.",
	location: {
		street: "Neustiftgasse 57",
		name: "Die Drahtwarenhandlung"
	},
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	},
	dates: {
		2018: {
			1: {
				18: "default"
			},
			3: {
				23: "default"
			},
			5: {
				17: "default"
			}
		}
	}
};

const BOC = {
	accessible: true,
	accommodation: "private",
	admission: "10 €",
	audience: "150",
	fee: "0 €",
	name: "Slam B.ock",
	tour: false,
	masters: [
		"Diana Köhle"
	],
	type: "closed",
	travel: false,
	city: "Wien",
	first: "2012-10-01"
};

const POP = {
	name: "Pop Up Poetry",
	shortName: "Pop Up Poetry",
	description: "In der Reihe „Pop up Poetry“ präsentiert FOMP einzigartige Künstlerinnen und Künstler, die aus dem Poetry Slam-Umfeld kommen und durch beeindruckende Soloperformances hervorstechen. Konzerte. Lesungen. Stand-Up. Slam. Performance.\nDestilliert und verfeinert, immer frisch auf immer neuen Bühnen dieser schönen Stadt.Über alle Events dieser Serie erfahrt ihr auf unserer Facebook - Seite.",
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	},
	dates: {
		2018: {
			1: {
				10: "default"
			},
			4: {
				10: "default",
				29: "default"
			}
		}
	}
};

const SIN = {
	dates: {
		2017: {
			11: {
				22: "default"
			},
			12: {
				13: "default"
			}
		},
		2018: {
			1: {
				24: "default"
			},
			2: {
				14: {
					fbEvent: 1820455944918203
				}
			},
			3: {
				28: "default"
			},
			4: {
				25: "default"
			},
			5: {
				23: "default"
			},
			9: {
				26: "default"
			},
			10: {
				24: "default"
			},
			11: {
				28: "default"
			},
			12: {
				12: "default"
			}
		}
	},
	name: "Sinn & Seife - Die Poetry Soap",
	shortName: "Sinn & Seife",
	description: "Wiens Slamlesebühne mit Ensemble.\n\nMonatlich laden Yasmo, Mieze Medusa, Markus Köhle, Christopher Hütmannsberger, Jonas Scheiner und Henrik Szanto ein: Ins 7 * Stern - Wohnzimmer.\n\nGemeinsam mit dem Gast des Monats betrachten sie die Aufs und Abs ihrer wortverrückten Groß - WG.Ob Dichtkunst oder Prosa, Texte, Sketche aus den Ideen des Publikums– auf dieser Bühne herrschen Freude und Witz.\n\nWriting the good life. Straight outta Milchstraße.",
	location: {
		street: "Siebensterngasse 31",
		name: "7Stern"
	},
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	},
	tickets: {
		ntry: "sinnundseife"
	}
};

const $3_001$26 = {
	B00,
	BIL,
	BOC,
	POP,
	SIN,
	name: "Neubau",
	zip: 1070
};

const $2_007 = {
	"001": $3_001$26,
	name: "Neubau"
};

const BIS = {
	name: "Bis einer reimt",
	accommodation: "private",
	admission: "voluntary",
	audience: "40",
	fee: "50 €",
	tour: false,
	masters: [
		"Simon Tomaz"
	],
	type: "closed",
	travel: "full",
	city: "Wien",
	first: "2016-09-01"
};

const SPR = {
	name: "SprichWORT! Slam",
	accommodation: "private",
	admission: "5 €",
	audience: "70",
	fee: "50 €",
	tour: "c",
	masters: [
		"Adina Wilcke"
	],
	type: "open",
	travel: "full",
	city: "Wien",
	first: "2016-09-01"
};

const $3_001$28 = {
	BIS,
	SPR,
	name: "Josefstadt",
	zip: 1080
};

const $2_008 = {
	"001": $3_001$28,
	name: "Josefstadt"
};

const SIN$2 = {
	dates: {
		2017: {
			12: {
				8: {
					time: "20:00:00"
				}
			}
		}
	},
	name: "Sing, Song & Sound-Slam"
};

const STU$2 = {
	dates: {
		2017: {
			11: {
				29: {
					time: "19:30:00"
				}
			}
		}
	},
	name: "STUMMGABEL Comedy Slam"
};

const $3_001$30 = {
	SIN: SIN$2,
	STU: STU$2,
	name: "Alsergrund",
	zip: 1090
};

const $2_009$2 = {
	"001": $3_001$30,
	name: "Alsergrund"
};

const WOS = {
	name: "Wos host gsogt? Poetry Slam"
};

const $3_001$32 = {
	WOS,
	name: "Rudolfsheim-Fünfhaus",
	zip: 1150
};

const $2_015 = {
	"001": $3_001$32,
	name: "Rudolfsheim-Fünfhaus"
};

const BLI = {
	name: "Blitzdichtgewitter Poetry Jazz Slam",
	description: "Poetry Slam und Jazz. Zwei Kunstformen kunstvoll vereint\nDie beste Melange für Liebende von Sprache und Musik: Ein Jazztrio untermalt die Texte vier geladener Künstlerinnen und Künstler.Zwischen Tagträumen und Nachtleben, Sprachbildern und Lautmalerei entsteht eine neue Begegnung mit Slam, wie sie allein Musik erzeugen kann.\n\nModeration: Yasmo\n\nBauer Schläger Wurf Berger:\n(Ralph Mothwurf – Gitarre, Andreas Lindenbauer – Bassklarinette / Altsaxophon, Reinhard Hörschläger – Percussion)",
	location: {
		street: "Gallitzinstraße 1",
		name: "Bockkeller"
	},
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	},
	dates: {
		2018: {
			2: {
				2: {
					fbEvent: 151955185456724
				}
			},
			5: {
				21: {
					fbEvent: 868449226659611
				}
			},
			9: {
				29: "default"
			},
			11: {
				24: "default"
			}
		}
	},
	tickets: {
		ntry: "blitzdichtgewitter"
	}
};

const FLA = {
	name: "Flawless Poetry Slam"
};

const STI = {
	name: "Stille Post Slam"
};

const TEX = {
	dates: {
		2017: {
			11: {
				24: {
					time: "19:30:00"
				}
			}
		}
	},
	name: "textstrom Poetry Slam"
};

const U20$4 = {
	accessible: true,
	accommodation: "private",
	admission: "6 €",
	audience: "80",
	fee: "0 €",
	tour: "c",
	masters: [
		"Adina Wilcke"
	],
	type: "challenging",
	travel: "full",
	city: "Wien",
	first: "2008-02-01",
	name: "U20 Poetry Slam"
};

const $3_001$34 = {
	BLI,
	FLA,
	STI,
	TEX,
	U20: U20$4,
	name: "Ottakring",
	zip: 1160
};

const $2_016$6 = {
	"001": $3_001$34,
	name: "Ottakring"
};

const KUL = {
	accessible: true,
	accommodation: "private",
	admission: "5 €",
	audience: "150",
	fee: "70 €",
	name: "KultuRectum Poetry Slam",
	tour: false,
	masters: [
		"Tereza Hossa"
	],
	type: "challenging",
	travel: "full",
	city: "Wien",
	first: "2016-09-01"
};

const $3_001$36 = {
	KUL,
	name: "Floridsdorf",
	zip: 1210
};

const $2_021$4 = {
	"001": $3_001$36,
	name: "Floridsdorf"
};

const ABI = {
	accessible: true,
	accommodation: "private",
	admission: "3 €",
	audience: "120",
	fee: "40 €",
	name: "Ab ins Wasser Slam",
	tour: false,
	masters: [
		"Diana Köhle"
	],
	type: "challenging",
	travel: false,
	city: "Wien",
	first: "2015-06-01"
};

const $3_001$38 = {
	ABI,
	name: "Donaustadt",
	zip: 1220
};

const $2_022 = {
	"001": $3_001$38,
	name: "Donaustadt"
};

const $1_009 = {
	"001": $2_001$10,
	"004": $2_004$2,
	"005": $2_005$2,
	"006": $2_006$6,
	"007": $2_007,
	"008": $2_008,
	"009": $2_009$2,
	"015": $2_015,
	"016": $2_016$6,
	"021": $2_021$4,
	"022": $2_022,
	name: "Wien"
};

const AT = {
	"001": $1_001,
	"002": $1_002,
	"003": $1_003,
	"004": $1_004,
	"005": $1_005,
	"006": $1_006,
	"007": $1_007,
	"008": $1_008,
	"009": $1_009,
	name: "Österreich"
};

const DE = {
	name: "Deutschland"
};

const MOR = {
	accessible: true,
	accommodation: "redundant",
	admission: false,
	audience: "70",
	fee: "0 €",
	name: "Morgenstern-Slam",
	tour: false,
	masters: [
		"Lipoverein / Carla Thuile (Organisation)",
		"Lene Morgenstern (Moderation)"
	],
	type: "open",
	travel: false,
	city: "verschiedene",
	first: "2010-01-01"
};

const $000$18 = {
	MOR
};

const $2_001$12 = {
	"000": $000$18,
	name: "Autonome Provinz Bozen – Südtirol"
};

const $1_001$2 = {
	"001": $2_001$12,
	name: "Trentino-Südtirol"
};

const IT = {
	"001": $1_001$2
};

const countries = {
	AT,
	DE,
	IT
};

/**
 * @name allCountries
 *
 * @param {function} [iterator=()=>{}]
 * iterator to call on every country
 */
const allCountries = function(iterator = () => { }) {
	const allCountriesToReturn = [];

	Object.keys(this).forEach((country) => {
		if (country.length === 2) {
			allCountriesToReturn.push(this[country]);

			iterator(country, this[country]);
		}
	});

	return allCountriesToReturn;
};

/**
 * @name allLevel1s
 *
 * @param {function} [iterator=()=>{}]
 * iterator to call on every level1
 */
const allLevel1s = function(iterator = () => { }) {
	const allLevel1sToReturn = [];

	this.allCountries((country, actualCountry) => {
		Object.keys(actualCountry).forEach((level1) => {
			if (level1.length === 3) {
				allLevel1sToReturn.push(actualCountry[level1]);

				iterator(country, level1, actualCountry[level1]);
			}
		});
	});

	return allLevel1sToReturn;
};

/**
 * @name allLevel2s
 *
 * @param {function} [iterator=()=>{}]
 * iterator to call on every level2
 */
const allLevel2s = function(iterator = () => {}) {
	const allLevel2sToReturn = [];

	this.allLevel1s((country, level1, actualLevel1) => {
		Object.keys(actualLevel1).forEach((level2) => {
			if (level2.length === 3) {
				allLevel2sToReturn.push(actualLevel1[level2]);

				iterator(
					country, level1, level2, actualLevel1[level2]
				);
			}
		});
	});

	return allLevel2sToReturn;
};

/**
 * @name allLevel3s
 *
 * @param {function} [iterator=()=>{}]
 * iterator to call on every level3
 */
const allLevel3s = function(iterator = () => {}) {
	const allLevel3sToReturn = [];

	this.allLevel2s((
		country, level1, level2, actualLevel2
	) => {
		Object.keys(actualLevel2).forEach((level3) => {
			if (level3.length === 3) {
				allLevel3sToReturn.push(actualLevel2[level3]);

				iterator(
					country, level1, level2, level3, actualLevel2[level3]
				);
			}
		});
	});

	return allLevel3sToReturn;
};

/**
 * @name allSlams
 *
 * @param {function} [iterator=()=>{}]
 * iterator to call on every slam
 */
const allSlams = function(iterator = () => {}) {
	const allSlamsToReturn = [];

	this.allLevel3s((
		country, level1, level2, level3, actualLevel3
	) => {
		Object.keys(actualLevel3).forEach((slam) => {
			if (slam.match(/[A-Z0-9]{3}/) && slam.match(/[A-Z0-9]{3}/).index === 0) {
				allSlamsToReturn.push(actualLevel3[slam]);

				iterator(
					country, level1, level2, level3, slam, actualLevel3[slam]
				);
			}
		});
	});

	return allSlamsToReturn;
};

const allIds = function() {
	const ids = [];

	this.allSlams().forEach((slam) => {
		ids.push(slam.id);
	});

	return ids;
};

/**
 * @name getDates
 *
 * @param {youslam.slam} slam youslam slam object
 * @param {number} [amount=3] maximum amount of dates
 * @param {moment} [from=moment()] moment
 * @param {moment} [to=moment().add(100, "y")] moment
 * @returns {array} array of date strings
 */
const getDates = (
	slam, amount = -1, from = moment(), to = moment().add(100, "y")
) => {
	if (from.isSameOrBefore(to)) {
		if (slam.dates) {
			const dateArray = [];

			Object.keys(slam.dates).forEach((year) => {
				Object.keys(slam.dates[year]).forEach((month) => {
					Object.keys(slam.dates[year][month]).forEach((day) => {
						const date = moment(`${year}-${padStart(month, 2, 0)}-${padStart(day, 2, 0)}`);

						if (date.isSameOrAfter(from) && date.isBefore(to)) {
							dateArray.push(date.format("YYYY-MM-DD"));
						}
					});
				});
			});

			dateArray.splice(amount);

			return dateArray;
		}

		throw new Error("[youslam[getDates]]: given slam has no dates");
	}
	else {
		throw new Error("[youslam[getDates]]: invalid timespan, \"from\" is after \"to\"");
	}
};

/**
 * @name getSlam
 *
 * @param {string} [idOrName]
 * string that's either an id or name of a slam
 *
 * if ommited, a random slam is picked
 * @returns {object}
 * slam or random slam if no string is given
 */
const getSlam = function(idOrName) {
	let foundSlam = {};

	if (typeof idOrName === "string") {
		if (this.isId(idOrName) || this.isShortId(idOrName)) {
			const unzippedId = this.unzipId(idOrName);

			foundSlam = this[unzippedId.country][unzippedId.level1][unzippedId.level2][unzippedId.level3][unzippedId.slam];
		}
		else {
			this.allSlams().forEach((slam) => {
				if (slam.name === idOrName || slam.shortName === idOrName) {
					foundSlam = slam;
				}
			});
		}
	}
	else if (typeof idOrName === "undefined") {
		foundSlam = sample(sample(sample(sample(sample(this)))));
	}

	return foundSlam;
};

/**
 * @name getSlams
 *
 * @param {array} [idsOrNames]
 * array of slam ids or names
 * @returns {array}
 * array of found slams
 */
const getSlams = function(idsOrNames = []) {
	const foundSlams = [];

	idsOrNames.forEach((idOrName) => {
		foundSlams.push(this.getSlam(idOrName));
	});

	return compact(foundSlams);
};

getSlams();

var getSlams$1 = getSlams();

/**
 * @name getUpcoming
 *
 * @param {array|string} [filter=this.allIds()]
 * filter object
 * @param {number} [amount=3]
 * maximum amount of dates
 * @param {moment} [from=moment()]
 * moment
 * @param {moment} [to=moment().add(100, "y")]
 * moment
 * @returns {array}
 * array of id-date objects
 */
const getUpcoming = function(filter = this.allIds(), amount = -1, from = moment(), to = moment().add(100, "y")) {
	const slamsToSearch = [];

	flatten([
		filter
	]).forEach((path) => {
		if (this.isId(path) || this.isShortId(path)) {
			slamsToSearch.push(this.getSlam(path));
		}
		else if (this.isPath(path) || this.isShortPath(path)) {
			this.sift(path).allSlams().forEach((slam) => {
				slamsToSearch.push(slam);
			});
		}
	});

	const upcoming = [];

	slamsToSearch.forEach((slam) => {
		upcoming.push({
			date: this.getDates(slam, amount, from, to),
			id: slam.id
		});
	});

	flatten(upcoming).sort((dateA, dateB) => {
		if (moment(dateA.date).isBefore(moment(dateB.date))) {
			return -1;
		}
		if (moment(dateA.date).isAfter(moment(dateB.date))) {
			return 1;
		}

		return 0;
	});


	return upcoming;
};

/**
 * @name isId
 *
 * @param {any} string
 * string to be tested
 * @returns {boolean}
 * true if string is id
 */
const isId = string => (/^[A-Z]{2}\d{9}[A-Z\d]{3}$/).test(string);

/**
 * @name isShortId
 *
 * @param {any} string
 * string to be tested
 * @returns {boolean}
 * true if string is short id
 */
const isShortId = string => (/^[A-Z]{2}-\d{1,3}-\d{1,3}-\d{1,3}-[A-Z\d]{3}$/).test(string);

/**
 * @name isPath
 *
 * @param {any} string
 * string to be tested
 * @returns {boolean}
 * true if string is id
 */
const isPath = string => (/^[A-Z]{2}(\d{3}){0,3}$/).test(string);

/**
 * @name isShortPath
 *
 * @param {any} string
 * string to be tested
 * @returns {boolean}
 * true if string is short id
 */
const isShortPath = string => (/^[A-Z]{2}(-\d{1,3}){0,3}$/).test(string);

const sift = function(path) {
	const unzippedPath = this.unzipPath(path);
	const siftedObject = this;

	siftedObject.allCountries((country) => {
		if (country !== unzippedPath.country) {
			delete this[country];
		}
	});

	if (unzippedPath.level1) {
		siftedObject.allLevel1s((country, level1) => {
			if (level1 !== unzippedPath.level1) {
				delete this[country][level1];
			}
		});
		if (unzippedPath.level2) {
			siftedObject.allLevel2s((country, level1, level2) => {
				if (level2 !== unzippedPath.level2) {
					delete this[country][level1][level2];
				}
			});

			if (unzippedPath.level3) {
				siftedObject.allLevel3s((country, level1, level2, level3) => {
					if (level3 !== unzippedPath.level3) {
						delete this[country][level1][level2][level3];
					}
				});
			}
		}
	}

	return siftedObject;
};

const unzipId = function(id) {
	let country;
	let level1;
	let level2;
	let level3;
	let slam;

	if (this.isId(id)) {
		country = id.slice(0, 2);
		level1 = id.slice(2, 5);
		level2 = id.slice(5, 8);
		level3 = id.slice(8, 11);
		slam = id.slice(11, 14);
	}
	else if (this.isShortId(id)) {
		country = split(id, "-")[0];
		level1 = padStart(split(id, "-")[1], 3, 0);
		level2 = padStart(split(id, "-")[2], 3, 0);
		level3 = padStart(split(id, "-")[3], 3, 0);
		slam = padStart(split(id, "-")[4], 3, 0);
	}

	return {
		country,
		level1,
		level2,
		level3,
		slam,
	};
};

const unzipPath = function(path) {
	let country;
	let level1;
	let level2;
	let level3;

	if (this.isPath(path)) {
		country = path.slice(0, 2);

		if (path.length >= 5) {
			level1 = path.slice(2, 5);
		}
		if (path.length >= 8) {
			level2 = path.slice(5, 8);
		}
		if (path.length >= 11) {
			level3 = path.slice(8, 11);
		}
	}
	else if (this.isShortPath(path)) {
		country = split(path, "-")[0];

		if (split(path, "-").length >= 2) {
			level1 = padStart(split(path, "-")[1], 3, 0);
		}
		if (split(path, "-").length >= 3) {
			level2 = padStart(split(path, "-")[2], 3, 0);
		}
		if (split(path, "-").length >= 4) {
			level3 = padStart(split(path, "-")[3], 3, 0);
		}
	}

	const unzippedPath = {
		country
	};

	if (level1) {
		unzippedPath.level1 = level1;
	}
	if (level1) {
		unzippedPath.level2 = level2;
	}
	if (level1) {
		unzippedPath.level3 = level3;
	}

	return unzippedPath;
};

const utils = {
	allCountries,
	allLevel1s,
	allLevel2s,
	allLevel3s,
	allSlams,

	allIds,

	getDates,
	getSlam,
	getSlams: getSlams$1,
	getUpcoming,

	isId,
	isShortId,
	isPath,
	isShortPath,

	sift,

	unzipId,
	unzipPath
};

/**
 * @name YS
 *
 * @class YS
 */
class YS {
	/**
	 * Creates an instance of YS.
	 * @memberof YS
	 * @param {object} [filter={path="/"}]
	 * filter object
	 */
	constructor({
		path = "/",
		ids
	} = {}) {
		Object.keys(countries).forEach((country) => {
			this[country] = countries[country];
		});

		Object.keys(utils).forEach((util) => {
			this[util] = utils[util];
		});

		this.allSlams((
			country, level1, level2, level3, slam, actualSlam
		) => {
			actualSlam.id = country + level1 + level2 + level3 + slam;
			actualSlam.shortId = `${country}-${parseInt(level1, 10)}-${parseInt(level2, 10)}-${parseInt(level3, 10)}-${slam}`;

			actualSlam.location = assign(actualSlam.location, {
				country,
				level1: this[country][level1].name,
				level2: this[country][level1][level2].name,
				level3: this[country][level1][level2][level3].name,
				zip: this[country][level1][level2][level3].zip
			});

			this[country][level1][level2][level3][slam] = actualSlam;
		});
	}
}

module.exports = YS;
