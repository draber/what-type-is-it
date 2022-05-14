import getType from "./getType.js";

/**
 * Check if a value is a bigint
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const value = BigInt(123);
 * isBigInt(value); // true
 * getType(value) // "BigInt"
 * isNumber(value); // false
 */
const isBigInt = (value) => getType(value) === "BigInt";

export default isBigInt;
