
console.log("hello" || "world") //hello 

/*
Logical AND (&&) evaluates operands from left to right, 
returning immediately with the value of the first falsy operand 
it encounters; if all values are truthy, t
he value of the last operand is returned.
*/
console.log("foo" && "bar") //bar
console.log(2&&3) //3 
console.log(false&&true) //false
console.log(5&&false&&"hello")//false

var foo = 10 + '20';
console.log(foo);   //Result '1020' because its string concat operation

console.log(0.1+0.2) //Numbers in JavaScript are all treated with floating point precision 
//0.30000000000000004


console.log(0.1+0.2==0.3) //false lol 


/*
Create a for loop that iterates up to 100 
while outputting "fizz" at multiples of 3,
"buzz" at multiples of 5 
"fizzbuzz" at multiples of 3 and 5
*/
function test(){
    for (let i=1;i<101;i++){

        if (i%15===0){
           console.log(i+ " fizzbuzz")
        }
       else if (Number.isInteger(i/3)){
           console.log(i+" fizz ")
       }
        else if(Number.isInteger(i/5)){
            console.log(i+ " buzz")
        }
    }
}
