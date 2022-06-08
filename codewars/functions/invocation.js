/*
The value that this stores is the current execution context of the JavaScript program.
Thus, when used inside a function this‘s value will change depending on 
- how that function is defined, 
- how it is invoked
 - and the default execution context.
========

Global Context: 
A line of code written outside a function is said to belong to the global context and 
the value of this in this global context is the same as the global object.
if you opened up your browser console and typed the following lines into it, and press return/enter: 
console.log(this)
You would see the Window object being logged into the console.
This is because the global object, in a browser run-time such as Chrome’s run-time, is the Window object. 

===============
In JavaScript, you can call a function in the following ways:
Function invocation
Method invocation
Constructor invocation
Indirect invocation
Each function invocation defines its own context. Therefore, the this behaves differently.

1) Simple function invocation
in non strict mode the this references the global object when the function is called as follows:

*/

//simple function invocation
function show() {
    console.log(this === window); // true
 }
 //same as window.show();
 show();//this references the global object, which is the window on the web browser and global on Node.js.