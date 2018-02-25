'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var assign = _interopDefault(require('lodash/assign'));
var merge = _interopDefault(require('lodash/merge'));
var isPlainObject = _interopDefault(require('lodash/isPlainObject'));
var moment = _interopDefault(require('moment'));
var padStart = _interopDefault(require('lodash/padStart'));
var slice = _interopDefault(require('lodash/slice'));
var split = _interopDefault(require('lodash/split'));
var fpMerge = _interopDefault(require('lodash/fp/merge'));
var sample = _interopDefault(require('lodash/sample'));
var compact = _interopDefault(require('lodash/compact'));
var flatten = _interopDefault(require('lodash/flatten'));
var pick = _interopDefault(require('lodash/pick'));

/**
 *
 *
 * @class Country
 */
class Country {
	/**
	 * Creates an instance of Country.
	 * @param {object} countryObject
	 * country object
	 * @memberof Country
	 */
	constructor(countryObject) {
		merge(this, countryObject);

		this.type = "country";
	}
}

/**
 *
 *
 * @class Level1
 */
class Level1 {
	/**
	 * Creates an instance of Level1.
	 * @param {object} level1Object
	 * level1 object
	 * @param {string} parent
	 * parent label
	 * @memberof Level1
	 */
	constructor(level1Object, parent) {
		merge(this, level1Object);

		this.parent = parent;

		this.type = "level1";
	}
}

/**
 *
 *
 * @class Level2
 */
class Level2 {
	/**
	 * Creates an instance of Level2.
	 * @param {object} level2Object
	 * level2 object
	 * @param {string} parent
	 * parent label
	 * @memberof Level2
	 */
	constructor(level2Object, parent) {
		merge(this, level2Object);

		this.parent = parent;

		this.type = "level2";
	}
}

/**
 *
 *
 * @class Level3
 */
class Level3 {
	/**
	 * Creates an instance of Level3.
	 * @param {object} level3Object
	 * level3 object
	 * @param {string} parent
	 * parent label
	 * @memberof Level3
	 */
	constructor(level3Object, parent) {
		merge(this, level3Object);

		this.parent = parent;

		this.type = "level3";
	}
}

/**
 * @name loopDeep
 *
 * @param {object} object
 * object to loop thorugh
 * @param {number} depth
 * depth
 * @param {function} iterator
 * function to call on every key on given depth
 * @returns {array}
 * array of all values found on given depth
 */
const loopDeep = (object = {}, depth = 1, iterator = () => {}) => {
	let currentDepth = 1;
	let currentSet = [
		{
			value: object,
			path: ""
		}
	];

	while (currentDepth <= depth) {
		currentSet.forEach((item) => {
			// on depth n
			currentSet = [];

			if (isPlainObject(item.value)) {
				Object.keys(item.value).forEach((currentKey) => {
					if (currentDepth === depth) {
						iterator(item.value[currentKey], currentKey, `${item.path}${currentKey}`);
					}
					else {
						currentSet.push({
							value: item.value[currentKey],
							path: `${item.path}${currentKey}.`
						});
					}
				});
			}
		});

		currentDepth += 1;
	}

	return currentSet;
};

/**
 * @name methodAdder
 *
 * @param {class} theClass
 * the class you want to add methods to
 * @param {object} methods
 * the methods you want add to the class
 */
const methodAdder = (theClass, methods = {}) => {
	Object.keys(methods).forEach((method) => {
		if (method === "prototype") {
			Object.keys(methods[method]).forEach((prototypeMethod) => {
				theClass.prototype[prototypeMethod] = methods[method][prototypeMethod];
			});
		}
		else {
			theClass[method] = methods[method];
		}
	});
};

const utils = {
	loopDeep,
	methodAdder
};

/**
 *
 *
 * @class SlamDate
 */
class SlamDate {
	/**
	 * Creates an instance of SlamDate.
	 * @param {object|string} overrideData
	 * date object or string "default"
	 * @param {slam} slam
	 * slam
	 * @memberof SlamDate
	 */
	constructor(overrideData, slam) {
		let slamToOverride = slam;

		if (isPlainObject(overrideData)) {
			slamToOverride = fpMerge(slam, overrideData);
		}

		merge(this, slamToOverride);

		delete this.dates;
	}
}

/**
 * @name getDates
 * @memberof Slam
 * @param {moment|string} [from=moment()]
 * moment
 * @param {moment|string} [to=moment().add(100, "y")]
 * moment
 * @param {number} amount
 * maximum amount of dates
 * @returns {array}
 * array of objects with the properties slamDate, dateString and moment
 */
const getDates = function(from = moment(), to = moment().add(100, "y"), amount = undefined) {
	const dateArray = [];

	loopDeep(this.dates, 3, (value, key, path) => {
		const year = split(path, ".")[0];
		const month = split(path, ".")[1];
		const day = split(path, ".")[2];

		const slamDate = new SlamDate(value, this);

		const dateString = `${year}-${padStart(month, 2, 0)}-${padStart(day, 2, 0)}`;

		const dateMoment = moment(dateString);

		if (dateMoment.isSameOrAfter(moment(from)) && dateMoment.isSameOrBefore(moment(to))) {
			dateArray.push({
				slamDate,
				dateString,
				moment: dateMoment,
			});
		}
	});

	return slice(dateArray.sort((dateA, dateB) => {
		if (dateA.moment.isBefore(dateB.moment)) {
			return -1;
		}
		if (dateA.moment.isAfter(dateB.moment)) {
			return 1;
		}

		return 0;
	}), 0, amount);
};

