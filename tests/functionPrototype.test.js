import detector from "../whats-the-type.js";

function a() {
}
function b() {
}
b.prototype = new a();

function c() {}
c.prototype = {
    method1: 'xx'
};

function d() {}
d.prototype.e = 'f';

test("fnPrototypeAB", () => {
    const value = new b();
    expect(detector.getType(value)).toBe("a");
});

test("fnPrototypeC", () => {
    const value = new c();
    expect(detector.getType(value)).not.toBe("c");
    expect(detector.isPlainObject(value)).toBe(true);
});

test("fnPrototypeD", () => {
    const value = new d();
    expect(detector.getType(value)).toBe("d");
    expect(detector.isPlainObject(value)).toBe(false);
});