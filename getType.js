/**
 * More consistent variety of `typeof`. It returns a string such as `Null`, `Undefined`, `Function`, `String`, etc.
 * These values are case sensitive and mostly correspond to the constructor names.
 * @param {*} value The value to check
 * @returns {String}
 * @example
 * // getType() is not limited to the examples below
 * const v1 = null;
 * getType(v1); // "Null"
 * 
 * let v2;
 * getType(v2); // "Undefined"
 * 
 * const v3 = function() {};
 * getType(v3); // "Function", use isCallable() to cover async functions and generators as well
 * 
 * const v4 = async function() {};
 * getType(v4); // "AsyncFunction"
 * 
 * const v5 = function* generator(i) {};
 * getType(v5); // "GeneratorFunction"
 * 
 * const v6 = { foo: "bar" };
 * getType(v6); // "PlainObject", not "Object", as you may have expected
 * 
 * const v7 = new Map();
 * getType(v7); // "Map"
 * 
 * const v8 = new Set();
 * getType(v8); // "Set"
 * 
 * const v9 = new WeakMap();
 * getType(v9); // "WeakMap"
 * 
 * const v10 = new WeakSet();
 * getType(v10); // "WeakSet"
 * 
 * const v11 = new Date();
 * getType(v11); // "Date"
 * 
 * const v12 = new Error();
 * getType(v12); // "Error"
 * 
 * const v13 = new Promise(() => {});
 * getType(v13); // "Promise"
 * 
 * class CustomClass {}
 * const v14 = new CustomClass();
 * getType(v14); // "CustomClass"
 * getType(class CustomClass {}) // "Class", note the difference: CustomClass has not been initiated yet
 */
const getType = (value) => {
    if (typeof value === "undefined") {
        return "Undefined";
    }

    // `null` is an object, but has no constructor
    if (value === null) {
        return "Null";
    }

    // `Object` in this context is ambiguous, `PlainObject` on the other hand
    // is pretty established in the industry and used by other libraries as well.
    if (value.constructor.name === "Object") {
        return "PlainObject";
    }

    // ES6 classes that aren't initiated with `new` would be reported with `Function`
    // instead of `Class`. Parsing the input value as string can fix this
    if (
        value.constructor.name === "Function" &&
        /^class\s+([\w]+\s+)?{/.test(value.toString().replace(/\s+/gs, " "))
    ) {
        return "Class";
    }

    // Work around objects with the own property `name` as a method
    // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#sect3
    if (typeof value.constructor.name === "function") {
        const match = value.constructor.toString().match(/[^\s]+\s+([\w]+)/);
        if (match && match.length > 0) {
            return match[1];
        }
        return "Object";
    }

    // The name of the constructor, for example `Array`, `Object`,
    // `Number`, `String`, `Boolean` or `MyCustomObject`
    return value.constructor.name;
};

export default getType;
