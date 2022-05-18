/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import isHtmlElement from "./isHtmlElement.js";

/**
 * Check if a value is a custom element
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example 
 * class MyElement extends HTMLElement {}
 * customElements.define("my-element", MyElement);
 * 
 * const v1 = document.createElement("my-element");
 * isCustomElement(v1); // true
 */
const isCustomElement = (value) => isHtmlElement(value) && value.tagName.includes('-');

export default isCustomElement;
