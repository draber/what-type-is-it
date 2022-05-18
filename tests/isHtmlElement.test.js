import detector from "../whats-the-type.js";
import "global-jsdom/register";

test("isHtmlElement", () => { 
    const v1 = document.createElement("a");
    expect(detector.getType(v1)).toBe("HTMLAnchorElement");
    expect(detector.isHtmlElement(v1)).toBe(true);
    expect(detector.isElement(v1)).toBe(true);
    expect(detector.isSvgElement(v1)).toBe(false);
});