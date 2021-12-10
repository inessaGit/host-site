
//using capital P to mark this method as a custom constructor 
function Person(firstName,lastName,age){
    //Object.create(null) method can be very useful, because it allows you to choose the prototype object for the object
    // you want to create, without having to define a constructor function.
    /*Getters and setters can also be added to an object at any time 
    after creation using the Object.defineProperties() method. 
    This method's first parameter is the object on which you want to define the getter or setter.
     The second parameter is an object whose property names are the getter or setter names, 
     and whose property values are objects for defining the getter or setter functions. 
     Here's an example that defines the same getter and setter used in the previous example:
BY DEFAULT properties created via .defineProperties are enumerable=false, 

By default, values added using Object.defineProperty() 
are immutable and not enumerable.
    */
let  person = Object.create(null)
Object.defineProperties(person, {
'firstName':{
      value:firstName,
      writable:true,
      enumerable:true,
      configurable:true
},
'lastName':{
    value:lastName,
    writable:true,
    enumerable:true,
    configurable:true
},
'age':{
    value:age,
    writable:true,
    configurable:true,
    enumerable:true
}
})
return person;
};

let person1=Person("test");
console.log(`person ${person1}`); //throws error TypeError: Cannot convert object to primitive value

//console.log(person1)

