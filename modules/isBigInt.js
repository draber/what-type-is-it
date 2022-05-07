import getType from "./getType.js";

/**
 * Check if a value is a bigint
 * @param {*} value The value to check
 * @returns {Boolean}
 */
const isBigInt = (value) => getType(value) === "bigint";

export default isBigInt;
