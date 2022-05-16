# What's the type?

![](https://img.shields.io/github/license/draber/whats-the-type.svg)
![](https://img.shields.io/github/package-json/v/draber/whats-the-type.svg?)
![](https://img.shields.io/bundlephobia/min/whats-the-type.svg)

`typeof` returns `[object Object]` for almost everything beyond primitives. This module works around this drawback and returns a more accurate type. 

## What's new in v2?
- v2 brings some improvements but also introduces a breaking change by going case sensitive. 

    1. `getType()` now returns values in a case sensitive manner. Using lower case in v1 was meant to be more consistent with the behavior of `typeof`, but it made it impossible to distinguish between `SomeObject` and `someobject`. 
    2. `getType({ foo: 'bar' })` now returns `PlainObject` rather than `object`. 
    3. `getType(function* ())` now returns `GeneratorFunction` instead of `generator`. 
    4. `isGeneratorFunction()` replaces `isGenerator()`; the latter has been kept as an alias for backwards compatibility, but is no longer part of this documentation.
    5. `getType()` now works around the [issue with `Function.name`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#sect3) and returns the object type correctly. It will fall back to `Object` in the case of failure.

    If you're using  the `is<Type>()` functions only, your code will keep on working without any changes, except for the now fixed `Function.name` issue [5]. As for `getType()` you'll need to update your code with regards to the case sensitivity [1].

- v2.1 adds a number of `is<Type>()` functions: `isAsyncFunction()`, `isBlob()`, `isIterable()`, `isPromise()`, `isWeakMap()` and `isWeakSet()`.
- v2.2 introduces `isCallable()`. Not initiated classes are now reported as `Class` and no longer as `Function`. It also fixes some minor bugs from earlier versions, mainly in the documentation.
- v2.3 removes `isFile()` again, because File objects and physical files aren't the same thing. This could have lead to wrong expectations and misunderstandings. v2.3 also adds more code examples.

## Installation

```bash
npm install whats-the-type
```

## Usage
_What's the type_ comes with one generic detector, `getType()` and many `is<Type>()` functions:
- [isArray()](//whats-the-type.netlify.app/global.html#isArray)                        
- [isAsyncFunction()](//whats-the-type.netlify.app/global.html#isAsyncFunction)        
- [isBigInt()](//whats-the-type.netlify.app/global.html#isBigInt)                      
- [isBlob()](//whats-the-type.netlify.app/global.html#isBlob)                          
- [isBoolean()](//whats-the-type.netlify.app/global.html#isBoolean)                    
- [isCallable()](//whats-the-type.netlify.app/global.html#isCallable)              
- [isDate()](//whats-the-type.netlify.app/global.html#isDate)                          
- [isError()](//whats-the-type.netlify.app/global.html#isError)                        
- [isFile()](//whats-the-type.netlify.app/global.html#isFile)                          
- [isFunction()](//whats-the-type.netlify.app/global.html#isFunction)                 
- [isGeneratorFunction()](//whats-the-type.netlify.app/global.html#isGeneratorFunction)
- [isMap()](//whats-the-type.netlify.app/global.html#isMap)                            
- [isNull()](//whats-the-type.netlify.app/global.html#isNull)                          
- [isNumber()](//whats-the-type.netlify.app/global.html#isNumber)                      
- [isPlainObject()](//whats-the-type.netlify.app/global.html#isPlainObject)            
- [isPromise()](//whats-the-type.netlify.app/global.html#isPromise)                    
- [isRegExp()](//whats-the-type.netlify.app/global.html#isRegExp)                      
- [isSet()](//whats-the-type.netlify.app/global.html#isSet)                            
- [isString()](//whats-the-type.netlify.app/global.html#isString)                      
- [isSymbol()](//whats-the-type.netlify.app/global.html#isSymbol)                      
- [isUndefined()](//whats-the-type.netlify.app/global.html#isUndefined)                
- [isWeakMap()](//whats-the-type.netlify.app/global.html#isWeakMap)                    
- [isWeakSet()](//whats-the-type.netlify.app/global.html#isWeakSet)              
    
```javascript
// Import 'whats-the-type' if you have a bunch of different types to check. This imports all functions at once.
import detector from 'whats-the-type'; // note that whats-the-type is implemented as ESM and not in CJS

// use `getType` if you don't know what type to expect
import getType from 'whats-the-type/getType.js';

// use the `is<Type>` functions if you want to confirm if a value is of a specific type
import isString from 'whats-the-type/isString.js';
```

### getType()
`getType()` returns a string such as `null` and `undefined`, `Function`, `String`, etc. These values are case sensitive and mostly correspond to the constructor names. In other words, the function doesn't just return `object` for most types but is as precise as possible.

```javascript
// the detector always returns a string
getType(['a', 'b', 'c']); // 'Array'

// use the import name (e.g. 'detector') if you imported everything
detector.getType(123); // 'Number'

// plain objects are reported as 'PlainObject' rather than the more ambiguous 'Object'
getType({}); // 'PlainObject'

// custom classes are reported by their name
class MyClass extends Object {};
getType(new MyClass()); // 'MyClass'
```

### is&lt;Type&gt;()
`is<Type>()` functions return `true` if the value is of the specified type.

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
