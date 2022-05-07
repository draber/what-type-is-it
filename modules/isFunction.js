import getType from "./getType.js";

/**
 * Check if a value is a function
 * @param {*} value The value to check
 * @returns {Boolean}
 */
const isFunction = (value) => getType(value) === "function";

export default isFunction;
