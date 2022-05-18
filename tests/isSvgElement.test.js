
import detector from "../whats-the-type.js";
import "global-jsdom/register";

test("isSvgElement", () => { 
    const v1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    expect(detector.getType(v1)).toBe("SVGElement");
    expect(detector.isSvgElement(v1)).toBe(true);
    expect(detector.isHtmlElement(v1)).toBe(false);
    expect(detector.isElement(v1)).toBe(true);
});