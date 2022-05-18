
import detector from "../whats-the-type.js";
import "global-jsdom/register";

test("isMathElement", () => { 
    const v1 = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mrow");
    expect(detector.getType(v1)).toBe("MathMLElement");
    expect(detector.isMathElement(v1)).toBe(true);
    expect(detector.isHtmlElement(v1)).toBe(false);
    expect(detector.isElement(v1)).toBe(true);
});