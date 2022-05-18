/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import getType from "./getType.js";

/**
 * Check if a value is a Symbol
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = Symbol('foo');
 * isSymbol(v1); // true
 */
const isSymbol = (value) => getType(value) === "Symbol";

export default isSymbol;
