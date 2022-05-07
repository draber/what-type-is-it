import detector from "../whats-the-type.js";

test("isFunction", () => {
    const value = () => {};
    expect(detector.getType(value)).toBe("function");
    expect(detector.isFunction(value)).toBe(true);
    expect(detector.isArray(value)).toBe(false);
    expect(detector.isBigInt(value)).toBe(false);
    expect(detector.isBoolean(value)).toBe(false);
    expect(detector.isDate(value)).toBe(false);
    expect(detector.isError(value)).toBe(false);
    expect(detector.isGenerator(value)).toBe(false);
    expect(detector.isMap(value)).toBe(false);
    expect(detector.isNull(value)).toBe(false);
    expect(detector.isNumber(value)).toBe(false);
    expect(detector.isPlainObject(value)).toBe(false);
    expect(detector.isRegExp(value)).toBe(false);
    expect(detector.isSet(value)).toBe(false);
    expect(detector.isString(value)).toBe(false);
    expect(detector.isSymbol(value)).toBe(false);
    expect(detector.isUndefined(value)).toBe(false);
});

test("isFunction2", () => {
    const value = function named() {};
    expect(detector.getType(value)).toBe("function");
    expect(detector.isFunction(value)).toBe(true);
    expect(detector.isArray(value)).toBe(false);
    expect(detector.isBigInt(value)).toBe(false);
    expect(detector.isBoolean(value)).toBe(false);
    expect(detector.isDate(value)).toBe(false);
    expect(detector.isError(value)).toBe(false);
    expect(detector.isGenerator(value)).toBe(false);
    expect(detector.isMap(value)).toBe(false);
    expect(detector.isNull(value)).toBe(false);
    expect(detector.isNumber(value)).toBe(false);
    expect(detector.isPlainObject(value)).toBe(false);
    expect(detector.isRegExp(value)).toBe(false);
    expect(detector.isSet(value)).toBe(false);
    expect(detector.isString(value)).toBe(false);
    expect(detector.isSymbol(value)).toBe(false);
    expect(detector.isUndefined(value)).toBe(false);
});

test("isFunction3", () => {
    const value = new Function();
    expect(detector.getType(value)).toBe("function");
    expect(detector.isFunction(value)).toBe(true);
    expect(detector.isArray(value)).toBe(false);
    expect(detector.isBigInt(value)).toBe(false);
    expect(detector.isBoolean(value)).toBe(false);
    expect(detector.isDate(value)).toBe(false);
    expect(detector.isError(value)).toBe(false);
    expect(detector.isGenerator(value)).toBe(false);
    expect(detector.isMap(value)).toBe(false);
    expect(detector.isNull(value)).toBe(false);
    expect(detector.isNumber(value)).toBe(false);
    expect(detector.isPlainObject(value)).toBe(false);
    expect(detector.isRegExp(value)).toBe(false);
    expect(detector.isSet(value)).toBe(false);
    expect(detector.isString(value)).toBe(false);
    expect(detector.isSymbol(value)).toBe(false);
    expect(detector.isUndefined(value)).toBe(false);
});