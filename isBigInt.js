/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import getType from "./getType.js";

/**
 * Check if a value is a BigInt
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const value = BigInt(123);
 * isBigInt(value); // true
 * isNumber(value); // false
 */
const isBigInt = (value) => getType(value) === "BigInt";

export default isBigInt;
