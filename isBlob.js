import getType from "./getType.js";

/**
 * Check if a value is a blob
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const obj = { foo: 'bar' };
 * const v1 = new Blob([JSON.stringify(obj, null, 2)], { type : 'application/json' });
 * isBlob(v1); // true
 */
const isBlob = (value) => getType(value) === "Blob";

export default isBlob;