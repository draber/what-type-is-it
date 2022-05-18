/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import getType from "./getType.js";

/**
 * Check if a value is callable
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * class Foo {
 *     anyMethod(){...}
 *     static otherMethod(){...}
 * }
 * const fooObj = new Foo();
 * const v1 = fooObj.anyMethod;
 * isCallable(v1); // true
 * 
 * const v2 = Foo.otherMethod;
 * isCallable(v2); // true
 * 
 * const v3 = function () {}
 * isCallable(v3); // true
 * 
 * const v4 = function* generator(i) {};
 * isCallable(v4); // true
 * 
 * const v5 = async function () {};
 * isCallable(v5); // true
 */
const isCallable = (value) => getType(value).endsWith('Function');

export default isCallable;
