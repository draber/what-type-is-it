/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import isPlainObject from "./isPlainObject.js";

/**
 * Check if a value is an empty plain object
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = {a:1, b:2};
 * isEmptyObject(v1); // false
 * 
 * const v2 = {};
 * isEmptyObject(v2); // true
 */
const isEmptyObject = (value) => isPlainObject(value) && Object.keys(value).length === 0;

export default isEmptyObject;
