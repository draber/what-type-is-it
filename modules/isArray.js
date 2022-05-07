import getType from "./getType.js";

/**
 * Check if a value is an array
 * @param {*} value The value to check
 * @returns {Boolean}
 */
const isArray = (value) => getType(value) === "array";

export default isArray;
