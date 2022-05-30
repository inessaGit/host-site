/*
https://www.hackerrank.com/challenges/three-month-preparation-kit-separate-the-numbers/problem?isFullScreen=true

A numeric string, , is beautiful if it can be split into a sequence of two or more positive integers: 
- i.e., each element in the sequence is  more than the previous element ; a[i]<a[i+1]
AND
- no leading 0 e.g s=10203 = {1,02,03} not beautiful because it has 0 
AND
-
 If it is beautiful, print YES x, where x is the first number of the increasing sequence. 
 If there are multiple such values of , choose the smallest.
  Otherwise, print NO.


  function separateNumbers(s) {
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        const start = s.slice(0, i)
        let num = BigInt(start)
        let built = ''
        while (built.length < s.length) built += num++
        if (built === s) return console.log('YES', start)
    }
    console.log('NO')
}


*/

function separateNumbers(s) {
    let res ='NO'
    let n = s.length; 
    let nums =s.split('').map((el)=>{return parseInt(el)});
    console.log(nums); //array of numbers 

    if(s.includes('0')){
         for (let i=0;i<n;i++){

         }
    }
    for(let i=1;i<n;i++){
     //check if increasing means nums[i]-nums[i-1]=1 
      if(nums[i]-nums[i-1]!=1){// e.g 2,1 ,
          console.log(res);
          console.log(`==   nums[i]-nums[i-1]!=1`)
      }
      

    }
    
}
// "1230" no 10203 no "1234" yes 
let s='1234' //exp YES 1 
let s2="91011" //YES 9
let s3 ="99100" //YES 99
let s4="101103" //NO
let s5="010203" //NO
let s6="13" //NO 
let s7="1"//NO 

separateNumbers(s) ;
separateNumbers(s2);
separateNumbers(s3);
separateNumbers(s4);
separateNumbers(s5);
separateNumbers(s6);
separateNumbers(s7);