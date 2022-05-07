import getType from "./getType.js";

/**
 * Check if a value is a regexp
 * @param {*} value The value to check
 * @returns {Boolean}
 */
const isRegExp = (value) => getType(value) === "regexp";

export default isRegExp;
