import getType from "./getType.js";

/**
 * Check if a value is a symbol
 * @param {*} value The value to check
 * @returns {Boolean}
 */
const isSymbol = (value) => getType(value) === "symbol";

export default isSymbol;
