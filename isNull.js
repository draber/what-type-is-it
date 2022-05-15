import getType from "./getType.js";

/**
 * Check if a value is null
 * @param {*} value The value to check
 * @returns {Boolean}
 */
const isNull = (value) => getType(value) === "Null";

export default isNull;
