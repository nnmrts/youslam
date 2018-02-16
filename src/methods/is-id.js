/**
 * @name isId
 *
 * @param {any} string
 * string to be tested
 * @returns {boolean}
 * true if string is id
 */
const isId = string => (/^[A-Z]{2}\d{9}[A-Z\d]{3}$/).test(string);

export default isId;
