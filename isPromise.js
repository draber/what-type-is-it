/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import getType from "./getType.js";

/**
 * Check if a value is a promise
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = new Promise((resolve) => {});
 * isPromise(v1); // true 
 */
const isPromise = (value) => getType(value) === "Promise";

export default isPromise;