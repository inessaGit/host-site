/*
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
JSON is a text-based data format following JavaScript object syntax
JSON exists as a string — useful when you want to transmit data across a network.
 It needs to be converted to a native JavaScript object when you want to access the data.
A JSON string can be stored in its own file, which is basically just a text file with an extension of .json
, and a MIME type of application/json.


  Converting a string to an object = deserialization,
  converting an object to a string = serialization.
*/

const url = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL/toString");
let json = url.toJSON(); // should return the URL as a string
console.log(json); 