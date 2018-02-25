import Country from "../src/classes/country.js";

import TE from "./countries/te.js";

export default (() => ({
	TE: new Country(TE)
}))();
