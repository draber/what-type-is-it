import detector from "../whats-the-type.js";
import "global-jsdom/register";

test("isElement1", () => {
    const v1 = document.createElement("div");
    expect(detector.isElement(v1)).toBe(true);
});

test("isElement2", () => {
    const v2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    expect(detector.isElement(v2)).toBe(true);
});

test("isElement3", () => {
    const v3 = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mrow");
    expect(detector.isElement(v3)).toBe(true);
});

test("isElement4", () => {
    class MyElement extends HTMLElement {}
    customElements.define("my-element", MyElement);
    const v4 = document.createElement("my-element");
    expect(detector.isElement(v4)).toBe(true);
});