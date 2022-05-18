/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import isUndefined from "./isUndefined.js";

/**
 * Check if a value is an HTML element
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = document.createElement("div");
 * isElement(v1); // true
 * 
 * const v2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
 * isElement(v2); // true
 * 
 * const v3 = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mrow");
 * isElement(v3); // true
 * 
 * class MyElement extends HTMLElement {}
 * customElements.define("my-element", MyElement);
 * const v4 = document.createElement("my-element");
 * isElement(v4); // true
 */
const isElement = (value) => !isUndefined(value.namespaceURI);

export default isElement;
