import getType from "./getType.js";

/**
 * Check if a value is a Date object
 * @param {*} value The value to check
 * @returns {Boolean}
 */
const isDate = (value) => getType(value) === "Date";

export default isDate;
