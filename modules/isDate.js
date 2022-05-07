import getType from "./getType.js";

/**
 * Check if a value is a date object
 * @param {*} value The value to check
 * @returns {Boolean}
 */
const isDate = (value) => getType(value) === "date";

export default isDate;
