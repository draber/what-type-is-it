import detector from "../whats-the-type.js";

test("isBlob", () => {
    const obj = { foo: 'bar' };
    const value = new Blob([JSON.stringify(obj, null, 2)], {
        type: "application/json",
    });
    expect(detector.getType(value)).toBe("Blob");
    expect(detector.isBlob(value)).toBe(true);
    expect(detector.isFunction(value)).toBe(false);
    expect(detector.isArray(value)).toBe(false);
    expect(detector.isBigInt(value)).toBe(false);
    expect(detector.isBoolean(value)).toBe(false);
    expect(detector.isDate(value)).toBe(false);
    expect(detector.isError(value)).toBe(false);
    expect(detector.isGeneratorFunction(value)).toBe(false);
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
