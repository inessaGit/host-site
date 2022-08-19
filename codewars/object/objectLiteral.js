/*
These two expressions have the same value: 
object.property =>using dot and identifier 
object["property"] => using bracket notation; looks like array but indexed by strings instead of nums

JavaScript objects are associative arrays. 
Using dot : 
When you use the . operator to access a property of an object, 
the name of the property is expressed as an identifier. 
Identifiers must be typed literally into your JavaScript program; 
they are not a datatype, so they cannot be manipulated by the program.

Using bracket notation more flexible: 
the name of the property is expressed as a string. 
Strings are JavaScript datatypes, so they can be manipulated and created while a program is running.
*/



let book = {
    "main title": "JavaScript", 
    "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
    for: "all audiences",
    author: { 
            firstname: "David",
            surname: "Flanagan"
        }
    };

    //ACCESS value of the property 
    let author = book.author;
    let surname= author.surname;
    let title = book["main title"];

    //CREATE or SET Property or CHANGE Property
    book.edition = 7;
    console.table(book)
    book["main title"]="ECMAScript";
    console.log(book)

    //DELETE Property
    delete book.author; 
    console.log(book)

      //PROPERTY ACCESS ERRORS: A concise and idiomatic alternative to get surname or null or undefined
surname = book && book.author && book.author.surname;

let middlename = book?.author?.middlename;
console.log(`middlename=${middlename}`)

//let middle = book.author.middle.length; //error Cannot read properties of undefined (reading 'length')
console.log(`middle=${middle}`)

    

  