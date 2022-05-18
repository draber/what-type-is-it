/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import isElement from "./isElement.js";

/**
 * Check if a value is an HTML element
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = document.createElement("div");
 * isHtmlElement(v1); // true
 * 
 * class MyElement extends HTMLElement {}
 * customElement("my-element", MyElement);
 * 
 * const v2 = document.createElement("my-element");
 * isHtmlElement(v2); // true
 */
const isHtmlElement = (value) => isElement(value) && value.namespaceURI === "http://www.w3.org/1999/xhtml";

export default isHtmlElement;
