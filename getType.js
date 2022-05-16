/**
 * More consistent variety of `typeof`. It returns a string such as `Null` and `Undefined`, `Function`, `String`, etc.
 * These values are case sensitive and mostly correspond to the constructor names.
 * @param {*} value The value to check
 * @returns {String}
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
