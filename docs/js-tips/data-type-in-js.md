---
sidebar_position: 1
sidebar_label: 'Data Types in JS'
---

# Data Types in JavaScript

In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. There are **7 primitive** data types:

`string`, `number`, `bigint`, `boolean`, `undefined`, `symbol` and `null`

All primitives are immutable. It is important not to confuse a primitive itself with a variable assigned a primitive value. It is important not to confuse a primitive itself with a variable assigned a primitive value.

:::tip
All **primitive** types, **except `null`**, can be tested by the `typeof` operator, because `typeof null` returns `object`, so one has to use `=== null` to test for `null`.
:::

All primitive types, except `null` and `undefined`, have their corresponding **object wrapper** types, which provide useful methods for working with the primitive values. For example, the **`Number` object** (object wrapper of `number`) provides methods like `toExponential()`. When a property is accessed on a primitive value, JavaScript automatically wraps the value into the corresponding wrapper object and accesses the property on the object instead.  However, accessing a property on null or undefined throws a TypeError exception. 

| **Type**  | **`typeof` return value** | **Object wrapper** |
|:---------:|:-------------------------:|:------------------:|
| null      | object                    | N/A                |
| undefined | undefined                 | N/A                |
| number    | number                    | Number             |
| bigint    | bigint                    | BigInt             |
| boolean   | boolean                   | Boolean            |
| string    | string                    | String             |
| symbol    | symbol                    | Symbol             |

* The `typeof` operator in JavaScript returns a **string** indicating the type of the operand's value. All **primitive types**, except `null` will return the same data type. Others will return either `object` (`Array`, and `Date` included) and `function`.

* Note that the typeof operator returns `object` for **arrays**, **null** and **functions**. This is because arrays are objects in JavaScript, and `null` and `function` are **special types of objects**.

Here are some examples of how to use the `typeof` operator:

```js
typeof 1; // returns 'number'
typeof 37n; // returns 'bigint'
typeof 'hello'; // returns 'string'
typeof true; // returns 'boolean'
typeof undefined; // returns 'undefined'
typeof null; // returns 'object'
typeof []; // returns 'object'
typeof function() {}; // returns 'function'
typeof Date; // returns 'function'
typeof new Date();  // returns 'object'
typeof Object; // returns 'function'
typeof new Object(); // returns 'object'
```

`function` is a **Function object** and `object`(with small cap) is an **Object object**. So both are object only. `Object` (with capital 'O') is just a constructor function.

A function is an instance of Function, so that makes a function an object. i.e, `Function` constructs an `object` which is a function.