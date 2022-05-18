/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import getType from "./getType.js";

/**
 * Check if a value is a RegExp
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = /regexp/;
 * isRegExp(v2); // true
 * 
 * const v3 = new RegExp("regexp", 'gi');
 * isRegExp(v3); // true
 */
const isRegExp = (value) => getType(value) === "RegExp";

export default isRegExp;
