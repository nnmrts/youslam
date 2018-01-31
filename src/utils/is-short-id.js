/**
 * @name isShortId
 *
 * @param {any} string
 * string to be tested
 * @returns {boolean}
 * true if string is short id
 */
const isShortId = string => (/[A-Z]{2}-\d{1,3}-\d{1,3}-\d{1,3}-[A-Z\d]{3}/).test(string);

export default isShortId;
