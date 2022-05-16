import getType from "./getType.js";

/**
 * Check if a value is null
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = null;
 * isNull(v1); // true
 */
const isNull = (value) => getType(value) === "Null";

export default isNull;
