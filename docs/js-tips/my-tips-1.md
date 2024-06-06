---
sidebar_position: 5
sidebar_label: 'My Tips - 1'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Highlight from '@site/src/components/Highlight';

# My Tips - 1

## Logical operators

All values in Javascript are either `truthy` or `falsy`.

### Logical operators - Simplified

:::tip
`a && b` evaluates to the **first falsy** operand<br></br>
`a || b` evaluates to the **first truthy** operand<br></br>

```js
console.log(1&&2&&3&&13) // will result 13 (last value)
console.log(1||2||3||13) // will result 1(first value)
```
:::

### Truthy and Falsy Values

The following **6 values** are considered **falsy**

* `false` - boolean 
* `0`, `-0` & `0n` - number 0, number -0 & bigint 0  
* `''`, `""` & \`\` - empty string
* `null`
* `undefined`
* `NaN`

All other values are considered truthy!

* `[]`, `{}` & `' '` (white space string) are also considered to be truthy.

```js showLineNumbers
Boolean(false) // false
!!false // false
Boolean('false') // true
!!0 // false
Boolean('0') // true
Boolean('') // false
Boolean(' ') // true
!![] // true
Boolean({}) // true
!!NaN // false
Boolean(null) // false
```

## Arrow Functions vs Regular Functions

### Arrow Functions

* Introduced in `ES6` (ECMAScript 2015) as a more concise way to define functions.
* Syntax: `(parameters) => expression` or `(parameters) => { statements }`.
* Do not have their own this, `arguments`, `super`, or `new.target` bindings. Instead, they inherit these from the enclosing scope.
* Cannot be used as constructors (i.e., you cannot use `new` with arrow functions).
* Automatically return the result of the expression if there are no curly braces {} around the function body.

### Regular Functions

* Syntax: `function functionName(parameters) { statements }`.
* Have their own `this`, `arguments`, `super`, and `new.target` bindings.
* Can be used as constructors with the `new` keyword to create instances.

### `this` Keyword

* In regular function, `this` changes according to the way that function is invoked.
    * **Simple Invocation**: this equals the global object(`window`) or maybe `undefined` if you are using strict mode.
    * **Method Invocation**: this equals the object that owns the method..
    * **Constructor Invocation**: this equals the newly created instance.

```js
/* ******Simple Invocation****** */
function simpleInvocation() {
  console.log(this);
}

simpleInvocation(); // logs global object
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

/* ******Method Invocation****** */
const methodInvocation= {
  method() {
    console.log(this);
  }
};

methodInvocation.method(); // logs methodInvocation object
// {method: ƒ}

/* ******Constructor Invocation****** */
function constructorInvocation() {
  console.log(this);
}

new constructorInvocation(); // logs an instance of
// constructorInvocation {}
```

* Arrow functions don't have their own `this`, and they don’t redefine the value of `this` within the function.
:::tip
Regardless of how you execute arrow functions, `this` inside an arrow function always refers to `this` **from the outer context**. This means that `this` keyword is **lexically bound** in arrow functions.
:::


<Tabs>
  <TabItem value="arrow1" label="Sample 1" default>
  ```js
  // highlight-next-line
  var variable = 'Global Level Variable';

  let myObject = { 
    // highlight-next-line
    variable: 'Object Level Variable',

    arrowFunction: () => { 
      console.log(this.variable); 
    },

    regularFunction(){ 
    console.log(this.variable); 
    } 
  };

  myObject.arrowFunction(); 
  myObject.regularFunction();

  // Output
  Global Level Variable
  Object Level Variable
  ```
  </TabItem>
  <TabItem value="arrow2" label="Sample 2">
  ```js
  const myObject = {
    regularExample: function() {
      console.log("REGULAR: ", this);
    },
      
    arrowExample: () => {
      console.log("ARROW: ", this);
    }
  }
      
  myObject.regularExample();
  myObject.arrowExample();

  // Output
  // {regularExample: ƒ, arrowExample: ƒ}
  // ARROW:  Window {window: Window, self: Window, document: document, name: 'JS Bin Output ', location: Location, …}
  // in strict mode, for arrow function, the following will be the output
  // ARROW:  undefined
  ```
  </TabItem>
  <TabItem value="arrow3" label="Sample 3">
  ```js
  const obj = {
    name: 'deeecode',
    age: 200,

    // highlight-start
    print: function() {
      console.log(this);

      function print2() {
        console.log(this);
      }
      
      print2();
    },
    // highlight-end

    log: () => {
      console.log(this);
    }
  }

  obj.print();
  // {name: 'deeecode', age: 200, print: ƒ}
  // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

  // In this case, print is called by `obj` (`obj.print()`) but no object calls `print2` (`print2()`). 
  // So the `this` in `print2` would reference the `window` object by default.

  obj.log();
  // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
  ```
  </TabItem>
  <TabItem value="arrow4" label="Sample 4">
  ```js
  class Animal {
    constructor(name, numOfLegs) {
      this.name = name;
      this.numOfLegs = numOfLegs;
    }
    
    sayName() {
      console.log(`My name is ${this.name}`);
    }
    
    sayAboutMyLegs = () => {
      console.log(`I've ${this.numOfLegs} leg(s)`);
    }
  }


  const Dog = new Animal('Bingo', 4);

  Dog.sayName(); // My name is Bingo
  Dog.sayAboutMyLegs(); // I've 4 leg(s)
  ```
  </TabItem>
  <TabItem value="arrow5" label="Error">
  ```js
  class Animal {
    constructor = (name, numOfLegs) => {
      this.name = name;
      this.numOfLegs = numOfLegs;
    }
    
    sayName() {
      console.log(`My name is ${this.name}`);
    }
  }

  // Uncaught SyntaxError: Classes may not have a field named 'constructor'
  ```
  </TabItem>
</Tabs>


```js
const obj = {
  name: 'deeecode',
  age: 200,
  // highlight-start
  print: function() {
    const print2 = () => {
      console.log(this);
    }
    
    print2();
  }
  // highlight-end
}

