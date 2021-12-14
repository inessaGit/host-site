/*

https://www.hackerrank.com/challenges/js10-count-objects/problem?isFullScreen=true

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

*/
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties
 *  'x' and 'y'
 * 
 * - set counter =0; 
 *  array.length == number of objects 
 * - - loop over array and compare if match then increment counter
 */
function getCount(objects) {
    let counter =0;

    objects.forEach(function(o){
     if (o.x===o.y){
         counter+=1;
     }

    })
    console.log(counter); 
}

function loopOverObj(){

    let obj = {x:1,y:3,z:8}; 
    let obj2={x:0, y:3, z:8};
    let objects=[]; 
   objects.push(obj,obj2); //works 
      // objects=[...obj,...obj2]; //throws object is not iterable ??
console.log(objects); 
   // let obj2={x:0, y:3, z:5,d:8};

   /*
   // Arrow function
forEach((element) => { ... } )
forEach((element, index) => { ... } )
forEach((element, index, array) => { ... } )

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function(element) { ... })
forEach(function(element, index) { ... })
forEach(function(element, index, array){ ... })
forEach(function(element, index, array) { ... }, thisArg)
   */

//using // Inline callback function forEach(function(element) { ... })

let counter=0;
   objects.forEach(function(o){
       if (o.x===o.y){
           counter+=1;
       }

   })

}

loopOverObj();