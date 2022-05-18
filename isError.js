/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import getType from "./getType.js";

/**
 * Check if a value is an error
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = new Error();
 * isError(v1); // true
 */
const isError = (value) => getType(value) === "Error";

export default isError;