obj.print();
// {name: 'deeecode', age: 200, print: ƒ}
```

Here, we have `print` as a normal function which means a `this` variable is automatically created in it. Then we have `print2` which is an arrow function.

Since `print2` is an arrow function, it doesn't create its own `this` variable. Therefore, any reference to `this` would point to what the value of `this` was before the function was created. In this case where `obj` calls `print`, `this` was pointing to `obj` before `print2` was created. As you can see in the results, by logging `this` from `print2`, `obj` is the result.

### Arguments Object

In regular JavaScript functions, `arguments` object(array-like) can be used to access the passed arguments when the function is invoked. But it's not available in arrow function.



<Tabs>
  <TabItem value="es5" label="ES5" default>
  ```js
  function print() {
    // highlight-next-line
    console.log(arguments);

    for (let el of arguments)
      console.log(el);
  }

  print('hello', 123, true);
  // Arguments(3) ['hello', 123, true, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  // hello
  // 123
  // true
  ```
  </TabItem>
  <TabItem value="es6" label="ES6">
  ```js
  // highlight-next-line
  const print = (...args) => {
    console.log(args)
  }

  print('hello', 123, true);
  // ['hello', 123, true]
  // We can use `spread operator` at arrow function to achieve
  ```
  </TabItem>
</Tabs>

### avoiding `const self = this` using Arrow function

<Tabs>
  <TabItem value="self1" label="self - Sample 1" default>
  ```js
  function dummyFn()
  {
    // highlight-start
    const self = this;
    this.myName = 'dummyFn';
    // highlight-end
    console.log(this); // dummyFn {myName: 'dummyFn'}

    setTimeout( function()
    {
      console.log(this); // Window {window: Window, self: Window, document: document, …}
      // highlight-next-line
      console.log('Hi, from - ' + self.myName); // Hi, from - dummyFn
    }, 1000 );       
  }

  // highlight-next-line
  new dummyFn();
  ```
  </TabItem>
  <TabItem value="arrow1" label="Arrow - Sample 1">
  ```js
  function dummyFn()
  {
    // highlight-next-line
    this.myName = 'dummyFn';
    console.log(this); // dummyFn {myName: 'dummyFn'}

    setTimeout(() => {
      console.log(this); // dummyFn {myName: 'dummyFn'}
      // highlight-next-line
      console.log('Hi, from - ' + this.myName); // Hi, from - dummyFn
    },1000 );       
  }

  // highlight-next-line
  new dummyFn();
  ```
  </TabItem>
  <TabItem value="self2" label="self - Sample 2" default>
  ```js
  function dummyFn()
  {
    // highlight-next-line
    this.myName = 'dummyFn';
    console.log(this); // Window {window: Window,..., myName: "dummyFn", …}

    setTimeout( function()
    {
      console.log(this); // Window {window: Window,..., myName: "dummyFn", …}
      // highlight-next-line
      console.log('Hi, from - ' + this.myName);
    }, 1000 );       
  }

  // highlight-next-line
  dummyFn();
  ```
  </TabItem>
  <TabItem value="arrow2" label="Arrow - Sample 2">
  ```js
  function dummyFn()
  {
    // highlight-next-line
    this.myName = 'dummyFn';
    console.log(this); // Window {window: Window,..., myName: "dummyFn", …}

    setTimeout(() => {
      console.log(this); // Window {window: Window,..., myName: "dummyFn", …}
      // highlight-next-line
      console.log('Hi, from - ' + this.myName); // Hi, from - dummyFn
    },1000 );       
  }

  // highlight-next-line
  dummyFn();
  ```
  </TabItem>
</Tabs>

If we want to do like the above(`self - Sample 1` tab), but want to avoid the usage of a variable like `self` by using `call()` or `apply()` instead. soon we can realize that we can't do it. Because `setTimeout()` is responsible for the invocation of the `lambda`, making it impossible for us to leverage these alternate invocation styles. If we still manage it, then we would have ended up creating some intermediary variable to hold a reference to the object. The only alternate option is using arrow function.

A **JavaScript Lambda Function** is an anonymous function written without a name or a function definition. These functions are often referred to as **arrow function** because they use the **fat arrow** (=>) syntax to define the function.

### Understanding Call, Bind and Apply

* The `bind()` Method

<Highlight color='#C0C0C0'>Syntax</Highlight>:
```js
bind(thisArg)
bind(thisArg, arg1, ...argN)
```

```js
const car = { 
  registrationNumber: 'GA12345',
  brand: 'Toyota',

  displayDetails: function(){
    console.log(this.registrationNumber + ' ' + this.brand);
  }
}

