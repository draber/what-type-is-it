import detector from "../whats-the-type.js";
import "global-jsdom/register";

test("isCustomElement", () => { 
    class MyElement extends HTMLElement {}
    customElements.define("my-element", MyElement);
    
    const v1 = document.createElement("my-element");
    expect(detector.getType(v1)).toBe("MyElement");
    expect(detector.isCustomElement(v1)).toBe(true);
    expect(detector.isHtmlElement(v1)).toBe(true);
    expect(detector.isElement(v1)).toBe(true);
    expect(detector.isSvgElement(v1)).toBe(false);
});

test("isCustomElement2", () => { 
    class MyElement2 extends HTMLAnchorElement {}
    customElements.define("my-element2", MyElement2, { extends: 'a' });
    
    const v2 = document.createElement("my-element2");
    expect(detector.getType(v2)).toBe("HTMLElement");
    expect(detector.isCustomElement(v2)).toBe(true);
    expect(detector.isHtmlElement(v2)).toBe(true);
    expect(detector.isElement(v2)).toBe(true);
    expect(detector.isSvgElement(v2)).toBe(false);
});
