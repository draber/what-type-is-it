/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import getType from "./getType.js";

/**
 * Check if a value is a Boolean
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = true;
 * isBoolean(v1); // true
 */
const isBoolean = (value) => getType(value) === "Boolean";

export default isBoolean;
