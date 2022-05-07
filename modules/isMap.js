import getType from "./getType.js";

/**
 * Check if a value is a map
 * @param {*} value The value to check
 * @returns {Boolean}
 */
const isMap = (value) => getType(value) === "map";

export default isMap;
