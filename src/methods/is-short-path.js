/**
 * @name isShortPath
 *
 * @param {any} string
 * string to be tested
 * @returns {boolean}
 * true if string is short id
 */
const isShortPath = string => (/^[A-Z]{2}(-\d{1,3}){0,3}(-[A-Z]{3})?$/).test(string);

export default isShortPath;
