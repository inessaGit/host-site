/*

https://www.hackerrank.com/challenges/three-month-preparation-kit-mars-exploration/problem?isFullScreen=true

- exp number of SOS = s.length/3
- act number of SOS = s.matchAll('SOS')

Note:
if(!value) means if it is not undefined, null or empty; 
- value !=null exactly not null 

*/
function marsExploration(s) {
    // 
    let count =0;
    let n = s.length;
   for (let i=0;i<n;i+=3){
      if(s[i]!='S') {
       count++;
       console.log(`first letter is not S count=`+count);
      }
     if (s[i+1]!='O') {
       count++;
       console.log(`second letter is not O count=`+count);
    }
     if   (s[i+2]!='S') {
        count++;
        console.log(`third letter is not S count=`+count);
     }
    }
   console.log(`count=${count}`);
   return count; 
}
let s ="SSSSSSSSSSSSSSSOOOOOOOOOOOOOOOOOOOOOOOOOSSSSSSSO" ; //exp 26
let s1= 'SOSSOTSOS';  //exp 1
let s2="SOSSPSSQSSOR" ;//exp 3
let s3='PPP' //exp 3
//marsExploration(s);
//marsExploration(s1);
//marsExploration(s2);
marsExploration(s3);


function test(s){
    for (let el of s){
        if(el=='h') console.log('h')
//The second block( else if) will only execute if the first one(if) did not, and the second check is true.
        else if(el=='e') console.log('e =====end of first loop')
    }

    for (let el of s){
        //if it is true will execute
        if(el=='h') console.log('h')
        //if it is true will execute
        if(el=='e') console.log('e =====end of second loop')
    }
}
test('hello')