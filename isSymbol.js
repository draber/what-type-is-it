/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import getType from "./getType.js";

/**
 * Check if a value is a symbol
 * @param {*} value The value to check
 * @returns {Boolean}
 */
const isSymbol = (value) => getType(value) === "Symbol";

export default isSymbol;
