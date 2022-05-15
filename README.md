# What's the type?

![](https://img.shields.io/github/license/draber/whats-the-type.svg)
![](https://img.shields.io/github/package-json/v/draber/whats-the-type.svg?)
![](https://img.shields.io/bundlephobia/min/whats-the-type.svg)

This module works around the drawbacks of `typeof` in JavaScript.

## What's new in v2?
Version 2 brings some improvements but also introduces a breaking change by going case sensitive. 

1. `getType()` now returns values in a case sensitive manner. Using lower case in v1 was meant to be more consistent with the behavior of `typeof`, but it made it impossible to distinguish between `SomeObject` and `someobject`. 
2. `getType({ foo: 'bar' })` now returns `PlainObject` rather than `object`. 
3. `getType(function* ())` now returns `GeneratorFunction` instead of `generator`. 
4. `isGeneratorFunction()` replaces `isGenerator()`; the latter has been kept as an alias for backwards compatibility, but is no longer part of this documentation.
5. `getType()` now works around the [issue with `Function.name`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#sect3) and returns the object type correctly. It will fall back to `Object` in the case of failure.

If you're using  the `is<Type>()` functions only, your code will keep on working without any changes, except for the now fixed `Function.name` issue [5]. As for `getType()` you'll need to update your code with regards to the case sensitivity [1].

Version 2.1 adds a number of `is<Type>()` functions: `isAsyncFunction()`, `isBlob()`, `isIterable()`, `isFile()`, `isPromise()`, `isWeakMap()` and `isWeakSet()`.

## Installation

```bash
npm install whats-the-type
```

## Usage
_What's the type_ comes with one generic detector, `getType()` and many `is<Type>()` functions:
- [isArray()](//whats-the-type.netlify.app/global.html#Array)                        
- [isAsyncFunction()](//whats-the-type.netlify.app/global.html#AsyncFunction)        
- [isBigInt()](//whats-the-type.netlify.app/global.html#BigInt)                      
- [isBlob()](//whats-the-type.netlify.app/global.html#Blob)                          
- [isBoolean()](//whats-the-type.netlify.app/global.html#Boolean)                    
- [isCollection()](//whats-the-type.netlify.app/global.html#Collection)              
- [isDate()](//whats-the-type.netlify.app/global.html#Date)                          
- [isError()](//whats-the-type.netlify.app/global.html#Error)                        
- [isFile()](//whats-the-type.netlify.app/global.html#File)                          
- [isFunction()](//whats-the-type.netlify.app/global.html#Function)                 
- [isGeneratorFunction()](//whats-the-type.netlify.app/global.html#GeneratorFunction)
- [isMap()](//whats-the-type.netlify.app/global.html#Map)                            
- [isNull()](//whats-the-type.netlify.app/global.html#Null)                          
- [isNumber()](//whats-the-type.netlify.app/global.html#Number)                      
- [isPlainObject()](//whats-the-type.netlify.app/global.html#PlainObject)            
- [isPromise()](//whats-the-type.netlify.app/global.html#Promise)                    
- [isRegExp()](//whats-the-type.netlify.app/global.html#RegExp)                      
- [isSet()](//whats-the-type.netlify.app/global.html#Set)                            
- [isString()](//whats-the-type.netlify.app/global.html#String)                      
- [isSymbol()](//whats-the-type.netlify.app/global.html#Symbol)                      
- [isUndefined()](//whats-the-type.netlify.app/global.html#Undefined)                
- [isWeakMap()](//whats-the-type.netlify.app/global.html#WeakMap)                    
- [isWeakSet()](//whats-the-type.netlify.app/global.html#WeakSet)                    
    
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
```


## Known limitations
This discussion on [Stack Overflow](https://stackoverflow.com/questions/332422/get-the-name-of-an-objects-type) highlights the caveats of the different detection methods. While it is a bit older and many of the problems aren't relevant anymore, it is still a good source of information. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#sect3) highlights another issue, but fortunately one `getType()` overcomes.

Still, there are some limitations `getType()` can't fix:
```javascript
// bad pattern!
function foo() {}
foo.prototype = {
    bar: 'baz'
};
getType(new foo()) // returns 'Object', not `foo`!

function bar() {}
bar.prototype.baz = 'quux';
getType(new bar()) // returns 'bar' correctly

function baz(){}
function quux(){}
quux.prototype = new baz();
getType(new quux()) // returns 'baz', not 'quux'!
```

## Resources

- Repository: [github.com/draber/whats-the-type](https://github.com/draber/whats-the-type) 
- Package: [npmjs.com/package/whats-the-type](https://npmjs.com/package/whats-the-type)
- Docs: [whats-the-type.netlify.app](https://whats-the-type.netlify.app/)
