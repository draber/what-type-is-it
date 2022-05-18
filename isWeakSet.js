/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import getType from "./getType.js";

/**
 * Check if a value is a weak set
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = new WeakSet();
 * isWeakSet(v1); // true
 */
const isWeakSet = (value) => getType(value) === "WeakSet";

export default isWeakSet;