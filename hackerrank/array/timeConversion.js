/*
https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem
*/
function timeConversion(s) {
let n = s.length;
let res=s.slice(0,n-2); //07:05:45 removing AM/PM
if (s.startsWith("12")){
    return s.endsWith("PM")? res: res=res.replace("12","00");
}
let hr=parseInt(s.slice(0,3)); //store hr as numb (slice first two chars )
hr<10? hr="0"+hr : hr=hr; 
console.log(`hr=${hr}`);

res =res.slice(2,n-2); 
return s.endsWith("AM")? res=hr+res : res=parseInt(hr)+12+res ;
}

let s ="06:40:03AM";
let s1= "11:59:59PM" ; //exp 23:59:59
let s2="12:05:39AM" ; //exp 00:05:39
let s3="04:59:59AM" ; //exp 04:59:59

console.log(timeConversion(s1)); //exp 06:40:03
console.log(timeConversion(s2)); 
console.log(timeConversion(s3))

