
/*
Modulo calc could be expressed as: 

a % b = a - floor(a / b) * b
Case1 :  when a<b then a%b =a
Case 2: a>b then  a - floor(a / b) * b
*/

function moduloCalc(n1,n2){
 
 let res =n1%n2; 
 console.log(`modulo of ${n1}%${n2} =${res}`)
 return n1%n2;
}

moduloCalc(2,2);
moduloCalc(5,2)
moduloCalc(3,5) //3
moduloCalc(2,5) //2
moduloCalc(4,5) //4 
moduloCalc(5,7) //5 
moduloCalc(-3,5) //-3
moduloCalc(-3,6) //-3 
moduloCalc(-3,-5) //-3 