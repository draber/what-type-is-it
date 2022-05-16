import getType from "./getType.js";

/**
 * Check if a value is a boolean
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = true;
 * isBoolean(v1); // true
 */
const isBoolean = (value) => getType(value) === "Boolean";

export default isBoolean;
