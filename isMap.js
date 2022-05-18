/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import getType from "./getType.js";

/**
 * Check if a value is a Map
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = new Map();
 * isMap(v1); // true
 */
const isMap = (value) => getType(value) === "Map";

export default isMap;