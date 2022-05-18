/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
 import getType from "./getType.js";

/**
 * Check if a value is an AsyncFunction
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = async(() => {});
 * isAsyncFunction(v1); // true 
 * isFunction(v1); // false, because this covers regular functions only
 */
const isAsyncFunction = (value) => getType(value) === "AsyncFunction";

export default isAsyncFunction;