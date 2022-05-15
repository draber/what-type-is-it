import getType from "./getType.js";

/**
 * Check if a value is a iterable
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = [1, 2, 3];
 * isIterable(v1); // true 
 * const v2 = () => {};
 * isIterable(v2); // false
 */
const isIterable = (value) => Symbol.iterator in Object(value) && getType(value[Symbol.iterator]) === 'Function';

export default isIterable;
