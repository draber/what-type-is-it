import getType from "./getType.js";

/**
 * Check if a value is a AsyncFunction
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = async(() => {});
 * isAsyncFunction(v1); // true 
 */
const isPromise = (value) => getType(value) === "AsyncFunction";

export default isPromise;