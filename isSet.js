/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import getType from "./getType.js";

/**
 * Check if a value is a set
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = new Set();
 * isSet(v1); // true
 */
const isSet = (value) => getType(value) === "Set";

export default isSet;