var prototype = {
	getDates
};

var methods = {
	prototype
};

/**
 *
 *
 * @class Slam
 */
class Slam {
	/**
	 * Creates an instance of Slam.
	 * @param {object} slamObject
	 * slam object
	 * @param {string} parent
	 * parent label
	 * @memberof Slam
	 */
	constructor(slamObject, parent) {
		merge(this, slamObject);

		this.parent = parent;

		this.type = "slam";
	}
}

utils.methodAdder(Slam, methods);

var MUE = {
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

var $011 = ((label, name, zip) => ({
	MUE: new Slam(MUE, label),
	label,
	name,
	zip
}))("011", "Oslip");

var $003 = ((label, name) => ({
	"011": new Level3($011, label),
	label,
	name
}))("003", "Eisenstadt-Umgebung");

var $001 = ((label, name) => ({
	"003": new Level2($003, label),
	label,
	name
}))("001", "Burgenland");

var IFY = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "100",
	fee: "65 €",
	name: "Slam if you can! (kurz: SlamIYC)",
	tour: false,
	masters: [
		"Carmen Kassekert"
	],
	type: "challenging",
	travel: "full",
	city: "Klagenfurt am Wörthersee",
	first: "2010-03-01"
};

var $001$2 = ((label, name, zip) => ({
	IFY: new Slam(IFY, label),
	label,
	name,
	zip
}))("001", "Klagenfurt");

var $001$1 = ((label, name) => ({
	"001": new Level3($001$2, label),
	label,
	name
}))("001", "Klagenfurt");

