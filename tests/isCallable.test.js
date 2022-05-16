import detector from "../whats-the-type.js";

test("isCallable", () => {
    expect(detector.isCallable(() => {})).toBe(true);
    expect(detector.isCallable(async () => {})).toBe(true);
    expect(detector.isCallable(function* () {})).toBe(true);
    expect(detector.isCallable(async function foo() {})).toBe(true);
    expect(detector.isCallable(function* bar () {})).toBe(true);
    expect(detector.isCallable(class {})).toBe(false);
    expect(detector.isCallable(class foo {})).toBe(false);
});
