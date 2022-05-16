import getType from "./getType.js";

/**
 * Check if a value is callable
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = async(() => {});
 * isCallable(v1); // true, this covers functions, async functions and generators
 */
const isCallable = (value) => getType(value).endsWith('Function');

export default isCallable;
