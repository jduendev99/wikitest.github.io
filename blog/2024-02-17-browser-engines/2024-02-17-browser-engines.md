---
slug: browser-engines
title: Browser Engines - Digest
authors: anand
tags: [browser,v8]
---

A JavaScript engine and a render engine are both important components of a web browser. However, they have different functions.

### JavaScript Engine

A JavaScript engine is responsible for executing JavaScript code. JavaScript is a programming language that is used to add interactivity to web pages. When a web page contains JavaScript code, the browser's JavaScript engine is responsible for **parsing and executing JS code**. It **uses JIT compilation** for improved performance.

### Render Engine

A render(rendering) engine is responsible for displaying the content of a web page on the screen. This includes the HTML, CSS, and JavaScript code. The render engine takes the code and **converts it into a visual representation** that can be displayed on the screen. In browsers, it **works in conjunction with the JavaScript engine via the DOM**(Document Object Model). A rendering engine is also known as a browser engine or layout engine. A browser engine is a core software component of every major web browser.

<!--truncate-->

| **Browser**          | **Browser Engine** | **JS Engine**         |
|----------------------|--------------------|-----------------------|
| Google Chrome 28+    | Blink              | V8                    |
| Mozilla Firefox      | Gecko              | SpiderMonkey          |
| Apple Safari         | WebKit             | JavaScriptCore(Nitro) |
| UC Browser (Legacy)  | U3 Engine          | Not known             |
| Internet Explorer 11 | Trident            | Chakra                |
| MS Edge 18 (Legacy)  | EdgeHTML           | Chakra                |
| Opera 14 (Legacy)    | Presto             | Futhark & Carakan     |
| Chromium Based       | Blink              | V8                    |


* Edge 79+, Opera 15+, Brave, Vivaldi, etc are some example for chromium based browsers.
* **Blink** is a **fork** of the WebCore component of **WebKit**, which was originally a fork of the KHTML and KJS libraries from KDE.
* **WebRender** is a **component of Gecko**, the browser engine and is a GPU-based **2D rendering engine**.

### The Just-in-Time (JIT) paradigm

The most common way of transforming the code is by performing ahead-of-time(**AOT**) compilation. It works exactly as it sounds: the code is transformed into machine code before the execution of your program during the compilation stage. This approach is used by many programming languages such as C++, Java, and others.

To transform the code faster and more effectively for dynamic languages(JS), a new approach was created called Just-in-Time (JIT) compilation. It combines the best from interpretation and compilation. **V8 uses an interpreter** called [**Ignition**](https://github.com/v8/v8/blob/master/src/interpreter/interpreter.h). Initially, it takes an abstract syntax tree and generates byte code.

![chicken or egg](./chromium-browser.png)

### Sandbox

A sandbox is used to **execute JavaScript in a browser**. A sandbox is a security mechanism that isolates code from the rest of the system. This means that JavaScript code running in a sandbox cannot access the user's files or other resources on the computer.

Browsers use sandboxes to protect users from malicious JavaScript code. For example, if a website contains malicious JavaScript code, the sandbox will **prevent the code from accessing the user's files or other resources**.

Sandboxes are also used to improve the performance of browsers. By **isolating JavaScript code from the rest of the system**, browsers can execute the code more efficiently.

There are a number of different ways to sandbox JavaScript code in a browser. One common method is to use an iframe. An iframe is a HTML element that creates a sandboxed environment for executing JavaScript code.

Another common method for sandboxing JavaScript code is to use a web worker. A web worker is a JavaScript script that runs in the background, separate from the main thread of the browser. This allows the JavaScript code to run without affecting the performance of the browser.

### JavaScript vs. Rendering Engine

* JavaScript engine executes code, while the rendering engine is responsible for displaying the web pages.
* Each browser uses its own JavaScript and rendering engine.
* JavaScript engine runs JavaScript code, while the rendering engine interprets HTML, XML, CSS, etc.

### How code is parsed & compiled

JavaScript Engines & What They Do

![JavaScript Engines](js-engines.png)

### Sources
1. [JavaScript V8 Engine Explained - hacker noon](https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef)
1. [How JavaScript Works: Under the Hood of the V8 Engine](https://www.freecodecamp.org/news/javascript-under-the-hood-v8/)
1. [What are Web Standards and how does Web Browser work?](https://lyamkin.com/blog/what-are-web-standards-and-how-does-web-browser-work/)
1. [Browser Engines: The Crux Of Cross Browser Compatibility](https://www.lambdatest.com/blog/browser-engines-the-crux-of-cross-browser-compatibility/)
1. [Browser Engine and Types of Browser Engines](https://codinglap.com/browser-engine-and-types-of-browser-engines/)
