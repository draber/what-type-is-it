import getType from "./getType.js";

/**
 * Check if a value is callable
 * @param {*} value The value to check
 * @returns {Boolean}
 */
const isCallable = (value) => getType(value).endsWith('Function');

export default isCallable;
