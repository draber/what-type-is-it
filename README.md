# What's the type?

![](https://img.shields.io/github/license/draber/whats-the-type.svg)
![](https://img.shields.io/github/package-json/v/draber/whats-the-type.svg?)
![](https://img.shields.io/bundlephobia/min/whats-the-type.svg)
[![DeepScan grade](https://deepscan.io/api/teams/17732/projects/21075/branches/594827/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=17732&pid=21075&bid=594827)

`typeof` returns `[object Object]` for almost everything beyond primitives. This module works around this drawback and returns a more accurate type. 

## What's new in v2?
- v2 brings some improvements but also introduces a breaking change by no longer returning its results in lower case. 

    1. `getType()` now returns values in a case sensitive manner. Using lower case in v1 was meant to be more consistent with the behavior of `typeof`, but it made it impossible to distinguish between `SomeObject` and `someobject`. 
    2. `getType({ foo: 'bar' })` now returns `PlainObject` rather than `object`. 
    3. `getType(function* ())` now returns `GeneratorFunction` instead of `generator`. 
    4. `isGeneratorFunction()` replaces `isGenerator()`.
    5. `getType()` now works around the [issue with `Function.name`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#sect3) and returns the object type correctly. It will fall back to `Object` in the case of failure.

    If you're using  the `is<Type>()` functions only, your code will keep on working without any changes, except for the now fixed `Function.name` issue [5]. As for `getType()` you'll need to update your code with regards to the case sensitivity [1].

- v2.1 - v2.4 add more code examples a range of new `is<Type>()` functions; check out _Usage_ for a complete list.

- v2.4 adds [reference tables](//whats-the-type.netlify.app/tutorial-01.-Basics.html) as a look-up for the return values of `getType()`.

## Installation

```bash
npm install whats-the-type
```

## Usage
_What's the type_ comes with one generic detector, [`getType()`](https://whats-the-type.netlify.app/global.html#getType) and many `is<Type>()` functions:
- [isArray()](//whats-the-type.netlify.app/global.html#isArray)                        
- [isAsyncFunction()](//whats-the-type.netlify.app/global.html#isAsyncFunction)        
- [isBigInt()](//whats-the-type.netlify.app/global.html#isBigInt)                      
- [isBlob()](//whats-the-type.netlify.app/global.html#isBlob)                          
- [isBoolean()](//whats-the-type.netlify.app/global.html#isBoolean)                    
- [isCallable()](//whats-the-type.netlify.app/global.html#isCallable) 
- [isCustomElement()](//whats-the-type.netlify.app/global.html#isCustomElement)             
- [isDate()](//whats-the-type.netlify.app/global.html#isDate)   
- [isElement()](//whats-the-type.netlify.app/global.html#isElement)
- [isElementCollection()](//whats-the-type.netlify.app/global.html#isElementCollection)
- [isEmptyObject()](//whats-the-type.netlify.app/global.html#isEmptyObject)                       
- [isError()](//whats-the-type.netlify.app/global.html#isError)                        
- [isFunction()](//whats-the-type.netlify.app/global.html#isFunction)                 
- [isGeneratorFunction()](//whats-the-type.netlify.app/global.html#isGeneratorFunction)
- [isHtmlElement()](//whats-the-type.netlify.app/global.html#isHtmlElement)
- [isMap()](//whats-the-type.netlify.app/global.html#isMap) 
- [isMathElement()](//whats-the-type.netlify.app/global.html#isMathElement)                           
- [isNull()](//whats-the-type.netlify.app/global.html#isNull)                          
- [isNumber()](//whats-the-type.netlify.app/global.html#isNumber)                      
- [isPlainObject()](//whats-the-type.netlify.app/global.html#isPlainObject)            
- [isPromise()](//whats-the-type.netlify.app/global.html#isPromise)                    
- [isRegExp()](//whats-the-type.netlify.app/global.html#isRegExp)                      
- [isSet()](//whats-the-type.netlify.app/global.html#isSet)                            
- [isString()](//whats-the-type.netlify.app/global.html#isString)   
- [isSvgElement()](//whats-the-type.netlify.app/global.html#isSvgElement)                   
- [isSymbol()](//whats-the-type.netlify.app/global.html#isSymbol)                      
- [isUndefined()](//whats-the-type.netlify.app/global.html#isUndefined)                
- [isWeakMap()](//whats-the-type.netlify.app/global.html#isWeakMap)                    
- [isWeakSet()](//whats-the-type.netlify.app/global.html#isWeakSet) 

### Importing

You can import all functionality at once if you want to, but this means importing loads of things you won't need. Sure, treeshaking can make up for this but you can control things as well, the choice is yours.
    
```javascript
// Import 'whats-the-type' if you have a bunch of different types to check. This imports all functions at once.
import detector from 'whats-the-type'; // note that whats-the-type is implemented as ESM and not in CJS

// use `getType` if you don't know what type to expect
import getType from 'whats-the-type/getType.js';

// use the `is<Type>` functions if you want to confirm if a value is of a specific type
import isString from 'whats-the-type/isString.js';
import isPlainObject from 'whats-the-type/isPlainObject.js';
```

### getType()
`getType()` returns a string such as `Null`, `Undefined`, `Function`, `String`, etc. These values are case sensitive and mostly correspond to the constructor names. In other words, the function doesn't just return `object` for most types but is as precise as possible. If you are reading this at NPM, head over to the [full documentation](//whats-the-type.netlify.app) where you find reference tables with just about any possible return value.

```javascript
// the detector always returns a string
getType(['a', 'b', 'c']); // 'Array'

// use the import name (e.g. 'detector') if you imported everything
detector.getType(123); // 'Number'

// here are some more examples but getType() isn't limited to these
const v1 = null;
getType(v1); // "Null"

let v2;
getType(v2); // "Undefined"

const v3 = function() {};
getType(v3); // "Function", use isCallable() to cover async functions and generators as well

const v4 = async function() {};
getType(v4); // "AsyncFunction"

const v5 = function* generator(i) {};
getType(v5); // "GeneratorFunction"

const v6 = { foo: "bar" };
getType(v6); // "PlainObject", not "Object", as you may have expected

const v7 = new Map();
getType(v7); // "Map"

const v8 = new Set();
getType(v8); // "Set"

const v9 = new WeakMap();
getType(v9); // "WeakMap"

const v10 = new WeakSet();
getType(v10); // "WeakSet"

const v11 = new Date();
getType(v11); // "Date"

const v12 = new Error();
getType(v12); // "Error"

const v13 = new Promise(() => {});
getType(v13); // "Promise"

class CustomClass {}
const v14 = new CustomClass();
getType(v14); // "CustomClass"
getType(class CustomClass {}) // "Class", note the difference: CustomClass has not been initiated yet
```

### is&lt;Type&gt;()
`is<Type>()` functions return `true` if the value is of the specified type. They exist for the most common types and are explained in the [full documentation](//whats-the-type.netlify.app).

```javascript
isString('a'); // true

isString(123); // false

isPlainObject({ a: 1 }); // true

isMap(new Map()); // true

isCallable(() => {}); // true

isAsyncFunction(async () => {}); // true

isGeneratorFunction(function* () {}); // true

isWeakMap(new WeakMap()); // true

isWeakSet(new WeakSet()); // true
```

## Resources

- Repository: [github.com/draber/whats-the-type](https://github.com/draber/whats-the-type) 
- Package: [npmjs.com/package/whats-the-type](https://npmjs.com/package/whats-the-type)
- Docs: [whats-the-type.netlify.app](https://whats-the-type.netlify.app/)
