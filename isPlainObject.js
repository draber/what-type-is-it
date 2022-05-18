/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import getType from "./getType.js";

/**
 * Check if a value is a plain object
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const value = {a:1, b:2};
 * isPlainObject(value); // true
 * getType(value) // "PlainObject"
 */
const isPlainObject = (value) => getType(value) === "PlainObject";

export default isPlainObject;
