import Country from "./classes/country.js";
import AT from "./countries/at.js";
import IT from "./countries/it.js";

export default () => ({
	AT: new Country(AT),
	IT: new Country(IT)
});
