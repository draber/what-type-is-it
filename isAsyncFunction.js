import getType from "./getType.js";

/**
 * Check if a value is a AsyncFunction
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = async(() => {});
 * isAsyncFunction(v1); // true 
 * isFunction(v1); // false, because this covers regular functions only
 * isCallable(v1); // true, this covers functions, async functions and generators
 */
const isPromise = (value) => getType(value) === "AsyncFunction";

export default isPromise;