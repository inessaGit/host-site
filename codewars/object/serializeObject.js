/*
Object serialization is the process of converting an object’s state to a string 
from which it can later be restored. 

Functions JSON.stringify() and JSON.parse() serialize and restore JavaScript objects. 
JSON data interchange format. 
*/

let o = {x: 1, 
        y: {z: [false, null, ""]}}; // Define a test object
let s = JSON.stringify(o); // s == '{"x":1,"y":{"z": [false,null,""]}}'
let p = JSON.parse(s); // p == {x: 1, y: {z: [false, null, ""]}}