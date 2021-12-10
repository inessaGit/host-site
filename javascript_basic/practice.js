
//create literal Array 
let myarray = [];
let value =5; 
let count =3; 
myarray=Array(count).fill(value); 

let myarray2 = new Array(); 
myarray2= myarray2.fill (53); //myarray2 empty 
// myarray2= myarray2(5).fill(53) // throws error 

let arrayLength=3;
let myarray3 = new Array(arrayLength);
myarray3.push(1,2,3,5)
console.log (`myarray3 ${myarray3} myarray length ${arrayLength}`);
console.log(myarray3.length);  //actual length of array 

myarray2 = Array(count).fill(53);
console.log(`myarray: ${myarray} myarray2: ${myarray2}`);

myarray2.fill(32,2) //value, start from position 2
console.log(`myarray: ${myarray} myarray2: ${myarray2}`);



let money = new Array();
Array(4).fill(31); 
console.log(money); // returns EMPTY array because fill() is non destructive
 
money = Array(4).fill(36);//returns modified array wich is being assigned to the old ref variable
console.log (`money ${money}`);


//use spread operator to copy an old array and add element 
let moneyPerMonth = [32,...money]; 
console.log(`moneyPerMonth ${moneyPerMonth}`); 

moneyPerMonth.unshift(20);
console.log(`moneyPerMonth ${moneyPerMonth}`); 

money =[2,3,4];
console.log (`money before slice ${money}`);
money= moneyPerMonth.slice();
console.log (`money after slice ${money}`);//20,32,36,36,36,36

money.shift();//removes the FIRST element and returns removed element 
console.log (`money after money.shift() ${money}`)
console.log (`money.shift() ${money.shift()}`) //returns 32 which is the removed element 
console.log (`money after money.shift() ${money}`)

let mergedMoney=[...money, ...moneyPerMonth];
console.log (`merged money + moneyPerMonth ${mergedMoney}`);

mergedMoney.unshift(8,9.5,11) //append destructively 3 elements to array 
console.log (`merged money after unshift ${mergedMoney}`);
mergedMoney.shift(); //removes first element and returns removed element 

mergedMoney=[1,3,5,8,9];
console.log (`merged money after reassigment ${mergedMoney}`);

//remove last two elements
console.log (mergedMoney.splice(1,3,0.88)) //start, deleteCount, insertItem
//will print to console an array of REMOVED elements 

console.log(mergedMoney); 

const array1 = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
