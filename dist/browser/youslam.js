"use strict";

var youslam = function () {
	'use strict';

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
		masters: ["Ana Ryue"],
		type: "challenging",
		travel: "full",
		city: "Oslip",
		first: "2014-08-01"
	};

	var $3_011 = {
		MUE: MUE,
		name: "Oslip"
	};

	var $2_003 = {
		"011": $3_011,
		name: "Eisenstadt-Umgebung"
	};

	var $1_001 = {
		"003": $2_003,
		name: "Burgenland"
	};

	var IFY = {
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

	var $3_001 = {
		IFY: IFY,
		name: "Klagenfurt"
	};

	var $2_001 = {
		"001": $3_001,
		name: "Klagenfurt"
	};

	var IFY$2 = {
		accommodation: "hotel",
		admission: "5 €",
		audience: "80",
		fee: "70 €",
		name: "SlamIYC VillacherRaum",
		tour: false,
		masters: ["Carmen Kassekert"],
		type: "challenging",
		travel: "full",
		city: "Villach",
		first: "2015-04-01"
	};

	var $3_001$2 = {
		IFY: IFY$2,
		name: "Villach"
	};

	var $2_002 = {
		"001": $3_001$2,
		name: "Villach"
	};

	var IFY$4 = {
		accessible: true,
		accommodation: "hotel",
		admission: "5 €",
		audience: "80",
		fee: "20 €",
		name: "SlamIYC Spittal",
		tour: false,
		masters: ["Carmen Kassekert", "Sabrina Öhler"],
		type: "challenging",
		travel: "full",
		city: "Spittal an der Drau",
		first: "2016-02-01"
	};

	var $3_035 = {
		IFY: IFY$4,
		name: "Spittal an der Drau"
	};

	var $2_006 = {
		"035": $3_035,
		name: "Spittal an der Drau"
	};

	var LET = {
		accommodation: "hotel",
		admission: "5 €",
		audience: "70",
		fee: "40 €",
		name: "Lets slam, Wolfsberg!",
		tour: false,
		masters: ["Carmen Kassekert", "Elisabeth Leiss"],
		type: "challenging",
		travel: "full",
		city: "Wolfsberg",
		first: "2017-05-01"
	};

	var $3_023 = {
		LET: LET,
		name: "Wolfsberg"
	};

	var $2_009 = {
		"023": $3_023,
		name: "Wolfsberg"
	};

	var WOR = {
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

	var $3_002 = {
		WOR: WOR,
		name: "Feldkirchen in Kärnten"
	};

	var $2_010 = {
		"002": $3_002,
		name: "Feldkirchen"
	};

	var $1_002 = {
		"001": $2_001,
		"002": $2_002,
		"006": $2_006,
		"009": $2_009,
		"010": $2_010,
		name: "Kärnten"
	};

	var LIT = {
		name: "LitGes Poetry Slam",
		accessible: true,
		accommodation: "redundant",
		admission: false,
		audience: "60",
		fee: "0 €",
		tour: false,
		masters: ["Marlies Eder", "Andi Pianka"],
		type: "open",
		travel: false,
		city: "St. Pölten",
		first: "2003-11-01"
	};

	var TAG = {
		dates: {
			2018: {
				"01": {
					18: {
						time: "20:00:00"
					}
				}
			}
		},
		name: "Tagebuch Slam",
		shortId: "AT-3-2-1-TAG"
	};

	var $3_001$4 = {
		LIT: LIT,
		TAG: TAG,
		name: "St. Pölten"
	};

	var $2_002$2 = {
		"001": $3_001$4,
		name: "St. Pölten"
	};

	var BES = {
		name: "Best of Poetry Slam Baden",
		shortName: "Best of Poetry Slam",
		description: "Poetry Slam - das ist Wettspringen mit dem eigenen Puls im Takt der Freude. Das ist moderne Literatur auf Bühnen beschworen, Texte zum Greifen und Staunen, das Lächeln im Anschlag, der Blick entzückt.\n\nIm Cinema Paradiso Baden begrüßen wir vier der besten Sprachkünstlerinnen und - künstler des Landes.\nHier dichten, rappen, lesen, performen die Vier um die Gunst und den Applaus des Publikums.\n\nEin Abend zum Lachen, Staunen, Jubeln - im Sinne des Genusses.",
		location: {
			address: "Beethovengasse 2a",
			name: "Cinema Paradiso"
		},
		time: {
			inlet: "19:30:00",
			start: "20:00:00"
		}
	};

	var PHI = {
		dates: {
			2018: {
				"02": {
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
		masters: ["Cornelia Bruell"],
		type: "open",
		travel: false,
		city: "Baden",
		first: "2016-03-01"
	};

	var TAG$2 = {
		dates: {
			2018: {
				"01": {
					25: {
						time: "20:00:00"
					}
				}
			}
		},
		name: "Tagebuch Slam",
		shortId: "AT-3-6-4-TAG"
	};

	var $3_004 = {
		BES: BES,
		PHI: PHI,
		TAG: TAG$2,
		name: "Baden"
	};

	var WOR$2 = {
		dates: {
			2017: {
				12: {
					"09": {
						time: "19:30:00"
					}
				}
			}
		},
		name: "Wortschmiede Poetry Slam",
		shortName: "Wortschmiede",
		description: "Der Poetry Slam kommt an die Tristing.\n\nBeste Wortkunst von Stadt bis Land. Ob zum Lachen oder Träumen, zum Genießen oder Ausrasten. Fünf Minuten Bühnenzeit für selbst verfasste Texte. Alle Textsorten sind willkommen, der Art des Vortrags keine Grenzen gesetzt.Requisiten gibt’s keine.\n\nNeulinge sind auf dieser Bühne ausdrücklich willkommen. Die siegende Person qualifiziert sich automatisch für das große Jahresfinale. Anmeldungen bitte unter contact @fomp.eu\n\nDas Publikum ist die Jury. Der Kuchen ist köstlich.",
		location: {
			address: "Leobersdorferstraße 58a",
			name: "Café KunstWerk"
		},
		time: {
			inlet: "19:30:00",
			start: "19:30:00"
		},
		admission: "voluntary"
	};

	var $3_005 = {
		WOR: WOR$2,
		name: "Berndorf"
	};

	var $000 = {
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

	var $3_008 = {
		"000": $000,
		name: "Enzesfeld-Lindabrunn"
	};

	var $2_006$2 = {
		"004": $3_004,
		"005": $3_005,
		"008": $3_008,
		name: "Baden"
	};

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
		name: "fan of slam",
		shortId: "AT-3-16-55-FAN"
	};

	var $3_055 = {
		FAN: FAN,
		name: "Wolkersdorf im Weinviertel"
	};

	var $2_016 = {
		"055": $3_055,
		name: "Mistelbach"
	};

	var DON = {
		dates: {
			2017: {
				12: {
					"01": "default"
				}
			}
		},
		name: "Donaudichten Poetry Slam",
		shortName: "Donaudichten",
		description: "Donaudichten ist ein Poetry Slam mit geladenen Slammerinnen und Slammern aus dem gesamten deutschsprachigen Raum. Und gerne mit dir. Wenn du mit deinem Text an das Mikro willst, dann wollen wir das auch. Am Nachmittag des Veranstaltungstages bieten wir einen kostenlosen Workshop an. Zum kreativen Austausch, zum Schreiben, zum Feilen an Texten, zum Kennenlernen.\nAnmeldungen bitte unter contact@fomp.eu",
		location: {
			address: "Albrechtsgasse 18",
			name: "Kunstwerkstatt"
		},
		time: {
			inlet: "19:30:00",
			start: "20:00:00"
		}
	};

	var $3_035$2 = {
		DON: DON,
		name: "Tulln an der Donau"
	};

	var $2_021 = {
		"035": $3_035$2,
		name: "Tulln"
	};

	var $1_003 = {
		"002": $2_002$2,
		"006": $2_006$2,
		"016": $2_016,
		"021": $2_021,
		name: "Niederösterreich"
	};

	var POS = {
		accessible: true,
		accommodation: "private",
		admission: "voluntary",
		audience: "100",
		fee: "0 €",
		name: "Post Skriptum Poetry Slam",
		tour: false,
		masters: ["Sevi"],
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
		masters: ["Sevi"],
		type: "closed",
		travel: "full",
		city: "Linz",
		first: "2014-08-01"
	};

	var $3_001$6 = {
		POS: POS,
		TAB: TAB,
		name: "Linz"
	};

	var $2_001$2 = {
		"001": $3_001$6,
		name: "Linz"
	};

	var $000$2 = {
		accessible: true,
		accommodation: "hotel",
		admission: "5 €",
		audience: "90",
		fee: "30 €",
		name: "Welser Poetry Slam",
		tour: "a",
		masters: ["Sevi"],
		type: "challenging",
		travel: "full",
		city: "Wels",
		first: "2015-02-01"
	};

	var $3_001$8 = {
		"000": $000$2,
		name: "Wels"
	};

	var $2_003$2 = {
		"001": $3_001$8,
		name: "Wels"
	};

	var $000$4 = {
		accessible: true,
		accommodation: "private",
		admission: "voluntary",
		audience: "90",
		fee: "50 €",
		name: "Neuhofner Poetry Slam",
		tour: false,
		masters: ["David Samhaber"],
		type: "challenging",
		travel: "full",
		city: "Neuhofen an der Krems",
		first: "2016-09-01"
	};

	var $3_014 = {
		"000": $000$4,
		name: "Neuhofen an der Krems"
	};

	var $2_010$2 = {
		"014": $3_014,
		name: "Linz-Land"
	};

	var FRE = {
		accessible: true,
		accommodation: false,
		admission: "6 €",
		audience: "150",
		fee: "50 €",
		name: "Free Tree Poetry Slam",
		tour: false,
		masters: ["Sevi"],
		type: "challenging",
		travel: "full",
		city: "Taiskirchen im Innkreis",
		first: "2012-07-01"
	};

	var $3_031 = {
		FRE: FRE,
		name: "Taiskirchen im Innkreis"
	};

	var $2_012 = {
		"031": $3_031,
		name: "Ried im Innkreis"
	};

	var $000$6 = {
		accessible: true,
		accommodation: "private",
		admission: "10 €",
		audience: "60",
		fee: "50 €",
		name: "Feldkirchner Poetry Slam",
		tour: false,
		masters: ["Fisch (Manuel Thalhammer)"],
		type: "challenging",
		travel: "full",
		city: "Feldkirchen an der Donau",
		first: "2015-02-01"
	};

	var $3_006 = {
		$000: $000$6,
		name: "Feldkirchen an der Donau"
	};

	var $2_016$2 = {
		"006": $3_006,
		name: "Urfahr-Umgebung"
	};

	var $1_004 = {
		"001": $2_001$2,
		"003": $2_003$2,
		"010": $2_010$2,
		"012": $2_012,
		"016": $2_016$2,
		name: "Oberösterreich"
	};

	var ARG = {
		accessible: true,
		accommodation: "hotel",
		admission: "10 €",
		audience: "200",
		fee: "70 €",
		name: "ARGE Slam",
		tour: "b",
		masters: ["Ko Bylanzky"],
		type: "challenging",
		travel: "full",
		city: "Salzburg",
		first: "2009-02-01"
	};

	var WOR$4 = {
		accommodation: false,
		admission: false,
		audience: "170",
		fee: "0 €",
		name: "WORTVOLL - Open Poetry Slam",
		tour: false,
		masters: ["Eva Zangerle // Hannes Hangler"],
		type: "open",
		travel: false,
		city: "Salzburg",
		first: "2014-06-01"
	};

	var $3_001$10 = {
		ARG: ARG,
		WOR: WOR$4,
		name: "Salzburg"
	};

	var $2_001$4 = {
		"001": $3_001$10,
		name: "Salzburg"
	};

	var WOR$6 = {
		accessible: true,
		accommodation: "hotel",
		admission: "8 €",
		audience: "100",
		fee: "80 €",
		name: "Wortklauberei",
		tour: false,
		masters: ["Anna-Lena Obermoser"],
		type: "challenging",
		travel: "full",
		city: "Saalfelden am Steinernen Meer",
		first: "2016-10-01"
	};

	var $3_019 = {
		WOR: WOR$6,
		name: "Saalfelden am Steinernen Meer"
	};

	var $2_016$4 = {
		"019": $3_019,
		name: "Zell am See"
	};

	var $1_005 = {
		"001": $2_001$4,
		"016": $2_016$4,
		name: "Salzburg"
	};

	var U20 = {
		accessible: true,
		accommodation: "hotel",
		admission: "5 €",
		audience: "80",
		fee: "0 €",
		name: "U20 LM Steiermark",
		tour: false,
		masters: ["Mario Tomic"],
		type: "closed",
		travel: false,
		city: "graz",
		first: "2013-04-01"
	};

	var $3_000 = {
		U20: U20
	};

	var $2_000 = {
		"000": $3_000
	};

	var AFF = {
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

	var ANT = {
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

	var BAT = {
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

	var BRU = {
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

	var DIA = {
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

	var DUC = {
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

	var EIN = {
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

	var GEW = {
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

	var GRI = {
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

	var GRU = {
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

	var HOE = {
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

	var KLO = {
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

	var KOM = {
		accessible: true,
		accommodation: "hotel",
		admission: "voluntary",
		audience: "100",
		fee: "50 €",
		name: "Kombüsen Slam",
		tour: false,
		masters: ["Mario Tomic"],
		type: "challenging",
		travel: "full",
		city: "Graz",
		first: "2011-01-01"
	};

	var $3_001$12 = {
		AFF: AFF,
		ANT: ANT,
		BAT: BAT,
		BRU: BRU,
		DIA: DIA,
		DUC: DUC,
		EIN: EIN,
		GEW: GEW,
		GRI: GRI,
		GRU: GRU,
		HOE: HOE,
		KLO: KLO,
		KOM: KOM,
		name: "Graz"
	};

	var $2_001$6 = {
		"001": $3_001$12,
		name: "Graz"
	};

	var SCH = {
		accessible: true,
		accommodation: "private",
		admission: "voluntary",
		audience: "100",
		fee: "0 €",
		name: "Schilcher Slam",
		tour: false,
		masters: ["Helena Schmidt", "Jimi Lend"],
		type: "open",
		travel: "grant",
		city: "Sankt Ulrich in Greith",
		first: "2012-04-01"
	};

	var $3_047 = {
		SCH: SCH,
		name: "Sankt Martin im Sulmtal"
	};

	var $2_003$4 = {
		"047": $3_047,
		name: "Deutschlandsberg"
	};

	var $000$8 = {
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

	var $3_063 = {
		"000": $000$8,
		name: "Frohnleiten"
	};

	var $2_006$4 = {
		"063": $3_063,
		name: "Graz-Umgebung"
	};

	var $000$10 = {
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

	var $3_079 = {
		"000": $000$10,
		name: "Knittelfeld"
	};

	var $2_021$2 = {
		"079": $3_079,
		name: "Murtal"
	};

	var $000$12 = {
		accessible: true,
		accommodation: "hotel",
		admission: false,
		audience: "300",
		fee: "0 €",
		name: "Poetry Slam Tieschen",
		tour: false,
		masters: ["Mario Tomic"],
		type: "open",
		travel: false,
		city: "Tieschen",
		first: "2014-06-01"
	};

	var $3_068 = {
		"000": $000$12,
		name: "Tieschen"
	};

	var $000$14 = {
		accessible: true,
		accommodation: "private",
		admission: "voluntary",
		audience: "150",
		fee: "150 €",
		name: "Poetry Slam Feldbach",
		tour: false,
		masters: ["Mario Tomic"],
		type: "challenging",
		travel: false,
		city: "Feldbach",
		first: "2016-07-01"
	};

	var $3_079$2 = {
		"000": $000$14,
		name: "Feldbach"
	};

	var $2_023 = {
		"068": $3_068,
		"079": $3_079$2,
		name: "Südoststeiermark"
	};

	var $1_006 = {
		"000": $2_000,
		"001": $2_001$6,
		"003": $2_003$4,
		"006": $2_006$4,
		"021": $2_021$2,
		"023": $2_023,
		name: "Steiermark"
	};

	var GES = {
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

	var $3_001$14 = {
		GES: GES,
		name: "Innsbruck"
	};

	var $2_001$8 = {
		"001": $3_001$14,
		name: "Innsbruck"
	};

	var WOR$8 = {
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

	var $3_013 = {
		WOR: WOR$8,
		name: "Kufstein"
	};

	var $2_005 = {
		"013": $3_013,
		name: "Kufstein"
	};

	var $1_007 = {
		"001": $2_001$8,
		"005": $2_005,
		name: "Tirol"
	};

	var DEA = {
		accessible: true,
		accommodation: false,
		admission: "10 €",
		audience: "150",
		fee: "0 €",
		name: "Dead or Alive",
		tour: false,
		masters: ["Markim Pause"],
		type: "challenging",
		travel: "full",
		city: "Bregenz",
		first: "2015-09-01"
	};

	var $3_007 = {
		DEA: DEA,
		name: "Bregenz"
	};

	var SPI = {
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

	var $3_015 = {
		SPI: SPI,
		name: "Hard"
	};

	var WOR$10 = {
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

	var $3_017 = {
		WOR: WOR$10,
		name: "Höchst"
	};

	var $2_002$4 = {
		"007": $3_007,
		"015": $3_015,
		"017": $3_017,
		name: "Bregenz"
	};

	var JAM = {
		accessible: true,
		accommodation: false,
		admission: "voluntary",
		audience: "150",
		fee: "0 €",
		name: "Jam on Poetry",
		tour: false,
		masters: ["Steffen Brinkmann"],
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
		masters: ["Markim Pause"],
		type: "challenging",
		travel: "full",
		city: "Dornbirn",
		first: "2004-04-01"
	};

	var WOR$12 = {
		accommodation: "hotel",
		admission: "8 €",
		audience: "80",
		fee: "30 €",
		name: "Wort Drauf Slam",
		tour: false,
		masters: ["Steffen Brinkmann"],
		type: "challenging",
		travel: "grant",
		city: "Dornbirn",
		first: "2012-11-01"
	};

	var U20$2 = {
		accessible: true,
		accommodation: "private",
		admission: "5 €",
		audience: "106",
		fee: "0 €",
		name: "U20 Poetry Slam Vorarlberg",
		tour: false,
		masters: ["Sophia Juen"],
		type: "challenging",
		travel: "grant",
		city: "Dornbirn",
		first: "2017-03-01"
	};

	var $3_001$16 = {
		JAM: JAM,
		KAM: KAM,
		WOR: WOR$12,
		U20: U20$2,
		name: "Dornbirn"
	};

	var $000$16 = {
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

	var $3_002$2 = {
		"000": $000$16,
		name: "Hohenems"
	};

	var $2_003$6 = {
		"001": $3_001$16,
		"002": $3_002$2,
		name: "Dornbirn"
	};

	var GRA = {
		accessible: true,
		accommodation: false,
		admission: "voluntary",
		audience: "200",
		fee: "25 €",
		name: "Grand Poetry Slam",
		tour: false,
		masters: ["Tom Astleitner"],
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
		masters: ["Tom Astleitner"],
		type: "open",
		travel: "grant",
		city: "Feldkirch",
		first: "2017-04-01"
	};

	var TAG$4 = {
		accessible: true,
		accommodation: false,
		admission: "12 €",
		audience: "200",
		fee: "0 €",
		name: "Tagebuch Slam",
		tour: false,
		masters: ["Diana Köhle"],
		type: "challenging",
		travel: "full",
		city: "Feldkirch",
		first: "2015-07-01"
	};

	var $3_004$2 = {
		GRA: GRA,
		RAU: RAU,
		TAG: TAG$4,
		name: "Feldkirch"
	};

	var $2_004 = {
		"004": $3_004$2,
		name: "Feldkirch"
	};

	var $1_008 = {
		"002": $2_002$4,
		"003": $2_003$6,
		"004": $2_004,
		name: "Vorarlberg"
	};

	var CUP = {
		name: "Poetry Slam Cup",
		accommodation: "hotel",
		admission: "9 €",
		audience: "130",
		fee: "100 €",
		tour: false,
		masters: ["Elwood Loud"],
		type: "closed",
		travel: "full",
		city: "Wien",
		first: "2007-08-01"
	};

	var IMW = {
		name: "Slam im Wasserglas",
		shortId: "AT-9-1-1-IMW"
	};

	var LIB = {
		accessible: true,
		accommodation: "private",
		admission: false,
		audience: "80",
		fee: "0 €",
		name: "Library Slam",
		tour: false,
		masters: ["Diana Köhle"],
		type: "open",
		travel: false,
		city: "Wien",
		first: "2014-04-01"
	};

	var $3_001$18 = {
		CUP: CUP,
		IMW: IMW,
		LIB: LIB,
		name: "Innere Stadt"
	};

	var $2_001$10 = {
		"001": $3_001$18,
		name: "Innere Stadt"
	};

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
				"01": {
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
		masters: ["Robin Reithmayr"],
		type: "challenging",
		travel: "full",
		city: "Vienna",
		first: "2015-06-01"
	};

	var $3_001$20 = {
		STU: STU,
		name: "Wieden"
	};

	var $2_004$2 = {
		"001": $3_001$20,
		name: "Wieden"
	};

	var FRE$2 = {
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
				"01": {
					25: "default"
				},
				"02": {
					15: "default"
				},
				"03": {
					29: "default"
				},
				"04": {
					26: "default"
				},
				"05": {
					24: "default"
				},
				"09": {
					27: "default"
				}
			}
		},
		name: "Freispruch Poetry Slam",
		shortName: "Freispruch",
		description: "Ein Dichterwettstreit um die Gunst ... der Geschworenen.\nFünf Minuten Vortragszeit für selbst verfasste Texte ist alles, was sechs Slam Poetinnen und Poeten bleibt, um über ihr \"Urteil\" zu verhandeln.\n\nLyrik, Prosa, Performance, Dada - solange das Textblatt das einzige Requisit bleibt, ist alles erlaubt. Welches \"Plädoyer\" gewinnt, entscheidet das Publikum.\n\nAlles unter der strengen Beobachtung eines betagten, zynischen Häfenwärters und dem Eifer übermotivierter Pflichtverteidiger. Ein Poetry Slam im Theatergewand.\n\nAnmeldungen bitte unter contact@fomp.eu",
		location: {
			address: "Hamburgerstraße 15",
			name: "Spektakel"
		},
		time: {
			inlet: "19:30:00",
			start: "20:00:00"
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
				"01": {
					17: "default"
				},
				"02": {
					21: "default"
				},
				"03": {
					21: "default"
				},
				"04": {
					18: "default"
				},
				"05": {
					16: "default"
				},
				"06": {
					20: "default"
				},
				"09": {
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
		masters: ["Christian Schreibmüller", "Cornelia Ertl", "Johanna Obernberger", "Jasmin Lindinger"],
		type: "open",
		travel: "full",
		city: "Wien",
		first: "2012-02-01"
	};

	var $3_001$22 = {
		FRE: FRE$2,
		POW: POW,
		ROT: ROT,
		name: "Margareten"
	};

	var $2_005$2 = {
		"001": $3_001$22,
		name: "Margareten"
	};

	var TAG$6 = {
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
				"01": {
					21: {
						time: "19:00:00"
					}
				},
				"02": {
					18: {
						time: "19:00:00"
					}
				},
				"03": {
					25: {
						time: "19:00:00"
					}
				},
				"04": {
					22: {
						time: "19:00:00"
					}
				}
			}
		},
		name: "TAGebuch Slam",
		shortId: "AT-9-6-1-TAG"
	};

	var $3_001$24 = {
		TAG: TAG$6,
		name: "Mariahilf"
	};

	var $2_006$6 = {
		"001": $3_001$24,
		name: "Mariahilf"
	};

	var B00 = {
		dates: {
			2017: {
				12: {
					15: {
						time: "20:00:00"
					}
				}
			},
			2018: {
				"01": {
					12: {
						time: "20:00:00"
					}
				},
				"02": {
					16: {
						time: "20:00:00"
					}
				},
				"03": {
					16: {
						time: "20:00:00"
					}
				},
				"04": {
					20: {
						time: "20:00:00"
					}
				},
				"05": {
					25: {
						time: "20:00:00"
					}
				},
				"06": {
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
		masters: ["Diana Köhle"],
		type: "open",
		travel: "grant",
		city: "Wien",
		first: "2009-08-01"
	};

	var BIL = {
		name: "Bilder_Bücher_Bühne",
		description: "Österreichs einzige Lese-Mal-Bühne samt Poetry, Prosa und Pinselei. Sowas gibt's? Sure, it does.\nFOMP lädt drei Autorinnen und Autoren ein, die eigene Texte lesen, begleitet von einer bildenden Künstlerin.Die enstandenden Bilder werden in einer \"Auktion auf Speed\" an die Meistbietenden versteigert.\n\nWahn, Wonne und Wortkunst für Sammler und Jägerinnen besonderer Schätze.",
		location: {
			address: "Neustiftgasse 57",
			name: "Die Drahtwarenhandlung"
		},
		time: {
			inlet: "19:30:00",
			start: "20:00:00"
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
		masters: ["Diana Köhle"],
		type: "closed",
		travel: false,
		city: "Wien",
		first: "2012-10-01"
	};

	var POP = {
		name: "Pop Up Poetry",
		shortName: "Pop Up Poetry",
		description: "In der Reihe „Pop up Poetry“ präsentiert FOMP einzigartige Künstlerinnen und Künstler, die aus dem Poetry Slam-Umfeld kommen und durch beeindruckende Soloperformances hervorstechen. Konzerte. Lesungen. Stand-Up. Slam. Performance.\nDestilliert und verfeinert, immer frisch auf immer neuen Bühnen dieser schönen Stadt.Über alle Events dieser Serie erfahrt ihr auf unserer Facebook - Seite.",
		time: {
			inlet: "19:30:00",
			start: "20:00:00"
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
				10: {
					24: "default"
				},
				11: {
					28: "default"
				},
				12: {
					12: "default"
				},
				"01": {
					24: "default"
				},
				"02": {
					14: "default"
				},
				"03": {
					28: "default"
				},
				"04": {
					25: "default"
				},
				"05": {
					23: "default"
				},
				"09": {
					26: "default"
				}
			}
		},
		name: "Sinn & Seife - Die Poetry Soap",
		shortName: "Sinn & Seife",
		description: "Wiens Slamlesebühne mit Ensemble.\n\nMonatlich laden Yasmo, Mieze Medusa, Markus Köhle, Christopher Hütmannsberger, Jonas Scheiner und Henrik Szanto ein: Ins 7 * Stern - Wohnzimmer.\n\nGemeinsam mit dem Gast des Monats betrachten sie die Aufs und Abs ihrer wortverrückten Groß - WG.Ob Dichtkunst oder Prosa, Texte, Sketche aus den Ideen des Publikums– auf dieser Bühne herrschen Freude und Witz.\n\nWriting the good life. Straight outta Milchstraße.",
		location: {
			address: "Siebensterngasse 31",
			name: "7Stern"
		},
		time: {
			inlet: "19:30:00",
			start: "20:00:00"
		}
	};

	var $3_001$26 = {
		B00: B00,
		BIL: BIL,
		BOC: BOC,
		POP: POP,
		SIN: SIN,
		name: "Neubau"
	};

	var $2_007 = {
		"001": $3_001$26,
		name: "Neubau"
	};

	var BIS = {
		name: "Bis einer reimt",
		accommodation: "private",
		admission: "voluntary",
		audience: "40",
		fee: "50 €",
		tour: false,
		masters: ["Simon Tomaz"],
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
		masters: ["Adina Wilcke"],
		type: "open",
		travel: "full",
		city: "Wien",
		first: "2016-09-01"
	};

	var $3_001$28 = {
		BIS: BIS,
		SPR: SPR,
		name: "Josefstadt"
	};

	var $2_008 = {
		"001": $3_001$28,
		name: "Josefstadt"
	};

	var SIN$2 = {
		dates: {
			2017: {
				12: {
					"08": {
						time: "20:00:00"
					}
				}
			}
		},
		name: "Sing, Song & Sound-Slam",
		shortId: "AT-9-9-1-SIN"
	};

	var STU$2 = {
		dates: {
			2017: {
				11: {
					29: {
						time: "19:30:00"
					}
				}
			}
		},
		name: "STUMMGABEL Comedy Slam",
		shortId: "AT-9-9-1-STU"
	};

	var $3_001$30 = {
		SIN: SIN$2,
		STU: STU$2,
		name: "Alsergrund"
	};

	var $2_009$2 = {
		"001": $3_001$30,
		name: "Alsergrund"
	};

	var WOS = {
		name: "Wos host gsogt? Poetry Slam",
		shortId: "AT-9-15-1-WOS"
	};

	var $3_001$32 = {
		WOS: WOS,
		name: "Rudolfsheim-Fünfhaus"
	};

	var $2_015 = {
		"001": $3_001$32,
		name: "Rudolfsheim-Fünfhaus"
	};

	var BLI = {
		dates: {
			2018: {
				"02": {
					"02": "default"
				},
				"05": {
					21: "default"
				}
			}
		},
		name: "Blitzdichtgewitter Poetry Jazz Slam",
		description: "Poetry Slam und Jazz. Zwei Kunstformen kunstvoll vereint\nDie beste Melange für Liebende von Sprache und Musik: Ein Jazztrio untermalt die Texte vier geladener Künstlerinnen und Künstler.Zwischen Tagträumen und Nachtleben, Sprachbildern und Lautmalerei entsteht eine neue Begegnung mit Slam, wie sie allein Musik erzeugen kann.\n\nModeration: Yasmo\n\nBauer Schläger Wurf Berger:\n(Ralph Mothwurf – Gitarre, Andreas Lindenbauer – Bassklarinette / Altsaxophon, Reinhard Hörschläger – Percussion)",
		location: {
			address: "Gallitzinstraße 1",
			name: "Bockkeller"
		},
		time: {
			inlet: "19:30:00",
			start: "20:00:00"
		}
	};

	var FLA = {
		name: "Flawless Poetry Slam",
		shortId: "AT-9-16-1-FLA"
	};

	var STI = {
		name: "Stille Post Slam",
		shortId: "AT-9-16-1-STI"
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
		name: "textstrom Poetry Slam",
		shortId: "AT-9-16-1-TEX"
	};

	var U20$4 = {
		accessible: true,
		accommodation: "private",
		admission: "6 €",
		audience: "80",
		fee: "0 €",
		tour: "c",
		masters: ["Adina Wilcke"],
		type: "challenging",
		travel: "full",
		city: "Wien",
		first: "2008-02-01",
		name: "U20 Poetry Slam"
	};

	var $3_001$34 = {
		BLI: BLI,
		FLA: FLA,
		STI: STI,
		TEX: TEX,
		U20: U20$4,
		name: "Ottakring"
	};

	var $2_016$6 = {
		"001": $3_001$34,
		name: "Ottakring"
	};

	var $3_001$36 = {
		KUL: {
			accessible: true,
			accommodation: "private",
			admission: "5 €",
			audience: "150",
			fee: "70 €",
			name: "KultuRectum Poetry Slam",
			tour: false,
			masters: ["Tereza Hossa"],
			type: "challenging",
			travel: "full",
			city: "Wien",
			first: "2016-09-01"
		},
		name: "Floridsdorf"
	};

	var $2_021$4 = {
		"001": $3_001$36,
		name: "Floridsdorf"
	};

	var ABI = {
		accessible: true,
		accommodation: "private",
		admission: "3 €",
		audience: "120",
		fee: "40 €",
		name: "Ab ins Wasser Slam",
		tour: false,
		masters: ["Diana Köhle"],
		type: "challenging",
		travel: false,
		city: "Wien",
		first: "2015-06-01"
	};

	var $3_001$38 = {
		ABI: ABI,
		name: "Donaustadt"
	};

	var $2_022 = {
		"001": $3_001$38,
		name: "Donaustadt"
	};

	var $1_009 = {
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

	var AT = {
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

	var DE = {
		name: "Deutschland"
	};

	var MOR = {
		accessible: true,
		accommodation: "redundant",
		admission: false,
		audience: "70",
		fee: "0 €",
		name: "Morgenstern-Slam",
		tour: false,
		masters: ["Lipoverein / Carla Thuile (Organisation)", "Lene Morgenstern (Moderation)"],
		type: "open",
		travel: false,
		city: "verschiedene",
		first: "2010-01-01"
	};

	var $000$18 = {
		MOR: MOR
	};

	var $2_001$12 = {
		"000": $000$18,
		name: "Autonome Provinz Bozen – Südtirol"
	};

	var $1_001$2 = {
		"001": $2_001$12,
		name: "Trentino-Südtirol"
	};

	var IT = {
		"001": $1_001$2
	};

	var youslam = {
		AT: AT,
		DE: DE,
		IT: IT,
		yay: 3
	};

	Object.keys(youslam).forEach(function (country) {
		Object.keys(youslam[country]).forEach(function (first) {
			Object.keys(youslam[country][first]).forEach(function (second) {
				Object.keys(youslam[country][first][second]).forEach(function (third) {
					Object.keys(youslam[country][first][second][third]).forEach(function (key) {
						if (key.match(/[A-Z0-9]{3}/) && key.match(/[A-Z0-9]{3}/).index === 0) {
							youslam[country][first][second][third][key].id = country + first + second + third + key;
							youslam[country][first][second][third][key].shortId = country + "-" + parseInt(first, 10) + "-" + parseInt(second, 10) + "-" + parseInt(third, 10) + "-" + key;
						}
					});
				});
			});
		});
	});

	return youslam;
}();