var IFY$1 = {
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

var $001$3 = ((label, name, zip) => ({
	IFY: new Slam(IFY$1, label),
	label,
	name,
	zip
}))("001", "Villach");

var $002$1 = ((label, name) => ({
	"001": new Level3($001$3, label),
	label,
	name
}))("002", "Villach");

var IFY$2 = {
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

var $035 = ((label, name, zip) => ({
	IFY: new Slam(IFY$2, label),
	label,
	name,
	zip
}))("035", "Spittal an der Drau");

var $006 = ((label, name) => ({
	"035": new Level3($035, label),
	label,
	name
}))("006", "Spittal an der Drau");

var LET = {
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

var $023 = ((label, name, zip) => ({
	LET: new Slam(LET, label),
	label,
	name,
	zip
}))("023", "Wolfsberg");

var $009 = ((label, name) => ({
	"023": new Level3($023, label),
	label,
	name
}))("009", "Wolfsberg");

var WOR = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "60",
	fee: "30 €",
	name: "WortKunst Feldkirchen",
	tour: false,
	masters: [
		"Carmen Kassekert",
		"Doris Rottermanner",
		"Lisa Fian"
	],
	type: "challenging",
	travel: "full",
	city: "Feldkirchen in Kärnten",
	first: "2017-01-01"
};

var $002$2 = ((label, name, zip) => ({
	WOR: new Slam(WOR, label),
	label,
	name,
	zip
}))("002", "Feldkirchen in Kärnten");

var $010 = ((label, name) => ({
	"002": new Level3($002$2, label),
	label,
	name
}))("010", "Feldkirchen");

var $002 = ((label, name) => ({
	"001": new Level2($001$1, label),
	"002": new Level2($002$1, label),
	"006": new Level2($006, label),
	"009": new Level2($009, label),
	"010": new Level2($010, label),
	label,
	name
}))("002", "Kärnten");

var LIT = {
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

var TAG = {
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

var $001$4 = ((label, name, zip) => ({
	LIT: new Slam(LIT, label),
	TAG: new Slam(TAG, label),
	label,
	name,
	zip
}))("001", "St. Pölten");

var $002$3 = ((label, name) => ({
	"001": new Level3($001$4, label),
	label,
	name
}))("002", "St. Pölten");

var BES = {
	name: "Best of Poetry Slam Baden",
	shortName: "Best of Poetry Slam",
	description: "Poetry Slam - das ist Wettspringen mit dem eigenen Puls im Takt der Freude. Das ist moderne Literatur auf Bühnen beschworen, Texte zum Greifen und Staunen, das Lächeln im Anschlag, der Blick entzückt.\n\nIm Cinema Paradiso Baden begrüßen wir vier der besten Sprachkünstlerinnen und - künstler des Landes.\n\nHier dichten, rappen, lesen, performen die Vier um die Gunst und den Applaus des Publikums.\n\nEin Abend zum Lachen, Staunen, Jubeln - im Sinne des Genusses.",
	location: {
		street: "Beethovengasse 2a",
		name: "Cinema Paradiso"
	},
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	},
	dates: {
		2018: {
			3: {
				22: {
					fbEvent: 209022079676186,
					tickets: {
						cinemaParadiso: "filmdb/2.-best-of-poetry-slam-baden/"
					}
				}
			}
		}
	}
};

var PHI = {
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

var TAG$1 = {
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

var $004 = ((label, name, zip) => ({
	BES: new Slam(BES, label),
	PHI: new Slam(PHI, label),
	TAG: new Slam(TAG$1, label),
	label,
	name,
	zip
}))("004", "Baden", "2500");

var WOR$1 = {
	dates: {
		2017: {
			12: {
				9: "default"
			}
		},
		2018: {
			3: {
				3: {
					fbEvent: 2018855465025112
				}
			},
			5: {
				5: "default"
			},
			6: {
				9: "default"
			},
			7: {
				7: "default"
			}
		}
	},
	name: "Wortschmiede Poetry Slam",
	shortName: "Wortschmiede",
	description: "Der Poetry Slam kommt an die Tristing.\n\nBeste Wortkunst von Stadt bis Land. Ob zum Lachen oder Träumen, zum Genießen oder Ausrasten. Fünf Minuten Bühnenzeit für selbst verfasste Texte. Alle Textsorten sind willkommen, der Art des Vortrags keine Grenzen gesetzt.Requisiten gibt’s keine.\n\nNeulinge sind auf dieser Bühne ausdrücklich willkommen. Die siegende Person qualifiziert sich automatisch für das große Jahresfinale. Anmeldungen bitte unter <a href=\"mailto:contact@fomp.eu\">contact@fomp.eu</a>.\n\nDas Publikum ist die Jury. Der Kuchen ist köstlich.",
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

var $005 = ((label, name, zip) => ({
	WOR: new Slam(WOR$1, label),
	label,
	name,
	zip
}))("005", "Berndorf", "2560");

const $000 = {
	accommodation: "private",
	admission: false,
	audience: "15",
	fee: "80 €",
	name: "Poetry Slam Lindabrunn",
	tour: false,
	masters: [
		"Mario Tomic"
	],
	type: "challenging",
	travel: false,
	city: "Lindabrunn",
	first: "2015-07-01"
};

var $008 = ((label, name, zip) => ({
	"000": new Slam($000, label),
	label,
	name,
	zip
}))("008", "Enzesfeld-Lindabrunn");

var $006$1 = ((label, name) => ({
	"004": new Level3($004, label),
	"005": new Level3($005, label),
	"008": new Level3($008, label),
	label,
	name
}))("006", "Baden");

var FAN = {
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

var $055 = ((label, name, zip) => ({
	FAN: new Slam(FAN, label),
	label,
	name,
	zip
}))("055", "Wolkersdorf im Weinviertel");

var $016 = ((label, name) => ({
	"055": new Level3($055, label),
	label,
	name
}))("016", "Mistelbach");

var DON = {
	dates: {
		2017: {
			12: {
				1: "default"
			}
		}
	},
	name: "Donaudichten Poetry Slam",
	shortName: "Donaudichten",
	description: "Donaudichten ist ein Poetry Slam mit geladenen Slammerinnen und Slammern aus dem gesamten deutschsprachigen Raum. Und gerne mit dir. Wenn du mit deinem Text an das Mikro willst, dann wollen wir das auch. Am Nachmittag des Veranstaltungstages bieten wir einen kostenlosen Workshop an. Zum kreativen Austausch, zum Schreiben, zum Feilen an Texten, zum Kennenlernen.\n\nAnmeldungen bitte unter <a href=\"mailto:contact@fomp.eu\">contact@fomp.eu</a>.",
	location: {
		street: "Albrechtsgasse 18",
		name: "Kunstwerkstatt"
	},
	time: {
		inlet: "19:30:00",
		start: "20:00:00"
	}
};

var $035$1 = ((label, name, zip) => ({
	DON: new Slam(DON, label),
	label,
	name,
	zip
}))("035", "Tulln an der Donau", "3430");

var $021 = ((label, name) => ({
	"035": new Level3($035$1, label),
	label,
	name
}))("021", "Tulln");

var $003$1 = ((label, name) => ({
	"002": new Level2($002$3, label),
	"006": new Level2($006$1, label),
	"016": new Level2($016, label),
	"021": new Level2($021, label),
	label,
	name
}))("003", "Niederösterreich");

var POS = {
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

var TAB = {
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

var $001$6 = ((label, name, zip) => ({
	POS: new Slam(POS, label),
	TAB: new Slam(TAB, label),
	label,
	name,
	zip
}))("001", "Linz");

var $001$5 = ((label, name) => ({
	"001": new Level3($001$6, label),
	label,
	name
}))("001", "Linz");

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

var $001$7 = ((label, name, zip) => ({
	"000": new Slam($000$2, label),
	label,
	name,
	zip
}))("001", "Wels");

var $003$2 = ((label, name) => ({
	"001": new Level3($001$7, label),
	label,
	name
}))("003", "Wels");

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

var $014 = ((label, name, zip) => ({
	"000": new Slam($000$4, label),
	label,
	name,
	zip
}))("014", "Neuhofen an der Krems");

var $010$1 = ((label, name) => ({
	"014": new Level3($014, label),
	label,
	name
}))("010", "Linz-Land");

var FRE = {
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

var $031 = ((label, name, zip) => ({
	FRE: new Slam(FRE, label),
	label,
	name,
	zip
}))("031", "Taiskirchen im Innkreis");

var $012 = ((label, name) => ({
	"031": new Level3($031, label),
	label,
	name
}))("012", "Ried im Innkreis");

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

var $006$2 = ((label, name, zip) => ({
	"000": new Slam($000$6, label),
	label,
	name,
	zip
}))("006", "Feldkirchen an der Donau");

var $016$1 = ((label, name) => ({
	"006": new Level3($006$2, label),
	label,
	name
}))("016", "Urfahr-Umgebung");

var $004$1 = ((label, name) => ({
	"001": new Level2($001$5, label),
	"003": new Level2($003$2, label),
	"010": new Level2($010$1, label),
	"012": new Level2($012, label),
	"016": new Level2($016$1, label),
	label,
	name
}))("004", "Oberösterreich");

var ARG = {
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

var WOR$2 = {
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

var $001$9 = ((label, name, zip) => ({
	ARG: new Slam(ARG, label),
	WOR: new Slam(WOR$2, label),
	label,
	name,
	zip
}))("001", "Salzburg");

var $001$8 = ((label, name) => ({
	"001": new Level3($001$9, label),
	label,
	name
}))("001", "Salzburg");

var WOR$3 = {
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

var $019 = ((label, name, zip) => ({
	WOR: new Slam(WOR$3, label),
	label,
	name,
	zip
}))("019", "Saalfelden am Steinernen Meer");

var $016$2 = ((label, name) => ({
	"019": new Level3($019, label),
	label,
	name
}))("016", "Zell am See");

var $005$1 = ((label, name) => ({
	"001": new Level2($001$8, label),
	"016": new Level2($016$2, label),
	label,
	name
}))("005", "Salzburg");

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

var $000$9 = ((label, name, zip) => ({
	U20: new Slam(U20, label),
	label,
	name,
	zip
}))("000", "Steiermark");

var $000$8 = ((label, name) => ({
	"000": new Level3($000$9, label),
	label,
	name
}))("000", "Steiermark");

var AFF = {
	accessible: true,
	accommodation: "hotel",
	admission: "voluntary",
	audience: "40",
	fee: "80 €",
	name: "Slamily affairs",
	tour: "a",
	masters: [
		"Mario Tomic"
	],
	type: "closed",
	travel: "full",
	city: "Graz",
	first: "2017-01-01"
};

var ANT = {
	accessible: true,
	accommodation: "hotel",
	admission: "voluntary",
	audience: "80",
	fee: "100 €",
	name: "Antivalentinstagslesung",
	tour: false,
	masters: [
		"Mario Tomic"
	],
	type: "closed",
	travel: "full",
	city: "Graz",
	first: "2016-01-01"
};

var BAT = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "100",
	fee: "50 €",
	name: "Slam Battles",
	tour: false,
	masters: [
		"Mario Tomic"
	],
	type: "closed",
	travel: "full",
	city: "Graz",
	first: "2015-02-01"
};

var BRU = {
	accessible: true,
	accommodation: "hotel",
	admission: "11 €",
	audience: "80",
	fee: "100 €",
	name: "Brückenslam",
	tour: false,
	masters: [
		"Klaus Lederwasch"
	],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2014-06-01"
};

var DIA = {
	accessible: true,
	accommodation: "hotel",
	admission: "voluntary",
	audience: "50",
	fee: "80 €",
	name: "Dialekt Slam",
	tour: false,
	masters: [
		"Tschif",
		"Klaus Lederwasch"
	],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2017-02-01"
};

var DUC = {
	accessible: true,
	accommodation: "private",
	admission: false,
	audience: "60",
	fee: "50 €",
	name: "Ducks Poetry Slam",
	tour: false,
	masters: [
		"Mario Tomic"
	],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2015-10-01"
};

var EIN = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "40",
	fee: "100 €",
	name: "einmal latte & kulturprogramm, bitte!",
	tour: false,
	masters: [
		"Mario Tomic"
	],
	type: "closed",
	travel: "full",
	city: "Graz",
	first: "2016-10-01"
};

var GEW = {
	accessible: true,
	accommodation: "hotel",
	admission: "voluntary",
	audience: "40",
	fee: "100 €",
	name: "1. Grazer Lesebühne: Gewalt ist keine Lesung",
	tour: false,
	masters: [
		"Mario Tomic"
	],
	type: "closed",
	travel: "full",
	city: "Graz",
	first: "2013-01-01"
};

var GRI = {
	accessible: true,
	accommodation: "hotel",
	admission: "voluntary",
	audience: "80",
	fee: "50 €",
	name: "Gries Slam",
	tour: false,
	masters: [
		"Mario Tomic"
	],
	type: "challenging",
	travel: "full",
	city: "GRAZ",
	first: "2016-05-01"
};

var GRU = {
	accessible: true,
	accommodation: "private",
	admission: "voluntary",
	audience: "90",
	fee: "0 €",
	name: "Grünschnabel Poetry Slam",
	tour: false,
	masters: [
		"Yannick Steinkellner",
		"Anna-Lena Obermoser"
	],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2014-05-01"
};

var HOE = {
	accessible: true,
	accommodation: "hotel",
	admission: "5 €",
	audience: "450",
	fee: "100 €",
	name: "Hörsaal Slam Graz",
	tour: "a",
	masters: [
		"Mario Tomic"
	],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2014-10-01"
};

var KLO = {
	accommodation: "hotel",
	admission: "5 €",
	audience: "60",
	fee: "50 €",
	name: "Klosterslam",
	tour: false,
	masters: [
		"Klaus Lederwasch"
	],
	type: "challenging",
	travel: "full",
	city: "Graz",
	first: "2016-05-01"
};

var KOM = {
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

var $001$11 = ((label, name, zip) => ({
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

var $001$10 = ((label, name) => ({
	"001": new Level3($001$11, label),
	label,
	name
}))("001", "Graz");

var SCH = {
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

var $047 = ((label, name, zip) => ({
	SCH: new Slam(SCH, label),
	label,
	name,
	zip
}))("047", "Sankt Martin im Sulmtal");

var $006$4 = ((label, name) => ({
	"047": new Level3($047, label),
	label,
	name
}))("003", "Deutschlandsberg");

const $000$10 = {
	accommodation: "redundant",
	admission: "voluntary",
	audience: "100",
	fee: "0 €",
	name: "PSK - Poetry Slam Knittelfeld",
	tour: false,
	masters: [
		"Daniela Knafl"
	],
	type: "challenging",
	travel: false,
	city: "Knittelfeld",
	first: "2016-09-01"
};

var $079 = ((label, name, zip) => ({
	"000": new Slam($000$10, label),
	label,
	name,
	zip
}))("079", "Knittelfeld");

var $021$1 = ((label, name) => ({
	"079": new Level3($079, label),
	label,
	name
}))("021", "Murtal");

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

var $068 = ((label, name, zip) => ({
	"000": new Slam($000$12, label),
	label,
	name,
	zip
}))("068", "Tieschen");

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

var $079$1 = ((label, name, zip) => ({
	"000": new Slam($000$14, label),
	label,
	name,
	zip
}))("079", "Feldbach");

var $023$1 = ((label, name) => ({
	"068": new Level3($068, label),
	"079": new Level3($079$1, label),
	label,
	name
}))("023", "Südoststeiermark");

var $006$3 = ((label, name) => ({
	"000": new Level2($000$8, label),
	"001": new Level2($001$10, label),
	"006": new Level2($006$4, label),
	"021": new Level2($021$1, label),
	"023": new Level2($023$1, label),
	label,
	name
}))("006", "Steiermark");

var GES = {
	accessible: true,
	accommodation: "hotel",
	admission: "0 €",
	audience: "90",
	fee: "1 €",
	name: "Gestaltwandler-Slam",
	tour: false,
	masters: [
		"Stefan Abermann"
	],
	type: "open",
	travel: "full",
	city: "Innsbruck",
	first: "2014-04-01"
};

var $001$13 = ((label, name, zip) => ({
	GES: new Slam(GES, label),
	label,
	name,
	zip
}))("001", "Innsbruck");

var $001$12 = ((label, name) => ({
	"001": new Level3($001$13, label),
	label,
	name
}))("001", "Innsbruck");

var WOR$4 = {
	accessible: true,
	accommodation: "hotel",
	admission: "8 €",
	audience: "80",
	fee: "30 €",
	name: "Wortfluss Poetry Slam",
	tour: "b",
	masters: [
		"Ko Bylanzky"
	],
	type: "challenging",
	travel: "full",
	city: "Kufstein",
	first: "2014-09-01"
};

var $013 = ((label, name, zip) => ({
	WOR: new Slam(WOR$4, label),
	label,
	name,
	zip
}))("013", "Kufstein");

var $005$2 = ((label, name) => ({
	"013": new Level3($013, label),
	label,
	name
}))("005", "Kufstein");

var $007 = ((label, name) => ({
	"001": new Level2($001$12, label),
	"005": new Level2($005$2, label),
	label,
	name
}))("007", "Tirol");

var DEA = {
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

var $007$1 = ((label, name, zip) => ({
	DEA: new Slam(DEA, label),
	label,
	name,
	zip
}))("007", "Bregenz");

var SPI = {
	accessible: true,
	accommodation: "hotel",
	admission: "8 €",
	audience: "100",
	fee: "40 €",
	name: "Spinnerei",
	tour: false,
	masters: [
		"Sara Bonetti"
	],
	type: "challenging",
	travel: "full",
	city: "Hard",
	first: "2017-08-01"
};

var $015 = ((label, name, zip) => ({
	SPI: new Slam(SPI, label),
	label,
	name,
	zip
}))("015", "Hard");

var WOR$5 = {
	accommodation: "hotel",
	admission: "8 €",
	audience: "80",
	fee: "30 €",
	name: "Wort drauf",
	tour: false,
	masters: [
		"Steffen Brinkmann"
	],
	type: "challenging",
	travel: "grant",
	city: "Höchst",
	first: "2012-11-01"
};

var $017 = ((label, name, zip) => ({
	WOR: new Slam(WOR$5, label),
	label,
	name,
	zip
}))("017", "Höchst");

var $002$4 = ((label, name) => ({
	"007": new Level3($007$1, label),
	"015": new Level3($015, label),
	"017": new Level3($017, label),
	label,
	name
}))("002", "Bregenz");

var JAM = {
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

var KAM = {
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

var WOR$6 = {
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

var $001$14 = ((label, name, zip) => ({
	JAM: new Slam(JAM, label),
	KAM: new Slam(KAM, label),
	U20: new Slam(U20$2, label),
	WOR: new Slam(WOR$6, label),
	label,
	name,
	zip
}))("001", "Dornbirn");

const $000$16 = {
	accessible: true,
	accommodation: "hotel",
	admission: "9 €",
	audience: "120",
	fee: "80 €",
	name: "Emser Slam",
	tour: false,
	masters: [
		"Tom Astleitner"
	],
	type: "closed",
	travel: "full",
	city: "Hohenems",
	first: "2017-06-01"
};

var $002$5 = ((label, name, zip) => ({
	"000": new Slam($000$16, label),
	label,
	name,
	zip
}))("002", "Hohenems");

var $003$3 = ((label, name) => ({
	"001": new Level3($001$14, label),
	"002": new Level3($002$5, label),
	label,
	name
}))("003", "Dornbirn");

var GRA = {
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

var RAU = {
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

var TAG$2 = {
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

var $004$3 = ((label, name, zip) => ({
	GRA: new Slam(GRA, label),
	RAU: new Slam(RAU, label),
	TAG: new Slam(TAG$2, label),
	label,
	name,
	zip
}))("004", "Feldkirch");

var $004$2 = ((label, name) => ({
	"004": new Level3($004$3, label),
	label,
	name
}))("004", "Feldkirch");

var $008$1 = ((label, name) => ({
	"002": new Level2($002$4, label),
	"003": new Level2($003$3, label),
	"004": new Level2($004$2, label),
	label,
	name
}))("008", "Vorarlberg");

var CUP = {
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

var IMW = {
	name: "Slam im Wasserglas",
};

var LIB = {
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

var $001$16 = ((label, name) => ({
	CUP: new Slam(CUP, label),
	IMW: new Slam(IMW, label),
	LIB: new Slam(LIB, label),
	name
}))("001", "Innere Stadt", "1010");

var $001$15 = ((label, name) => ({
	"001": new Level3($001$16, label),
	label,
	name
}))("001", "Innere Stadt");

var STU = {
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

var $001$17 = ((label, name, zip) => ({
	STU: new Slam(STU, label),
	label,
	name,
	zip
}))("001", "Wieden", "1040");

var $004$4 = ((label, name) => ({
	"001": new Level3($001$17, label),
	label,
	name
}))("004", "Wieden");

var FRE$1 = {
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
				29: {
					fbEvent: 323211941520600
				}
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
	description: "Ein Dichterwettstreit um die Gunst ... der Geschworenen.\n\nFünf Minuten Vortragszeit für selbst verfasste Texte ist alles, was sechs Slam Poetinnen und Poeten bleibt, um über ihr \"Urteil\" zu verhandeln.\n\nLyrik, Prosa, Performance, Dada - solange das Textblatt das einzige Requisit bleibt, ist alles erlaubt. Welches \"Plädoyer\" gewinnt, entscheidet das Publikum.\n\nAlles unter der strengen Beobachtung eines betagten, zynischen Häfenwärters und dem Eifer übermotivierter Pflichtverteidiger. Ein Poetry Slam im Theatergewand.\n\nAnmeldungen bitte unter <a href=\"mailto:contact@fomp.eu\">contact@fomp.eu</a>.",
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

var POW = {
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
				21: {
					fbEvent: 427625104335100
				}
			},
			4: {
				18: "default"
			},
			5: {
				8: "default"
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
	description: "Hier wird nicht gesungen. Hier wird präsentiert: Von \"Paarungsverhalten des gemeinen Bonobos\" über \"Die Kunst des Panierens\" bis \"Der perfekte Neigungswinkel der Maroni - eine Annäherung\" - wir haben Präsentationen vorbereitet, die von acht völlig ahnungslosen Referentinnen und Referenten gehalten werden. Das Themenspektrum kennt keine Grenzen, bei PowerPoint-Karaoke ist alles möglich! Die Auftretenden kennen das Thema des Vortrags nicht, bis die erste Folie auf dem Beamer erscheint. Das Publikum bewertet diese Auftritte per Punktekarten. So wird bei PowerPoint-Karaoke aus langweiligen Unireferaten oder peinlichen Agenturpitches pure Unterhaltung!\n\nAnmeldungen bitte unter <a href=\"mailto:contact@fomp.eu\">contact@fomp.eu</a>.",
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

var ROT = {
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

var $001$18 = ((label, name, zip) => ({
	FRE: new Slam(FRE$1, label),
	POW: new Slam(POW, label),
	ROT: new Slam(ROT, label),
	label,
	name,
	zip
}))("001", "Margareten", "1050");

var $005$3 = ((label, name) => ({
	"001": new Level3($001$18, label),
	label,
	name
}))("005", "Margareten");

var TAG$3 = {
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

var $001$19 = ((label, name, zip) => ({
	TAG: new Slam(TAG$3, label),
	label,
	name,
	zip
}))("001", "Mariahilf", "1060");

var $006$5 = ((label, name) => ({
	"001": new Level3($001$19, label),
	label,
	name
}))("006", "Mariahilf");

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

var BIL = {
	name: "Bilder_Bücher_Bühne",
	description: "Österreichs einzige Lese-Mal-Bühne samt Poetry, Prosa und Pinselei. Sowas gibt's? Sure, it does.\n\nFOMP lädt drei Autorinnen und Autoren ein, die eigene Texte lesen, begleitet von einer bildenden Künstlerin.Die enstandenden Bilder werden in einer \"Auktion auf Speed\" an die Meistbietenden versteigert.\n\nWahn, Wonne und Wortkunst für Sammler und Jägerinnen besonderer Schätze.",
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
				23: {
					fbEvent: 1914042062242540
				}
			},
			5: {
				17: "default"
			}
		}
	}
};

var BOC = {
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

var POP = {
	name: "Pop Up Poetry",
	shortName: "Pop Up Poetry",
	description: "In der Reihe „Pop up Poetry“ präsentiert FOMP einzigartige Künstlerinnen und Künstler, die aus dem Poetry Slam-Umfeld kommen und durch beeindruckende Soloperformances hervorstechen. Konzerte. Lesungen. Stand-Up. Slam. Performance.\n\nDestilliert und verfeinert, immer frisch auf immer neuen Bühnen dieser schönen Stadt. Über alle Events dieser Serie erfahrt ihr auf unserer Facebook-Seite.",
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

var SIN = {
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
				28: {
					fbEvent: 226516214559956
				}
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

var $001$20 = ((label, name, zip) => ({
	B00: new Slam(B00, label),
	BIL: new Slam(BIL, label),
	BOC: new Slam(BOC, label),
	POP: new Slam(POP, label),
	SIN: new Slam(SIN, label),
	label,
	name,
	zip
}))("001", "Neubau", "1070");

var $007$2 = ((label, name) => ({
	"001": new Level3($001$20, label),
	label,
	name
}))("007", "Neubau");

var BIS = {
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

var SPR = {
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

var $001$21 = ((label, name, zip) => ({
	BIS: new Slam(BIS, label),
	SPR: new Slam(SPR, label),
	label,
	name,
	zip
}))("001", "Josefstadt", "1080");

var $008$2 = ((label, name) => ({
	"001": new Level3($001$21, label),
	label,
	name
}))("008", "Josefstadt");

var SIN$1 = {
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

var STU$1 = {
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

var $001$22 = ((label, name, zip) => ({
	SIN: new Slam(SIN$1, label),
	STU: new Slam(STU$1, label),
	label,
	name,
	zip
}))("001", "Alsergrund", "1090");

var $009$2 = ((label, name) => ({
	"001": new Level3($001$22, label),
	label,
	name
}))("009", "Alsergrund");

var WOS = {
	name: "Wos host gsogt? Poetry Slam"
};

var $001$23 = ((label, name, zip) => ({
	WOS: new Slam(WOS, label),
	label,
	name,
	zip
}))("001", "Rudolfsheim-Fünfhaus", "1150");

var $015$1 = ((label, name) => ({
	"001": new Level3($001$23, label),
	label,
	name
}))("015", "Rudolfsheim-Fünfhaus");

var BLI = {
	name: "Blitzdichtgewitter Poetry Jazz Slam",
	description: "Poetry Slam und Jazz. Zwei Kunstformen kunstvoll vereint\n\nDie beste Melange für Liebende von Sprache und Musik: Ein Jazztrio untermalt die Texte vier geladener Künstlerinnen und Künstler.Zwischen Tagträumen und Nachtleben, Sprachbildern und Lautmalerei entsteht eine neue Begegnung mit Slam, wie sie allein Musik erzeugen kann.\n\nModeration: Yasmo\n\nBauer Schläger Wurf Berger:\n(Ralph Mothwurf – Gitarre, Andreas Lindenbauer – Bassklarinette / Altsaxophon, Reinhard Hörschläger – Percussion)",
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

var FLA = {
	name: "Flawless Poetry Slam"
};

var STI = {
	name: "Stille Post Slam"
};

var TEX = {
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

var $001$24 = ((label, name, zip) => ({
	BLI: new Slam(BLI, label),
	FLA: new Slam(FLA, label),
	STI: new Slam(STI, label),
	TEX: new Slam(TEX, label),
	U20: U20$4,
	label,
	name,
	zip
}))("001", "Ottakring", "1160");

var $016$3 = ((label, name) => ({
	"001": new Level3($001$24, label),
	label,
	name
}))("016", "Ottakring");

var KUL = {
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

var $001$25 = ((label, name, zip) => ({
	KUL: new Slam(KUL, label),
	label,
	name,
	zip
}))("001", "Floridsdorf", "1210");

var $021$2 = ((label, name) => ({
	"001": new Level3($001$25, label),
	label,
	name
}))("021", "Floridsdorf");

var ABI = {
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

var $001$26 = ((label, name, zip) => ({
	ABI: new Slam(ABI, label),
	label,
	name,
	zip
}))("001", "Donaustadt", "1220");

var $022 = ((label, name) => ({
	"001": new Level3($001$26, label),
	label,
	name
}))("022", "Donaustadt");

var $009$1 = ((label, name) => ({
	"001": new Level2($001$15, label),
	"004": new Level2($004$4, label),
	"005": new Level2($005$3, label),
	"006": new Level2($006$5, label),
	"007": new Level2($007$2, label),
	"008": new Level2($008$2, label),
	"009": new Level2($009$2, label),
	"015": new Level2($015$1, label),
	"016": new Level2($016$3, label),
	"021": new Level2($021$2, label),
	"022": new Level2($022, label),
	label,
	name
}))("009", "Wien");

var AT = ((label, name) => ({
	"001": new Level1($001, label),
	"002": new Level1($002, label),
	"003": new Level1($003$1, label),
	"004": new Level1($004$1, label),
	"005": new Level1($005$1, label),
	"006": new Level1($006$3, label),
	"007": new Level1($007, label),
	"008": new Level1($008$1, label),
	"009": new Level1($009$1, label),
	label,
	name
}))("AT", "Österreich");

var MOR = {
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

var $000$18 = ((label, name, zip) => ({
	MOR: new Slam(MOR, label),
	label,
	name,
	zip
}))("000", "Autonome Provinz Bozen – Südtirol");

var $001$28 = ((label, name) => ({
	"000": new Level3($000$18, label),
	label,
	name
}))("001", "Autonome Provinz Bozen – Südtirol");

var $001$27 = ((label, name) => ({
	"001": new Level2($001$28, label),
	label,
	name
}))("001", "Trentino-Südtirol");

var IT = ((label, name) => ({
	"001": new Level1($001$27, label),
	label,
	name
}))("IT", "Italien");

var countries = (() => ({
	AT: new Country(AT),
	IT: new Country(IT)
}))();

/**
 * @name allCountries
 *
 * @param {function} [iterator=()=>{}]
 * iterator to call on every country
 * @returns {array}
 * array of all countries
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
 * @returns {array}
 * array of all level1s
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
 * @returns {array}
 * array of all level2s
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
 * @returns {array}
 * array of all level3s
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
 * @returns {array}
 * array of all slams
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
		if (this.constructor.isId(idOrName) || this.constructor.isShortId(idOrName)) {
			const unzippedId = this.constructor.unzipId(idOrName);

			const countryLabel = unzippedId.country;
			const level1Label = unzippedId.level1;
			const level2Label = unzippedId.level2;
			const level3Label = unzippedId.level3;
			const slamLabel = unzippedId.slam;

			foundSlam = this[countryLabel][level1Label][level2Label][level3Label][slamLabel];
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

/**
 * @name getUpcoming
 *
 * @param {moment|string} [from=moment()]
 * moment
 * @param {moment|string} [to=moment().add(100, "y")]
 * moment
 * @param {number} [amount=undefined]
 * maximum amount of dates
 * @param {array|string} [filter=this.allIds()]
 * array of ids or paths or string
 * @returns {array}
 * array of objects with the properties slamDate, dateString and moment
 */
const getUpcoming = function(from = moment(), to = moment().add(100, "y"), amount = undefined, filter = this.allIds()) {
	const slamsToSearch = [];

	flatten([
		filter
	]).forEach((path) => {
		if (this.constructor.isId(path) || this.constructor.isShortId(path)) {
			slamsToSearch.push(this.getSlam(path));
		}
		else if (this.constructor.isPath(path) || this.constructor.isShortPath(path)) {
			this.sift(path).allSlams().forEach((slam) => {
				slamsToSearch.push(slam);
			});
		}
	});

	const upcoming = [];

	slamsToSearch.forEach((slam) => {
		if (slam.dates) {
			slam.getDates(from, to).forEach((date) => {
				upcoming.push(date);
			});
		}
	});

	return slice(upcoming.sort((dateA, dateB) => {
		if (dateA.moment.isBefore(dateB.moment)) {
			return -1;
		}
		if (dateA.moment.isAfter(dateB.moment)) {
			return 1;
		}

		return 0;
	}), 0, amount);
};

const sift = function(filter) {
	const dottedPaths = [];

	flatten([
		filter
	]).forEach((path) => {
		const unzippedPath = this.constructor.unzipPath(path);

		let dottedPath = "";

		Object.keys(unzippedPath).sort().forEach((level) => {
			if (level === "country") {
				dottedPath = unzippedPath.country;
			}
			else {
				dottedPaths.push(`${dottedPath}.name`);
				dottedPaths.push(`${dottedPath}.label`);
				dottedPaths.push(`${dottedPath}.type`);

				dottedPath += `.${unzippedPath[level]}`;
			}
		});

		dottedPaths.push(dottedPath);
	});

	const siftedObject = pick(countries, dottedPaths);

	Object.keys(methods$1.prototype).forEach((method) => {
		siftedObject[method] = methods$1.prototype[method];
	});

	return siftedObject;
};

const prototype$1 = {
	allCountries,
	allLevel1s,
	allLevel2s,
	allLevel3s,
	allSlams,
	allIds,
	getSlam,
	getSlams,
	getUpcoming,
	sift
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
const isPath = string => (/^[A-Z]{2}(\d{3}){0,3}([A-Z\d]{3})?$/).test(string);

/**
 * @name isShortPath
 *
 * @param {any} string
 * string to be tested
 * @returns {boolean}
 * true if string is short id
 */
const isShortPath = string => (/^[A-Z]{2}(-\d{1,3}){0,3}(-[A-Z\d]{3})?$/).test(string);

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
	let slam;

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
		if (path.length >= 14) {
			slam = path.slice(14, 17);
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

		if (split(path, "-").length >= 5) {
			slam = split(path, "-")[4];
		}
	}

	const unzippedPath = {
		country
	};

	if (level1) {
		unzippedPath.level1 = level1;
	}
	if (level2) {
		unzippedPath.level2 = level2;
	}
	if (level3) {
		unzippedPath.level3 = level3;
	}
	if (slam) {
		unzippedPath.slam = slam;
	}

	return unzippedPath;
};

var methods$1 = {
	prototype: prototype$1,
	isId,
	isShortId,
	isPath,
	isShortPath,
	unzipId,
	unzipPath
};

/**
 * @name YS
 *
 * @class YS
 */
const YS = class {
	/**
	 * Creates an instance of YS.
	 * @memberof YS
	 * @param {(string[]|string)} [filter=undefined]
	 * array of ids or paths or string
	 * @param {object} [data={countries}]
	 * custom data, uses default data when omitted
	 * @param {object} [data.countries=countries]
	 * custom countries object
	 */
	constructor(filter = undefined, data = {
		countries
	}) {
		if (typeof filter === "undefined") {
			merge(this, data.countries);
		}
		else {
			merge(this, this.sift(filter));
		}

		this.allSlams((
			country, level1, level2, level3, slam, actualSlam
		) => {
			actualSlam.id = `${country}${level1}${level2}${level3}${slam}`;
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
};

utils.methodAdder(YS, methods$1);

module.exports = YS;
