import getType from "./getType.js";

/**
 * Check if a value is undefined
 * @param {*} value The value to check
 * @returns {Boolean}
 */
const isUndefined = (value) => getType(value) === "Undefined";

export default isUndefined;
