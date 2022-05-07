import getType from "./getType.js";

/**
 * Check if a value is a plain object
 * @param {*} value The value to check
 * @returns {Boolean}
 */
const isPlainObject = (value) => getType(value) === "object";

export default isPlainObject;
