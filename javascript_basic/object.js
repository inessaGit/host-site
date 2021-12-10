

const object1 = {};
Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});
console.log(object1.property1);
// expected output: 42

//Create object with custom constructor 
function Person(firstName, lastName, age){
this.firstName = firstName;
this.lastName=lastName; 
this.age=age; 
}
const personInessa =new Person("inessa", "", 30)
console.log(`personInessa ${personInessa}`)

let person1= {...personInessa};
console.log (`person1 ${person1}`);


function playWithObject(){
    //create Object 
let objectResume = new Object();

// calls the valueOf method to convert an object to a primitive value. 
console.log(objectResume.valueOf); //
console.log(typeof objectResume); //check what type of data 

//add property using dot 
objectResume.title = "Software Engineer"; //string
objectResume.experience =new Object();
objectResume.phone =6509221122; //int 
objectResume.hasEducation = false;

console.log(objectResume);
console.log (typeof objectResume.phone);

let objectResume1 = { }; 
//add property using [] 
objectResume["email"]="";
objectResume["summary"]="this is summary";
console.log(objectResume);

//change property value using dot notation 
objectResume.email="new email";
console.log(objectResume);

//change property value using []
console.log (typeof objectResume.phone); //returns number
objectResume.phone="new phone" //now type changed to string 
console.log(objectResume);
console.log (typeof objectResume.phone);

console.log(typeof undefined); //returns undefined 
console.log (typeof null); // returns object


objectResume["socialMedia"]={linkedIn:"linkedInUrl", github:"github url"};
objectResume.newProperty="some random stuff";
objectResume.newProperty2="some random stuff again ";
objectResume.newProperty3="some random stuff again 3";

console.log (objectResume);

//delete property using delete operator and dot and braket notation 
delete objectResume.newProperty;
delete objectResume['newProperty2'];
console.log (objectResume);

//create COPY using spread operator 
let copyObjectResume ={...objectResume};
console.log(copyObjectResume);
//copy object using slice() method ; works only with ARRAY 
//let copyObjectResume2 =objectResume.slice();

}

//playWithObject(); 