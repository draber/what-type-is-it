import getType from "./getType.js";

/**
 * Check if a value is a boolean
 * @param {*} value The value to check
 * @returns {Boolean}
 */
const isBoolean = (value) => getType(value) === "Boolean";

export default isBoolean;
