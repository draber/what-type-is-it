import getType from "./getType.js";

/**
 * Check if a value is a generator
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const value = function* generator(i) {};
 * isGenerator(value); // true
 * isFunction(value); // false
 */
const isGenerator = (value) => getType(value) === "generator";

export default isGenerator;