car.displayDetails(); // GA12345 Toyota

// highlight-next-line
const myCarDetails =  car.displayDetails;
myCarDetails(); // undefined undefined
```

Well, this(`myCarDetails();`) won’t work, as the `this` will be now **assigned to the global context** which doesn’t have neither the registrationNumber nor the brand property.

```js
const myCarDetails = car.displayDetails.bind(car); 
myCarDetails(); // GA12345 Toyota
```
The `bind()` method **creates a new function** where `this` *refers to the parameter in the **parenthesis*** in the above case `car`. This way the `bind()` method enables calling a function with a specified `this` value.

What if we would like to pass a parameter to the `displayDetails` function? We can use the bind method again.

```js
const car = { 
  registrationNumber: 'GA12345',
  brand: 'Toyota',

  displayDetails: function(ownerName){
    console.log(ownerName + ', this is your car: ' + this.registrationNumber + ' ' + this.brand);
  }
}

// highlight-next-line
const myCarDetails = car.displayDetails.bind(car, 'Vivian');
myCarDetails(); // Vivian, this is your car: GA12345 Toyota
```

* The `call()` Method

The `call` method sets the **`this` inside the function and ***immediately*** executes that function**.

:::info
The difference between `call()` and `bind()` is that the `call()` **sets the `this` keyword and executes the function immediately** and it **does not create a new copy of the function**, while the `bind()` creates a copy of that function(say, `myCarDetails()`) and sets the `this` keyword.
:::

```js
car.displayDetails.bind(car, 'Vivian');
// the above code'll create a new function as shown in the output
/*
ƒ (){
    console.log(this.registrationNumber + ' ' + this.brand);
  }
*/
```

<Highlight color='#C0C0C0'>Syntax</Highlight>:
```js
call(thisArg)
call(thisArg, arg1,...argN)
```

```js
displayDetails.call(car, 'Vivian'); 
// Vivian, this is your car: GA12345 Toyota
```

* The `apply()` Method

<Highlight color='#C0C0C0'>Syntax</Highlight>:
```js
apply(thisArg)
apply(thisArg, argsArray)
```

```js
displayDetails.apply(car, ['Vivian']); 
// Vivian, this is your car: GA12345 Toyota
```

:::info
Note that when using the `apply()` function the **parameter must be placed in an array**. `call()` accepts **both an array of parameters and a parameter itself**. Both are great tools for borrowing functions in JavaScript.
:::

```js
function greeting() {
  console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
}

const john = {
  name: 'John',
  age: 24,
};

const jane = {
  name: 'Jane',
  age: 22,
};

const bindFn = greeting.bind(jane);
bindFn(); // Hi, I am Jane and I am 22 years old

greeting.call(john); // Hi, I am John and I am 24 years old
greeting.apply(jane); // Hi, I am Jane and I am 22 years old
```

Real time use case for `bind` as below

```js
const counter = {
  count: 0,

  incrementCounter: function() {
    console.log(this);
    this.count++;
  }
}

document.querySelector('.btn')
  .addEventListener('click', counter.incrementCounter.bind(counter));
```

**we cannot use `bind`, `call`, and `apply` in arrow functions**. They are lexically scoped, which means that they use the `this` value of the surrounding context. This is in contrast to regular function expressions, which create their own this value. When these methods(`bind`, `call`, and `apply`) are called on an arrow function, they simply ignore the thisArg parameter and pass in the this value of the surrounding context.

you can **re-bind arrow functions**, but you just can't change the meaning of `this` in arrow function

```js
((a, b, c) => {
  console.info(a, b, c) // 1, 2, 3
// highlight-next-line  
}).bind(undefined, 1, 2, 3)();
```

### Resources

1. [My Favorite JavaScript Tips and Tricks](https://blog.greenroots.info/my-favorite-javascript-tips-and-tricks)
2. [Almighty `this`, Demystified](https://dillionmegida.com/p/this-demystified/)
