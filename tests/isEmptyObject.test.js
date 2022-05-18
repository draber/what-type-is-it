import detector from "../whats-the-type.js";

test("isEmptyObject", () => {
    const v1 = {};
    expect(detector.isEmptyObject(v1)).toBe(true);
    expect(detector.isPlainObject(v1)).toBe(true);

    const v2 = { a: 1 };
    expect(detector.isEmptyObject(v2)).toBe(false);
    expect(detector.isPlainObject(v2)).toBe(true);
});
