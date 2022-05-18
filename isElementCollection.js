/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import getType from "./getType.js";

/**
 * Check if a value is a custom element
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example 
 * const v1 = document.forms;
 * isElementCollection(v1); // true
 * 
 * const v2 = document.querySelectorAll("li");
 * isElementCollection(v2); // true
 * 
 * const v3 = Array.from(document.forms);
 * isElementCollection(v3); // false
 * 
 * const v4 = Array.from(document.querySelectorAll("li"));
 * isElementCollection(v4); // false
 */
const isElementCollection = (value) => ['NodeList', 'HTMLCollection'].includes(getType(value));

export default isElementCollection;