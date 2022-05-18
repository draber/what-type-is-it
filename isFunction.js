/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import getType from "./getType.js";

/**
 * Check if a value is a Function
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = function() {};
 * isFunction(v1); // true 
 * 
 * const v2 = new Function();
 * isFunction(v2); // true
 * 
 * const v3 = () => {};
 * isFunction(v3); // true
 * 
 * const v4 = function* generator(i) {};
 * isFunction(v4); // false
 * isGeneratorFunction(v4); // true
 */
const isFunction = (value) => getType(value) === "Function";

export default isFunction;

