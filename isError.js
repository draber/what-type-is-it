import getType from "./getType.js";

/**
 * Check if a value is an error
 * @param {*} value The value to check
 * @returns {Boolean}
 */
const isError = (value) => getType(value) === "Error";

export default isError;
