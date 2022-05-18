/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import isElement from "./isElement.js";

/**
 * Check if a value is a Math element
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mrow");
 * isMathElement(v1); // true
 */
const isMathElement = (value) => isElement(value) && value.namespaceURI === "http://www.w3.org/1998/Math/MathML";

export default isMathElement;
