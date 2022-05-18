/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import isElement from "./isElement.js";

/**
 * Check if a value is an SVG element
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
 * isSvgElement(v1); // true
 */
const isSvgElement = (value) => isElement(value) && value.namespaceURI === "http://www.w3.org/2000/svg";

export default isSvgElement;
