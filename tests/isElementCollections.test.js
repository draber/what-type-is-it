import detector from "../whats-the-type.js";
import "global-jsdom/register";

document.body.innerHTML = '<form><ul><li></li><li></li><li></li></ul></form>';

test("isElementCollection1", () => {
    const v1 = document.forms;
    expect(detector.getType(v1)).toBe("HTMLCollection");
    expect(detector.isElementCollection(v1)).toBe(true);
    expect(detector.isArray(v1)).toBe(false);
    expect(detector.isIterable(v1)).toBe(true);
});

test("isElementCollection2", () => {
    const v2 = document.querySelectorAll("li");
    expect(detector.getType(v2)).toBe("NodeList");
    expect(detector.isElementCollection(v2)).toBe(true);
    expect(detector.isArray(v2)).toBe(false);
    expect(detector.isIterable(v2)).toBe(true);
});

test("isElementCollection3", () => {
    const v3 = Array.from(document.forms);
    expect(detector.getType(v3)).toBe("Array");
    expect(detector.isElementCollection(v3)).toBe(false);
    expect(detector.isArray(v3)).toBe(true);
    expect(detector.isIterable(v3)).toBe(true);
});

test("isElementCollection4", () => {
    const v4 = Array.from(document.querySelectorAll("li"));
    expect(detector.getType(v4)).toBe("Array");
    expect(detector.isElementCollection(v4)).toBe(false);
    expect(detector.isArray(v4)).toBe(true);
    expect(detector.isIterable(v4)).toBe(true);
});
    