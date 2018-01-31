/**
 * @name isPath
 *
 * @param {any} string
 * string to be tested
 * @returns {boolean}
 * true if string is id
 */
const isPath = string => (/^[A-Z]{2}(\d{3}){0,3}$/).test(string);

export default isPath;
