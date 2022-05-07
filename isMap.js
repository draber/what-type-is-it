import getType from "./getType.js";

/**
 * Check if a value is a map
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = new Map();
 * isMap(v1); // true
 */
const isMap = (value) => getType(value) === "map";

export default isMap;