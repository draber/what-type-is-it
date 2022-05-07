import getType from "./getType.js";

/**
 * Check if a value is a number
 * @param {*} value The value to check
 * @returns {Boolean}
 */
const isNumber = (value) => getType(value) === "number";

export default isNumber;
