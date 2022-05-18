/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import getType from "./getType.js";

/**
 * Check if a value is a WeakMap
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = new WeakMap();
 * isWeakMap(v1); // true
 */
const isWeakMap = (value) => getType(value) === "WeakMap";

export default isWeakMap;