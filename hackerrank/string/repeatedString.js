/*

https://www.hackerrank.com/challenges/repeated-string
There is a string, , of lowercase English letters that is repeated infinitely 
many times. 
Given an integer, , find and print the number of letter a's in the first  letters 
of the infinite string.

Example
-aba , 10 
- exp output 7;  abaabaabaa lenght =10 has 7 occurences of letter 'a'

Case 1: n=1 
A. str has 0 a return 0
B. str has 1 a return 1
Case 2: n>1 
 A.  str has  0 a return 0
 B. str has some a
 --- B1.the string.length<that n -> slice string and loop over to count num of a
 (because size of str 1<=|s|<=100)
 --- B2. the string.length >n more than n ->  
       -- IF miltiplier =n/ string.length ; if multiplier EVEN number then we
       can calculate num of a' in the original string and then just multiply it by multiplier
       --If multiplier= n/string.length; if multipler ODD numer then need to find and store 
       remainder of division .
       E.g string aba, n=4 

*/

function repeatedString(s, n) {
    let g_counter =0;
    if (n==1){
        if (s.slice(0,1).includes('a')==true)return 1;
        return 0; 
    }
   else if (n<s.length){
            //first slice then count 
            s=s.slice(0,n);
            g_counter=countA(s);
        }        
    else if (n==s.length){
        g_counter=countA(s); //no need to concat or slice; 
    }
    else if(n>s.length)   {
        //first count then multiply if string has 0 'a' return 0
        let result=countA(s) ;
        if (result==0){
            g_counter=0;
        }
        else{
            let multiplier =n/s.length;  
            if (Number.isInteger(multiplier)==true){
             g_counter=result*multiplier;
            }
            else {//aba n=10
            let remainder =Math.floor(n%s.length); 
         //   console.log(`remainder=${remainder}`); 
            let multiplier = Math.floor(n/s.length);
         //  console.log(`multiplier=${multiplier}`); 

//need to find how many 'a' in substring (0,remainder)
         let substr=s.slice(0,remainder);
       //  console.log(`substr=${substr}`);

         substr=countA(substr);
         g_counter=result*multiplier+substr;
            }
        }
       // console.log(g_counter)
        return g_counter;
    }  
    function countA(string){
        let counter=0;
        for (let el of string){
            if (el=='a'){
                counter++
            }
        }
        return counter;
    }

}

let t="gfcaaaecbg"; //10 chars
let n=547602; //exp 164280 actual: 164282
//repeatedString('a',1000000000000);
repeatedString(t,n)

function test2(){
    console.log('hello'.slice(0,5));
    console.log(Number.isInteger(5)) //true 
    console.log(Number.isInteger(5.67)) //false 
    console.log(Number.isInteger("5.67")) //false 
    console.log(Number.isInteger("5")) //false 
    console.log(Number.isInteger(-5)) //true 
    
    console.log(8%3) //2 remainder 
     console.log(Math.floor(8/3))
    
     let s="aba";
     let original=s;
     let modified ="";
     for (let i=0;i<3;i++){
         
        s+=original; //concat
        console.log(`i=${i} s=${s}||`)
    }
    
    console.log("aba".repeat(3));
}


