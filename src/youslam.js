import merge from "lodash/merge";

import constructor from "./constructor.js";
import methods from "./methods.js";

/**
 * @name YS
 *
 * @class YS
 */
const YS = class { };

YS.constructor = constructor;

merge(YS, methods);

export default YS;
