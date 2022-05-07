import getType from "./getType.js";

/**
 * Check if a value is a set
 * @param {*} value The value to check
 * @returns {Boolean}
 */
const isSet = (value) => getType(value) === "set";

export default isSet;
