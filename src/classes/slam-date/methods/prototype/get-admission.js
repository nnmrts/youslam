import has from "lodash/has";

/**
 * @name getAdmission
 * @memberof SlamDate
 * @param {string} [delimiter="/"]
 * delimiter
 * @returns {string}
 * formatted admission string
 */
const getAdmission = function(delimiter = "/") {
	let admission = "";

	let currencySymbol = "";

	if (has(this, "admission.normal")) {
		switch (this.admission.currency) {
			case "euro":
				currencySymbol = "€";
				break;
			case "dollar":
				currencySymbol = "$";
				break;
			default:
				break;
		}
		admission = `${this.admission.normal} ${currencySymbol}`;
		if (has(this.admission, "reduced")) {
			admission = `${this.admission.reduced} ${currencySymbol} ${delimiter} ${admission}`;
		}
		else if (has(this.admission, "advance")) {
			admission = `${this.admission.advance} ${currencySymbol}`;
		}

		return admission;
	}

	return this.admission;
};

export default getAdmission;
