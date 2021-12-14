
function foo(){
    console.log("hello from foo")
    return 3; 
}
let arr =[1,'string',foo,['another array']]; 

//Calling function from inside of array 
//console.log(arr[2]) ; //prints [Function: foo]
console.log(arr[2]()) //hello from foo 3 ; 

var array = [1,3,5,'seven']; 
console.log(array+` ${array.length}`);//1,3,5,seven 4
delete array[3];
console.log(array+` ${array.length}`);//1,3,5, 4 it leaves undefined holes in array ; the lenght is UNCHANGED 



let ar1= [1,2,3,4];
console.log(ar1.reverse());


