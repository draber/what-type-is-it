/**
 * More consistent variety of `typeof`. It returns a string such as `null` and `undefined`, `Function`, `String`, etc. 
 * These values are case sensitive and mostly correspond to the constructor names.
 * @param {*} value The value to check
 * @returns {String}
 */
const getType = (value) => {
    if (typeof value === "undefined") {
        return "Undefined";
    }

    // `null` is a special case, it is an object but has no constructor
    if (value === null) {
        return "Null";
    }

    // `Object` in this context is very ambiguous, `PlainObject` on the other hand
    // is pretty established in the industry and used by other libraries as well.
    if (value.constructor.name === "Object") {
        return "PlainObject";
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
