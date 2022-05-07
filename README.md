# What's the type?

![](https://img.shields.io/github/license/draber/whats-the-type.svg)
![](https://img.shields.io/github/package-json/v/draber/whats-the-type.svg?)
![](https://img.shields.io/bundlephobia/min/whats-the-type.svg)

This module works around the drawbacks of `typeof` in JavaScript.

## Installation

```bash
npm install whats-the-type
```

## Usage
_What's the type_ comes with one detector, `getType()` and 16 confirmation functions, `isArray()`, `isBigint()`, `isBoolean()`, `isDate()`, `isError()`, `isFunction()`, `isGenerator()`, `isMap()`, `isNull()`, `isNumber()`, `isPlainObject()`, `isRegexp()`, `isSet()`, `isString()`, `isSymbol()` and `isUndefined()`.
    
```javascript
// import everything if you have a bunch of different types to check
import detector from 'whats-the-type'; // note that whats-the-type is implemented as ESM and not in CJS

// use `getType` if you don't know what type to expect
import getType from 'whats-the-type/get-type.js';

// use the `isType` functions if you want to confirm if a value is of a specific type
import isString from 'whats-the-type/isString.js';
```

### getType()
```javascript
// the detector always returns a string in lower case
getType(['a', 'b', 'c']); // 'array'

// use the import name if you imported everything
detector.getType(123); // 'number'

// generator functions are reported as 'generator'
function* myGenerator() {}; // 'generator'

// plain objects are reported as 'object'
getType({}); // 'object'

// custom classes are reported by their name
class MyClass extends Object {};
getType(new MyClass()); // 'myclass'
```

### isType()
```javascript
isString('a'); // true
isString(123); // false

// Two of the function names are probaly not what you expect
// isPlainObject() is a pretty established name and more specific than isObject()
isPlainObject({}); // true

// Generator functions return Generators, hence the name
isGenerator(function* () {}); // true
```
