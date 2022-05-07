import getType from "./getType.js";

/**
 * Check if a value is a string
 * @param {*} value The value to check
 * @returns {Boolean}
 */
const isString = (value) => getType(value) === "string";

export default isString;
