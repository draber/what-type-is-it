import getType from "./getType.js";

/**
 * Check if a value is a GeneratorFunction
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const value = function* generator(i) {};
 * isGeneratorFunction(value); // true
 * isFunction(value); // false
 */
const isGeneratorFunction = (value) => getType(value) === "GeneratorFunction";

export default isGeneratorFunction;
